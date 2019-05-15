import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Jobs = new Mongo.Collection("jobs");

Meteor.methods({
<<<<<<< HEAD
  "jobs.insert"(
=======
  "jobs.open"(
>>>>>>> b36d22a1fe25545be5ac44c87f39b272d9b60e1b
    title,
    description,
    location,
    time,
    professions = [],
<<<<<<< HEAD
    workspaces = []
  ) {
    // if (!this.userId) {
    //   throw new Meteor.Error("not-authorized");
    // }
=======
  ) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
>>>>>>> b36d22a1fe25545be5ac44c87f39b272d9b60e1b

    Jobs.insert({
      title,
      description,
      location,
      professions,
      time,
      createdAt: new Date(),
      owner: this.userId,
      taken: false,
    });
  },
  "jobs.close"(_id) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Jobs.update({ _id:_id ,taken:false},
      { $set: { taken:true } },
    );
  },
});

if (Meteor.isServer) {
  Meteor.publish("jobs", function jobsPublication() {
    return Jobs.find({});
  });
  Meteor.publish("openJobs", function openJobsPublication() {
    return Jobs.find({taken:false});
  });
  Meteor.publish("postedJobs", function postedJobsPublication() {
    return Jobs.find({owner:this.userId});
  });
}

