// Import required modules
const express = require('express');           // Framework for creating the server and handling routes
const mongoose = require('mongoose');         // ODM for connecting and interacting with MongoDB
const cors = require('cors');                 // Middleware to allow cross-origin requests
require('dotenv').config();                   // Loads environment variables from a .env file into process.env


// Create an instance of Express
const app = express();

// Middleware setup
app.use(cors());                              // Allows requests from other domains (e.g., frontend server) ,, allow frontend to call backend
app.use(express.json());                      // Parses incoming JSON requests (req.body)
app.use('/uploads', express.static('uploads')); // ✅ For image loading


app.post('/api/test', (req, res) => {
  res.json({ message: 'Test POST route works!' });
});


// Import and use API routes
const familyRoutes = require('./routes/familyRoutes');
app.use('/api/family', familyRoutes);       // All routes that start with /api/family will use the familyRoutes file. For eg: A GET request to /api/family will be handled by getMembers() from familyController.js.





// basic or default route to test if API is running
app.get('/', (req, res) => {
  res.send('API is working 🚀');              // Response sent on hitting root URL
});

// Define the server port (from .env or default to 5000)
const PORT = process.env.PORT || 5000;

// Connect to MongoDB using connection string from .env file
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,                      // Ensures use of new URL parser
  useUnifiedTopology: true                   // Enables new connection management engine
})
.then(() => {
  console.log('Connected to MongoDB');        // Success message after connecting to MongoDB

  // Start the server and listen for incoming requests
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.log(err));              // Log error if MongoDB connection fails
