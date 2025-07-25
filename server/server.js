// ===========================================
// 📁 File: server.js
// ✅ Main entry point for backend API server
// ===========================================

// Import required modules
const express = require('express');           // Framework for creating the server and handling routes
const mongoose = require('mongoose');         // ODM for connecting and interacting with MongoDB
const cors = require('cors');                 // Middleware to allow cross-origin requests
require('dotenv').config();                   // Loads environment variables from a .env file into process.env

// Create an instance of Express
const app = express();

// ✅ Middleware setup
app.use(cors());                              // Allows requests from other domains (e.g., frontend server)
app.use(express.json());                      // Parses incoming JSON requests (req.body)
app.use('/uploads', express.static('uploads'));// To serve static files like uploaded images

// ✅ Test Route: Check API connection
app.post('/api/test', (req, res) => {
  res.json({ message: 'Test POST route works!' });
});

// ✅ Import and use main API routes
const familyRoutes = require('./routes/familyRoutes');

// 🛠️ Change this:
// app.use('/api/family', familyRoutes);

// ✅ Fix this to match your frontend axios requests:
app.use('/api/members', familyRoutes);
// Now, any request to /api/members will be handled by familyRoutes.js
// Example: GET /api/members → get all members
//          POST /api/members → add a member

// ✅ Root route to test if API is running
app.get('/', (req, res) => {
  res.send('API is working 🚀');
});

// ✅ Define the server port (use from .env or default to 5000)
const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,                      // Use new URL parser (best practice)
  useUnifiedTopology: true                   // Use modern topology engine
})
.then(() => {
  console.log('✅ Connected to MongoDB');      // Success message after connecting

  // ✅ Start the Express server
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => console.log('❌ MongoDB Connection Error:', err)); // Log any MongoDB connection error
