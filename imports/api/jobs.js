import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Jobs = new Mongo.Collection("jobs");

Meteor.methods({
  "jobs.open"(title, description, location, time, professions = []) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Jobs.insert({
      title,
      description,
      location,
      time,
      professions,
      createdAt: new Date(),
      owner: this.userId,
      taken: false,
      requested: false,
    });
  },
  "jobs.close"(_id) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Jobs.update({ _id: _id, taken: false }, { $set: { taken: true } });
  },
  "jobs.delete"(_id) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Jobs.remove({ _id: _id });
  }
});

if (Meteor.isServer)
{
  Meteor.publish("allJobs", function openJobsPublication() {
    return Jobs.find({});
  });
  Meteor.publish("openJobs", function openJobsPublication() {
    return Jobs.find({ taken: false });
  });
  Meteor.publish("postedJobs", function postedJobsPublication() {
    return Jobs.find({ owner: this.userId });
  });
}
