import React, { useEffect, useState } from 'react';
import FamilyForm from './components/FamilyForm';
import FamilyCard from './components/FamilyCard'; // UI component for each member
import Dashboard from './pages/Dashboard';
import API from './api/axios';
import AddMemberModal from './components/AddMemberModal';


function App() {
  const [members, setMembers] = useState([]);       // holds all family members
  const [searchTerm, setSearchTerm] = useState(''); // holds current search input
  const [error, setError] = useState(null);         // holds any error message
  const [showModal, setShowModal] = useState(false);


  // useEffect runs once on component mount
  // Fetches all family members from backend
  useEffect(() => {
    API.get('/family')
      .then(res => {
        console.log('fetched', res.data);    //debug fetch
        setMembers(res.data);        // save fetched data to state
        setError(null);              // clear any previous error
      })
      .catch(err => {
        console.error('Fetch failed:', err);
        setError('Failed to load family members.');  // set error message
      });
  }, []);



  //  const filtered = family.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()));


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
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">Family Records 👨‍👩‍👧‍👦</h1>

      {/* Search + Add Button */}
      <div className="flex justify-between items-center max-w-2xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="p-2 border rounded w-full mr-2"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Member
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}

      {/* Family Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {filteredFamily.map(member => (
          <FamilyCard key={member._id} member={member} />
        ))}
      </div>

      {/* Modal to Add Member */}
      <AddMemberModal
        isOpen={showModal}
        onClose = {() => setShowModal(false)}
        onAdd={addMember}
      />

      {/* Dashboard Placeholder */}
      <Dashboard />
    </div>



  );
}

export default App;
