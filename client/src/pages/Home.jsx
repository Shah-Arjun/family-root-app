import { useState } from "react";
import AddMemberModal from "../components/AddMemberModal";
import MemberCard from "../components/MemberCard";
import { motion } from "framer-motion";

export default function Home() {
  const [members, setMembers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSide, setFilterSide] = useState("");

  const handleAddMember = (e) => {
    e.preventDefault();
    const form = e.target;
    const newMember = {
      name: form.name.value,
      relation: form.relation.value,
      side: form.side.value,
      photo: URL.createObjectURL(form.photo.files[0]),
    };
    setMembers([...members, newMember]);
    form.reset();
    setShowModal(false);
  };

  const filteredMembers = members.filter((member) => {
    return (
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterSide === "" || member.side === filterSide)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-4 text-purple-700">FamilyRoot</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or relation..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={filterSide}
          onChange={(e) => setFilterSide(e.target.value)}
        >
          <option value="">All</option>
          <option value="paternal">Paternal</option>
          <option value="maternal">Maternal</option>
        </select>
      </div>

      {/* Add Member Button */}
      <div className="text-center mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="bg-purple-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-purple-700"
        >
          Add Family Member
        </motion.button>
      </div>

      {/* Member Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMembers.map((member, idx) => (
          <MemberCard key={idx} member={member} />
        ))}
      </div>

      {showModal && (
        <AddMemberModal onClose={() => setShowModal(false)} onSubmit={handleAddMember} />
      )}
    </div>
  );
}
