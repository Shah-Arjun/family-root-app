import React, { useEffect, useState } from 'react';
import FamilyForm from './components/FamilyForm';
import FamilyList from './components/FamilyList';

function App() {

  const [members, setMembers] = useState([]);



  const fetchMembers = async () => {
const res = await fetch('http://localhost:5000/api/family');
const data = await res.json.json();
setMembers(data);
  };



  const addMember = async (member) => {
    const res = await fetch('http://localhost:5000/api/family', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(member),
    });

    const newMember = await res.json();
    setMembers([...members, newMember]);
  };



useEffect(() => {
  fetchMembers();
}, []);


  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <h1 className='text-3xl font-bold text-center text-blue-700'>👨‍👩‍👧‍👦 Family Record App</h1>

      {/* adds (renders) the FamilyForm component */}
      <FamilyForm onAdd={addMember} />


      {/* 👇 Display list of recent added family members */}
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



    </div>
  );
}

export default App;
