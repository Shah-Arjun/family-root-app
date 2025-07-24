//CRUD lofic with controllers

const FamilyMember = require('../models/FamilyMember');   //Import model



//  exporting a controller function named addMember so it can be used in route file (like in routes/family.js).
// req (request): Contains the data sent by frontend (e.g., form submission).
// res (response): Used to send a response back to the client.
// async: Function is asynchronous, so you can use await inside it.

// to add new member(fmaily member)
exports.addMember = async (req, res) => {               //(req, res) are the usual request and response objects from Express.
    try {
        const member = new FamilyMember(req.body);    // Create new document(FamilyMember object) from POST data, request (user le enter) gareko data lai new member banayo
        const saved = await member.save();           //save to mongoDB and wait until it is fully saved and go to next line
        res.status(201).json(saved)               //  Then respond with saved data with 201 (created)
    } catch (err) {
        res.status(400).json({ error: err.message });    //If anything goes wrong (like:
        //required field missing
        //wrong enum value
        //MongoDB connection issue),
        //it catches the error and sends a 400 (Bad Request) with the error message.
    }
};



//to get all members
exports.getMembers = async (req, res) => {
    try {
        const members = await FamilyMember.find().sort({ created: -1 });  // Find all & sort in descending order of created time (newest first)
        res.json(members);            //send the array of members as a JSON response to the client (like React frontend).
    } catch (err) {                                   //If there is any error (e.g., MongoDB connection issue), this block will handle it.
        res.status(500).json({ error: err.message });   //Sends an error response with HTTP status 500 (Internal Server Error).
    }
};




//get one member by ID
exports.getMemberById = async (req, res) => {
    try {
        const member = await FamilyMember.findById(req.params.id);          //Gets the id from the URL, like /api/members/1234567890.
        if (!member) return res.status(404).json({ error: 'Not found' });   // Handle invalid ID, or if id not exist
        res.json(member);             //else member found then return theri data in JSON format.
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};




//to Update member by ID
exports.updateMember = async (req, res) => {
    try {
        const updated = await FamilyMember.findByIdAndUpdate(
            req.params.id,            // gets the ID from the request URL (like /api/members/64fa123abc456def).
            req.body,                 // Contains the updated data sent from the frontend
            { new: true }              //  Tells Mongoose to return the updated document instead of the old one.
        );
        res.json(updated)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};



//Delete member by ID
exports.deleteMember = async (req, res) => {
    try {
        await FamilyMember.findByIdAndDelete(req.params.id);   //find id and delete
        res.json({message: 'Deleted'});         //Find success message
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};