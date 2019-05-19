import { Meteor } from "meteor/meteor";
  
Meteor.methods({
  'users.clearnotifications'() {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Meteor.users.update({ _id:this.userId },{$set:{'profile.notifications':[]}});
  }
})
if (Meteor.isServer) {
  Meteor.publish("userProfiles", function userProfiles(){
    return Meteor.users.find({_id:!this.userId}, { services: 0});
  });
}
