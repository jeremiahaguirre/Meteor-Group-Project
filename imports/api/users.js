import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  Meteor.publish("allUsers", () => {
    return Meteor.users.find();
  });
}
