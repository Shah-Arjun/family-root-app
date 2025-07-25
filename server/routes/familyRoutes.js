//express routes


const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // this stores uploaded files in `uploads/`


const express = require('express');   //import express

const router = express.Router();  //This creates a router instance – a small, modular, and mountable route handler. It lets you define multiple routes and then export them to use in server.js.


//Destructs and Import functions from controllers 
const {
    getAllFamily,
    addMember,
    getMembers,
    getMemberById,
    updateMember,
    deleteMember,
} = require('../controllers/familyController');


// Defining API Endpoints (RESTful Routes)
router.post('/', upload.single('photo'), addMember);  // ✅ With image upload
//router.post('/', addMember)           //When a POST request is made to /api/family, this calls the addMember function. 💡 This route is used for adding a new family member.
router.get('/', getMembers);          // GET   /api/family
router.get('/:id', getMemberById);    // GET   /api/family/:id    ,,When a GET request is made to /api/family/123, this extracts the id from the URL and calls getMemberById.
router.put('/:id', updateMember);     // PUT    /api/family/:id    ,,When a PUT request is made to /api/family/123, this updates the member with that id.
router.delete('/:id', deleteMember);   //DETELE  /api/family/:id
//router.get('/', getAllFamily);
//router.post('/', upload.single('photo'), addMember);


module.exports = router;     //exporting router iso that it can be use in server.js 
