//FamilyMember model (MongoDB schema)


const mongoose = require('mongoose');    // Import mongoose to define schema

const familyMemberSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    relation: {
        type: String,
        enum: ['Father', 'Mother', 'Brother', 'Sister', 'Uncle', 'Aunt', 'Cousin', 'Grandparent', 'Other'],  // Only allowed values from this list
        required: true
    },
    side: {
        type: String,
        enum: ['Paternal', 'Maternal'],
        required: true
    },
    photoUrl: {
        type: String,    // Will store the image URL (cloud or local)
        default: ''       // Optional: defaults to empty string
    },
    dob: {
        type: Date,
    },
    dod: {
        type: Date,
    },
    additionalInfo: {
        type: String,       // Optional extra details (bio, location, etc.)
    },
},{
    timestamps: true     //adds the following two fields to your MongoDB documents: 1.createdAt – the date/time when the document was first created , 2.updatedAt – the date/time when the document was last updated      
});

// Export model to use in controllers
module.exports = mongoose.model('FamilyMember', familyMemberSchema);
