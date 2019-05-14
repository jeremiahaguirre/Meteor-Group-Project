import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Workspaces = new Mongo.Collection("Workspaces");

Meteor.methods({
    "workspaces.create"(title, participants=[]) {
      // if (!this.userId) {
      //   throw new Meteor.Error("not-authorized");
      // }
  
      Workspaces.insert({
        title,
        createdAt: new Date(),
        admins: this.userId,
        participants,
      });
  },
  "workspaces.addParticipants"(_id, participants = []) {
      // if (!this.userId) {
      //   throw new Meteor.Error("not-authorized");
      // }
    Workspaces.update(_id, { $push: { participants } });
  },
  "workspaces.removeParticipants"(_id, participants = []) {
    // if (!this.userId) {
    //   throw new Meteor.Error("not-authorized");
    // }
    Workspaces.update(_id, { $pull: { participants } });
  },
  });