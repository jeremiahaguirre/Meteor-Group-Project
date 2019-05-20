import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Applications = new Mongo.Collection("applications");

Meteor.methods({
  "applications.apply"(jobId, jobOwner) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Applications.insert({
      applicant: this.userId,
      jobId,
      jobOwner,
      status: null,
      createdAt: new Date()
    }, function (err, appId) {
        if (!err) Meteor.users.update(
          { _id: jobOwner },
          {
            $push: {
              "profile.notifications":
              {
                applicationId: appId,
                applicantId: this.userId,
                jobOwnerId:jobOwner,
                status:null}
            }
          });
    });
    
  },
  "applications.reply"(_id,applicantId, status) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Applications.update(_id, {
      $set: {
        status
      }
    });
    Meteor.users.update(
      { _id: applicantId },
      {
        $push: {
          "profile.notifications":
          {
            applicationId: _id,
            applicantId,
            jobOwnerId:this.userId,
            status}
        }
      });
  }
});

if (Meteor.isServer) {
  Meteor.publish("sentApplications", function() {
    return Applications.find({ applicant: this.userId });
  });
  Meteor.publish("recievedApplications", function() {
    return Applications.find({ jobOwner: this.userId, status: null });
  });
}
