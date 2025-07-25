//this form lets us to add a new family member


import { useState } from 'react';         // Import useState for managing form inputs

import { Dialog } from '@headlessui/react';  // Import Dialog component from Headless UI (used for modals)

import API from '../api/axios';       // Import API instance for making HTTP requests


// Define the AddMemberModal component and receive props: isOpen, onClose, and onAdd
function AddMemberModal ({ isOpen, onClose, onAdd }) {

    //set initial form state
    const [form, setForm] = useState({
        name: '',
        relationship: '',
        side: 'Paternal',
        photo: null
    });



    //handleChange updates text/select values.
    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };


    //handles photo file change
    const handlePhotoChange = e => {
        setForm(prev => ({ ...prev, photo: e.target.file[0] }));    // Store selected file
    };


    // Handles form submission
    const handleSubmit = async e => {
        e.preventDefault();             // Prevent page reload on form submit
        const data = new FormData();    // FormData is used to send files
        for (let key in form) data.append(key, form[key]);      // Add all fields to FormData

        try {
            // POST request to backend with photo and text data
            const res = await API.post('/family', data, {
                headers: { 'Content-Type': 'nultipart/form-data' },
            });
console.log('Added:', res.data);   //debug log
            onAdd(res.data);     // Pass the new member back to parent component, triggered frontend update
            onclose();           // close the modal
        } catch (err) {
            console.error(err);        //show error if request fails
        }
    };



    return (
        // Headless UI modal wrapper, visible when `isOpen` is true
        <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">

            <div className="flex item-center justify-center min-h-screen bg-black bg-opacity-40 p-4">
                {/* modal box */}
                <Dialog.Panel className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
                    <Dialog.Title className="text-lg font-semibold mb-4">Add Family Member</Dialog.Title>

                    {/* for to collect member info */}
                    <form onSubmit={handleSubmit} className='space-y-4'>

                        {/* input for name */}
                        <input
                            name='name'
                            type='text'
                            placeholder='Full Name'
                            onChange={handleChange}
                            required
                            className='w-full border p-2 rounded'
                        />


                        {/* input for relationship */}
                        <input
                            name='relationship'
                            type='text'
                            placeholder='Relationship (e.g. uncle, father, mother, ...)'
                            onChange={handleChange}
                            required
                            className='w-full border p-2 rounded'
                        />

                        {/* dropdowm to select father's or mother's side */}
                        <select
                            name='side'
                            onChange={handleChange}
                            className='w-full border p-2 rounded'
                        >
                            <option value="Father">Father's Side</option>
                            <option value="Mother">Mother's Side</option>
                        </select>



                        {/* file to input upload photo */}
                        <input
                            type='file'
                            accept='image/*'
                            onChange={handlePhotoChange}
                            required
                            className='w-full'
                        />


                        {/* Submit button */}
                        <button
                            type='submit'
                            className='bg-blue-600 hover:bg-blue-700 text-white px-2 rounded w-full'
                        >
                            Add Member
                        </button>
                    </form>
                </Dialog.Panel>
            </div>

        </Dialog>



    );

};

export default AddMemberModal;