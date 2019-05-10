import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor"

export const Jobs = new Mongo.Collection("jobs");

Meteor.methods({
  "jobs.insert"(title, description) {
    // if (!this.userId) {
    //   throw new Meteor.Error("not-authorized");
    // }

    Jobs.insert({
      title,
      description,
      location: undefined,
      professions: [],
      // workspace
      createdAt: new Date(),
      owner: 0 // change when auth set up: (this.userId)
    });
  }
});
