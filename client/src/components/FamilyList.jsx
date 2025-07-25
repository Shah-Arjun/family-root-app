import React from 'react'

export default function FamilyList({ members }) {
    if (members.length === 0) {
        return (
            <p className="text-center text-gray-500 mt-6">No family members added yet.</p>
        );
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto">
            {members.map((member) => (
                <div key={member._id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
                    <p className="text-gray-700">Relation: {member.relation}</p>
                    <p className="text-sm text-gray-500 italic">Side: {member.side}</p>
                </div>
            ))}
        </div>
    );
}
