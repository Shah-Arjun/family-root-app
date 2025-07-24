import React from 'react';
import MemberCard from '../components/FamilyCard'

const Dashboard = () => {

    // Temporary data until backend is connected
    const mermbers = [
        { _id: 1, name: 'Hira', relation: 'Father', side: 'Paternal' },
        { _id: 2, name: 'Gita', relation: 'Mother', side: 'Maternal' },
    ];


    return (
        <div>
            <h1>👨‍👩‍👧‍👦 Family Record</h1>

            <div>
                {mermbers.map(member => (
                    <MemberCard key={member._id} member={member} />
                ))}
            </div>

        </div>
    );
};

export default Dashboard;
