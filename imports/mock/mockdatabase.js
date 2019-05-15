export const Users = [
  {
  _id:'user1',
  email:'user1@gmail.com',
  password:'password1',
  profile: {
    name:'Gavin',
    employer:'Cactus Club',
    professions:['Manager'],
    }
  }
];

export const Jobs = [
{  _id:'Employee1',
  title:'Chef',
  description:'Looking for someone who can cook',
  location:'Vancouver, BC',
  professions:['an array of string'],
  time:'3-12',
  createdAt: new Date(),
  owner:'user1',
  taken: false},
];

export const Applications = [
  {
  aplicant: {
    _id:'user1',
    email:'user1@gmail.com',
    profile: {
      name:'Gavin',
      professions:'Chef',
      }
  },
    job: {
      _id:'Employee1',
      title:'Chef',
      description:'Looking for someone who can cook',
      location:'Vancouver, BC',
      professions:'an array ',
      time:'3-12',
      createdAt: new Date(),
      owner:'user1',
      taken: false
    },
  status:'boolean (null if pending,true if accepted, false if declined)',
  createdAt: new Date(),
  },
  
]

//import {Jobs,Applications,Users} form '..d'