import { Meteor } from "meteor/meteor";
import Links from "/imports/api/links";

function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {});
