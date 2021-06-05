const axios = require('axios');

const request = {
  url: 'http://localhost:4000/auth/register',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const dummies = [
  {
    name: 'Cat meow',
    username: 'meow',
    password: 'meow123'
  },
  {
    name: 'Owl Buuh',
    username: 'Buh64',
    password: 'owl123'
  },
  {
    name: 'Dog woof',
    username: 'wof12',
    password: 'dog123'
  }
];

async function createDummies () {
  try {
    for (const dummy of dummies) {
      request.data = dummy;
      await axios.request(request);
    }
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.headers);
    console.log(error.response.status);
  }
}

createDummies();
