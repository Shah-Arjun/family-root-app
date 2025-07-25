import React from 'react'

const FamilyCard = ({ member }) => {
    const { name, relation, side } = member;

    return (
        <div className="rounded-2xl bg-white shadow-xl p-4 hover:scale-105 transition-transform duration-300 ease-in-out border-l-4 border-blue-400">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-500">{relation}</p>
            <span className={`text-sm px-3 py-1 inline-block rounded-full mt-2
        ${side === 'Paternal' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'}`}>
                {side}
            </span>
        </div>
    );
};

export default FamilyCard;
