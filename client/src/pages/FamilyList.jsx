// 📁 File: src/pages/FamilyTree.jsx
import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import { motion } from 'framer-motion';

const FamilyTree = () => {
  const [members, setMembers] = useState([]);

  // ✅ Fetch members from API
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await API.get('/members');
        setMembers(res.data);
      } catch (err) {
        console.error('Error fetching members:', err);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">🌳 Our Family Tree</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((member) => (
          <motion.div
            key={member._id}
            className="bg-white shadow-lg rounded-xl p-4 text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={member.image || 'https://via.placeholder.com/150'}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.relation}</p>
            <p className="text-sm text-gray-600 italic">{member.gender}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FamilyTree;
