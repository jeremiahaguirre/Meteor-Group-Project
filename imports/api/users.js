import { Meteor } from "meteor/meteor";
  
if (Meteor.isServer) {
  Meteor.publish("userProfiles", function userProfiles(){
    return Meteor.users.find({_id:!this.userId}, { services: 0});
  });
}
