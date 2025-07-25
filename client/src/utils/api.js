//1. Connect to Backend with Axios

// set up Axios to make API calls to fetch family data
//Axios is a promise-based HTTP client. It helps us make API requests (GET, POST, PUT, DELETE) easily in React or any JavaScript project.

import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5000/api",  // Adjust if needed
});

export default API;
