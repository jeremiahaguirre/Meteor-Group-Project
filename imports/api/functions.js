import { Jobs } from "../../api/jobs";
import { Applications } from "../../api/applications";

export function getJobPosts() {
    const jobs = Jobs.find({}).map(job => {
        const owner = Meteor.users.findOne({ _id: job.owner });
        return { ...job, owner:owner };
      });
    return jobs;
 }

export function getApplications(){
    const applications = Applications.find({}).map(app => {
        const applicant = Meteor.users.findOne({ _id: app.applicant });
        const jobOwner = Meteor.users.findOne({ _id: app.jobOwner });
        const job = Jobs.findOne({ _id: app.jobId });
        return {...app,applicant:applicant,jobOwner:jobOwner,job:job}
    });
    return applications;
}