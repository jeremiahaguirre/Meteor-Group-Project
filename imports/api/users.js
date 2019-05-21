import { Meteor } from "meteor/meteor";
  
Meteor.methods({
  'users.clearNotifications'() {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Meteor.users.update({ _id:this.userId },{$set:{'profile.notifications':[]}});
  },
  'users.clearRepliesRecieved'() { 
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Meteor.users.update({
      _id: this.userId,
      'profile.notifications': {
        $elemMatch: {
          applicantId: this.userId,
        }
      }
    },{$set:{'profile.notifications':[]}});
   },
  'users.clearAppsRecieved'() {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Meteor.users.update({
      _id: this.userId,
      'profile.notifications': {
        $elemMatch: {
          jobOwnerId: this.userId,
        }
      }
    },{$set:{'profile.notifications':[]}});
   },

})
if (Meteor.isServer) {
  Meteor.publish("userProfiles", function userProfiles() {
    return Meteor.users.find({}, { services: 0});
  });
}
