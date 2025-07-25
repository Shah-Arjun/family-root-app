import React from 'react'
import { motion } from 'framer-motion';              // Import motion from Framer Motion library to apply animation to components



function FamilyCard({ member }) {          // Define the FamilyCard component and receive a single family 'member' as a prop
    return (

        //animate container using farmer motion
        <motion.div
            className="bg-white shadow-xl rounded-2xl overflow-hidden p-4 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}             // Animation: scale up slightly on hover
        >
            {/* member photo */}
            <img
                src={member.photo}            // Display the member's photo from backend or upload
                alt={member.name}               // Alt text improves accessibility and SEO 
                className="w-full h-48 object-cover rounded-md"  // Styles: fixed height image, rounded corners, cover fit
            />


            {/* text conatianer below image */}
            <div className='mt-2 text-center'>

                {/* show member name */}
                <h2 className='text-xl font-semibold'>{member.name}</h2>


                {/* show relationship */}
                <p className='text-gray-500 text-sm italic'>{member.relationship}</p>


                {/* show side */}
                <p className='text-gray-500 text-xs italic'>{member.side} side</p>

            </div>
        </motion.div>

    )
}

export default FamilyCard;
