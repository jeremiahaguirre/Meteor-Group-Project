export const Users = [
  {
    _id: "user1",
    email: "user1@gmail.com",
    password: "password1",
    profile: {
      name: "Gavin",
      employer: "Cactus Club",
      professions: ["Manager"]
    }
  },
  {
    _id: "user2",
    email: "user2@gmail.com",
    password: "password2",
    profile: {
      name: "Patty",
      employer: "RED Academy",
      professions: ["Director"]
    }
  },
  {
    _id: "user3",
    email: "user3@gmail.com",
    password: "password3",
    profile: {
      name: "Patty",
      employer: "RED Academy",
      professions: ["Director"]
    }
  },
  {
    _id: "user4",
    email: "user4@gmail.com",
    password: "password4",
    profile: {
      name: "Bill",
      employer: "RED Academy",
      professions: ["Manager"]
    }
  },
  {
    _id: "user5",
    email: "user5@gmail.com",
    password: "password5",
    profile: {
      name: "Sally",
      employer: "Baby-Sitting",
      professions: ["Owner"]
    }
  }
];

export const Jobs = [
  {
    _id: "Employee1",
    title: "Chef",
    description: "Looking for someone who can cook",
    location: "Vancouver, BC",
    professions: ["an array of string"],
    time: "3-12",
    createdAt: new Date(),
    owner: "user1",
    taken: false
  },

  {
    _id: "Employee2",
    title: "teacher",
    description: "Looking for someone who can teach React",
    location: "Vancouver, BC",
    professions: ["an array of string"],
    time: "9-5",
    createdAt: new Date(),
    owner: "user2",
    taken: false
  },

  {
    _id: "Employee3",
    title: "teacher",
    description: "Looking for someone who can teach UX Design",
    location: "Vancouver, BC",
    professions: ["an array of string"],
    time: "9-5",
    createdAt: new Date(),
    owner: "user",
    taken: false
  },
  {
    _id: "Employee4",
    title: "teacher",
    description: "Looking for someone that can landscape",
    location: "Burnaby, BC",
    professions: ["an array of string"],
    time: "9-5",
    createdAt: new Date(),
    owner: "user",
    taken: false
  },
  {
    _id: "Employee5",
    title: "Babysitter",
    description: "Looking for someone that can babysit",
    location: "Richmond, BC",
    professions: ["an array of string"],
    time: "9-5",
    createdAt: new Date(),
    owner: "user",
    taken: false
  }
];

export const Applications = [
  {
    aplicant: {
      _id: "user1",
      email: "user1@gmail.com",
      profile: {
        name: "Gavin",
        professions: "Chef"
      }
    },
    job: {
      _id: "Employee1",
      title: "Chef",
      description: "Looking for someone who can cook",
      location: "Vancouver, BC",
      professions: "an array ",
      time: "3-12",
      createdAt: new Date(),
      owner: "user1",
      taken: false
    },
    status: "boolean (null if pending,true if accepted, false if declined)",
    createdAt: new Date()
  },
  {
    aplicant: {
      _id: "user2",
      email: "user1@gmail.com",
      profile: {
        name: "Patty",
        professions: "Director"
      }
    },
    job: {
      _id: "Employee2",
      title: "teacher",
      description: "Looking for someone who can teach React",
      location: "Vancouver, BC",
      professions: "an array ",
      time: "9-5",
      createdAt: new Date(),
      owner: "user2",
      taken: false
    },
    status: "boolean (null if pending,true if accepted, false if declined)",
    createdAt: new Date()
  },
  {
    aplicant: {
      _id: "user3",
      email: "user3@gmail.com",
      profile: {
        name: "Patty",
        professions: "Director"
      }
    },
    job: {
      _id: "Employee3",
      title: "teacher",
      description: "Looking for someone who can teach UX design",
      location: "Vancouver, BC",
      professions: "an array ",
      time: "9-5",
      createdAt: new Date(),
      owner: "user3",
      taken: false
    },
    status: "boolean (null if pending,true if accepted, false if declined)",
    createdAt: new Date()
  },
  {
    aplicant: {
      _id: "user4",
      email: "user4@gmail.com",
      profile: {
        name: "Bill",
        professions: "Manager"
      }
    },
    job: {
      _id: "Employee4",
      title: "Landscaper",
      description: "Looking for someone that can landscape",
      location: "Vancouver, BC",
      professions: "an array ",
      time: "9-5",
      createdAt: new Date(),
      owner: "user4",
      taken: false
    },
    status: "boolean (null if pending,true if accepted, false if declined)",
    createdAt: new Date()
  },
  {
    aplicant: {
      _id: "user5",
      email: "user5@gmail.com",
      profile: {
        name: "Sally",
        professions: "CEO"
      }
    },
    job: {
      _id: "Employee5",
      title: "Babysitter",
      description: "Looking for someone that can babysit",
      location: "Richmond, BC",
      professions: "an array ",
      time: "9-5",
      createdAt: new Date(),
      owner: "user5",
      taken: false
    },
    status: "boolean (null if pending,true if accepted, false if declined)",
    createdAt: new Date()
  }
];

//import {Jobs,Applications,Users} form '..d'
