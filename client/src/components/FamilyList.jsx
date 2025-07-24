import React from 'react'

export default function FamilyList({ members }) {
    if (members.length === 0) {
        return (
            <p className="text-center text-gray-500 mt-6">No family members added yet.</p>
        );
    }

    return (
        <div>{members.map((member) => {
            <div key={member._id} className=''>
                <h3 className=''>{member.name}</h3>
                <p className=''>Relation: {member.relation}</p>
                <p className=''>Side: {member.side}</p>
            </div>
        })}
        </div>
    );

}
