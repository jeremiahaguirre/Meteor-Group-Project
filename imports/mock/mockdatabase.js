export const Users = [
  {
  _id:'string',
  email:'string',
  password:'string',
  profile: {
    name:'string',
    employer:'boolean',
    professions:'array of strings',
    }
  }
];

export const Jobs = [
{  _id:'string',
  title:'string',
  description:'string',
  location:'string',
  professions:'an array of string',
  time:'string',
  createdAt: new Date(),
  owner:'string(id of the employer that posted this)',
  taken: false},
];

export const Applications = [
  {
  aplicant: {
    _id:'string',
    email:'string',
    profile: {
      name:'string',
      professions:'array of strings',
      }
  },
    job: {
      _id:'string',
      title:'string',
      description:'string',
      location:'string',
      professions:'an array of string',
      time:'string',
      createdAt: new Date(),
      owner:'string(id of the employer that posted this)',
      taken: false
    },
  status:'boolean (null if pending,true if accepted, false if declined)',
  createdAt: new Date(),
  },
  
]

//import {Jobs,Applications,Users} form '..d'