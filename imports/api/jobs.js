import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Jobs = new Mongo.Collection("jobs");

Meteor.methods({
  "jobs.insert"(
    title,
    description,
    location,
    time,
    professions = [],
    workspaces = []
  ) {
    // if (!this.userId) {
    //   throw new Meteor.Error("not-authorized");
    // }

    Jobs.insert({
      title,
      description,
      location,
      professions,
      workspaces,
      time,
      createdAt: new Date()
      // change when auth set up: (this.userId)
    });
  }
});

if (Meteor.isServer) {
  Meteor.publish("jobs", function jobsPublication() {
    return Jobs.find({});
  });
}
