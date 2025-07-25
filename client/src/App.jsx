// 1️⃣ Importing required modules from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// BrowserRouter: enables client-side routing (no page reloads).
// Routes: Wrapper for all <Route> components (v6+).
// Route: Used to define individual paths (URLs) and their matching components.

import Home from './pages/Home';           // 2️⃣ Importing the Home page component
import AddMember from './pages/AddMember'; // 3️⃣ Importing the AddMember page component
import FamilyTree from './pages/FamilyTree'; // 4️⃣ Importing the FamilyTree page component
import Navbar from './components/Navbar';  // 5️⃣ Importing a common navigation bar component
import {motion} from 'framer-motion';     // 10  Framer Motion for subtle animations.
import { Link } from 'react-router-dom';
import FamilyList from './pages/FamilyList';


function App() {
  return (
    // 6️⃣ Wrap everything inside <Router> to enable routing features in the app
    <Router> 
      {/* 7️⃣ Navbar is placed outside <Routes> so it shows on every page */}
      <Navbar />  

      {/* 8️⃣ Define which component to show based on the URL */}
      <Routes>
        {/* When user goes to "/", show Home component */}
        <Route path="/" element={<Home />} />  

        {/* When user goes to "/add", show AddMember form */}
        <Route path="/add" element={<AddMember />} />

        {/* When user goes to "/tree", show the FamilyTree view */}
        <Route path="/tree" element={<FamilyTree />} />

        //<Route path="/members" element={<FamilyList />} />
      </Routes>
    </Router>
  );
}

export default App; // 9️⃣ Export the App component so it can be used in index.js to render the full app.
