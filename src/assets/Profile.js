import React from "react";

const Profile = {
  "basics": {
    "name": {
        "firstName": "Hunter",
        "middleName": "Thomas",
        "lastName": "McPadden"
    },
    "label": "Programmer",
    "picture": "",
    "email": "mcpadden.hunter@gmail.com",
    "phone": "(434) 409-7040",
    "website": "http://hunterthomasinc.com",
    "summary": "Hunter is an ambitious software engineer working in Washington, DC. Currently working at National Geographic on the API Services team designing and developing serverless applications",
    "location": {
      "address": "1749 T St NW",
      "postalCode": "DC 20009",
      "city": "Washington",
      "countryCode": "US",
      "region": "District of Columbia"
    },
    "profiles": [{
      "network": "Github",
      "username": "huntermcp",
      "url": "http://github.com/huntermcp"
    }]
  },
  "work": [{
    "company": "National Geographic",
    "position": "Software Engineer",
    "website": "http://nationalgeographic.com",
    "startDate": "2016-12-05",
    "endDate": "Present",
    "summary": "API developer on Services Team. Developed in Python and Javascript to develop serverless web applications",
    "highlights": [
      "Won 2017 Hackathon",
      "Developed Django Restful APIs to service Web Applications",
      "Designed Serverless Architectures from inception to production"
    ]
  }],
  "volunteer": [{
    "organization": "Organization",
    "position": "Volunteer",
    "website": "http://organization.com/",
    "startDate": "2012-01-01",
    "endDate": "2013-01-01",
    "summary": "Description...",
    "highlights": [
      "Awarded 'Volunteer of the Month'"
    ]
  }],
  "education": [{
    "institution": "University",
    "area": "Civil Engineering",
    "studyType": "Bachelor of Science",
    "startDate": "2004-09-01",
    "endDate": "2009-05-01",
    "gpa": "3.7",
    "courses": []
  }],
  "awards": [{
    "title": "National Geographic 2017 Hackathon Winner",
    "date": "2017-11-01",
    "awarder": "National Geographic",
    "summary": "Developed speed reading application: Cheetah Reader"
  }],
  "publications": [],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "Javascript",
      "Python",
      "Serverless",
      "Amazon Web Services"
    ]
  }],
  "languages": [{
    "name": "English",
    "level": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords": [
      "Ferrets",
      "Unicorns"
    ]
  }],
  "references": [{
    "name": "Jamie Herring",
    "reference": "Reference..."
  }]
}

export default Profile;
