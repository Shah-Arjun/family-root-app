import React from 'react';
import MemberCard from '../components/FamilyCard'
import FamilyForm from '../components/FamilyForm';

const Dashboard = () => {

    // Temporary data until backend is connected
    const mermbers = [
        { _id: 1, name: 'Hira', relation: 'Father', side: 'Paternal' },
        { _id: 2, name: 'Gita', relation: 'Mother', side: 'Maternal' },
    ];


    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">👨‍👩‍👧‍👦 Family Record</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mermbers.map(member => (
                    <MemberCard key={member._id} member={member} />
                ))}
            </div>


            <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-3xl font-bold text-center text-blue-700">👨‍👩‍👧‍👦 Family Record Dashboard</h1>
                <FamilyForm onAdd={(member) => console.log('New member added', member)} />
            </div>


        </div>
    );
};

export default Dashboard;
