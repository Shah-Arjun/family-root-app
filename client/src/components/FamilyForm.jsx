import React, { useState } from 'react';     //Import React and useState hook from React library. useState lets us add React state to function components.


// Define a functional component named FamilyForm.
// It receives a prop called onAdd — a function that will be called when the form submits a new family member.
function FamilyForm({ onAdd }) {
    const [form, setForm] = useState({      //Initialize a state variable named form with an object containing three fields: name, relation, and side.
        // Initial values: empty strings for name and relation, 'Paternal' as default for side.
        // setForm is the function to update the form state.
        name: '',
        relation: '',
        side: 'Paternal',  //default value
    });


    // handleChange is an event handler triggered when any input changes.
    // It updates the form state by:
    // Using spread operator ...form to copy existing fields,
    // Then updating the specific field (e.target.name) with the new value (e.target.value)
    // This keeps state in sync with user inputs dynamically    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    // handleSubmit is triggered when the form is submitted.
    // e.preventDefault() stops the default page reload on form submit.
    // Calls the onAdd function passed as prop with the current form data.
    // await waits for the onAdd async operation to complete (like an API call).
    // Resets the form state back to initial empty/default values, clearing the form for next input.
    const handleSubmit = async (e) => {
        e.preventdefault();
        await onAdd(form);
        setForm({ name: '', relation: '', side: 'Paternal' });
        ;
    }



    // The component returns JSX that renders a <form> element.
    // The form’s onSubmit attribute is wired to handleSubmit.
    // The form has Tailwind CSS classes for styling: white background, padding, rounded corners, shadow, max width, centered, margin, and spacing between child elements.
    return (
        <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md max-w-md mx-auto my-6 space-y-4'>

            <h2 className='text-xl font-semibold text-gray-700'>Add Family Member</h2>

            <input
                name='name'
                placeholder='Name'
                value={form.name}             //value is tied to form.name so input reflects the current state.
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                required
            />

            <input
                name='relation'
                placeholder='Relation (e.g. Father, Aunt)'
                value={form.relation}             //value is tied to form.relation so input reflects the current state.
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                required
            />

            <select
                name='side'
                value={form.side}          //value bound to form.side
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            >
                <option value="Paternnal">Paternal</option>
                <option value="Maternal">Maternal</option>
            </select>

            <button
                type='submit'
                className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition'
            >
                Add Member
            </button>

        </form>
    );
}

export default FamilyForm;
