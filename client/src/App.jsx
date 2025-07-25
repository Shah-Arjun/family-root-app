import React, { useEffect, useState } from 'react';
import FamilyForm from './components/FamilyForm';
import FamilyCard from './components/FamilyCard'; // UI component for each member
import Dashboard from './pages/Dashboard';
import API from './api/axios';

function App() {
  const [members, setMembers] = useState([]);       // holds all family members
  const [searchTerm, setSearchTerm] = useState(''); // holds current search input
  const [error, setError] = useState(null);         // holds any error message

  // useEffect runs once on component mount
  // Fetches all family members from backend
  useEffect(() => {
    API.get('/family')
      .then(res => {
        setMembers(res.data);        // save fetched data to state
        setError(null);              // clear any previous error
      })
      .catch(err => {
        console.error('Fetch failed:', err);
        setError('Failed to load family members.');  // set error message
      });
  }, []);

  // Filters members by name (case-insensitive)
  const filteredFamily = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add a new family member (from FamilyForm)
  const addMember = async (member) => {
    try {
      const res = await API.post('/family', member);   // POST new member
      setMembers([...members, res.data]);              // add to local state
    } catch (err) {
      console.error('Add member failed:', err);
      setError('Failed to add new member.');           // set error message
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      {/* App Title */}
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        👨‍👩‍👧‍👦 Family Record App
      </h1>

      {/* Error Display */}
      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        className="p-2 border rounded w-full max-w-md mx-auto mb-6 block"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}  // update search state
      />

      {/* Cards View: filtered members */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mb-10">
        {filteredFamily.map(member => (
          <FamilyCard key={member._id} member={member} />
        ))}
      </div>

      {/* Add Member Form */}
      <FamilyForm onAdd={addMember} />

      {/* List View: all members */}
      <div className="mt-8 max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Family Members</h2>
        {members.length === 0 ? (
          <p className="text-gray-500 text-center">No members added yet.</p>
        ) : (
          <ul className="space-y-2">
            {members.map((member, index) => (
              <li key={index} className="bg-white p-4 rounded shadow">
                <p><strong>Name:</strong> {member.name}</p>
                <p><strong>Relation:</strong> {member.relation}</p>
                <p><strong>Side:</strong> {member.side}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Dashboard (for future analytics/features) */}
      <Dashboard />
    </div>
  );
}

export default App;
