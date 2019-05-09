import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const User = new Mongo.Collection("user");

Meteor.methods({
  "user.insert"(name, email, password) {
    User.insert({
      name,
      email,
      professions: [],
      employer,
      password,
      // workspace
      createdAt: new Date(),
      jobs: [] // change when auth set up: (this.userId)
    });
  }
});
