// 📁 src/components/Navbar.jsx

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">FamilyRoot 👨‍👩‍👧‍👦</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/add" className="hover:underline">Add Member</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
