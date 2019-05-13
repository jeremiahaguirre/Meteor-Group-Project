import { Meteor } from "meteor/meteor";
import { Jobs } from '../../api/jobs';
import { Accounts } from "meteor/accounts-base";

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      email: "employer@test.com",
      password: "password",
      profile:{
        name:'employer',
        employer: true,
        professions: [],
      },
    });
    Accounts.createUser({
      email: "employee@test.com",
      password: "password",
      profile: {
        name:'employee',
        employer: false,
        professions: ["Meteor", "React", "MongoDB"],
      },
    });
  }

});