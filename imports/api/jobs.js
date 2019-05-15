import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Jobs = new Mongo.Collection("jobs");

Meteor.methods({
  "jobs.open"(
    title,
    description,
    location,
    time,
    professions = [],
  ) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

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
  Meteor.publish("openjobs", function jobsPublication() {
    return Jobs.find({taken:false});
  });
  Meteor.publish("postedjobs", function jobsPublication() {
    return Jobs.find({owner:this.userId});
  });
}

