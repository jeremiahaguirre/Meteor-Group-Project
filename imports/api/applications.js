import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Applications = new Mongo.Collection("applications");

Meteor.methods({
  "applications.apply"(jobId,jobOwner) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Applications.insert({
        applicant: this.userId,
        jobId,
        jobOwner,
        status: null,
        createdAt: new Date(),
    });
    },
    "applications.reply"(_id,status) {
        if (!this.userId) {
          throw new Meteor.Error("not-authorized");
        }
        Applications.update(_id,{$set:{
            status,
        }});
        }
    
  
});

if (Meteor.isServer) {
  Meteor.publish('sentApplications', function () {
    return Applications.find({applicant:this.userId});
  });
  Meteor.publish('recievedApplications', function () {
      return Applications.find({ jobOwner:this.userId });
  });
}
