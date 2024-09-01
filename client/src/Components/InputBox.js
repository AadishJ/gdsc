import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function InputBox() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/', { text: input });
            alert('Submitted successfully!');
            setInput(''); 
        } catch (error) {
            console.error('Error submitting:', error);
            alert('There was an error submitting your input.');
        }
    };

    const handleShowSubmissions = (e) => {
        e.preventDefault();
        navigate('/submissions'); 
    };

    return (
        <div className="w-full flex flex-col items-center">
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Type something..."
                />
                <button
                    type="submit"
                    className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition duration-200 ease-in-out"
                >
                    Submit
                </button>
            </form>
            <button
                onClick={handleShowSubmissions}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200 ease-in-out"
            >
                Show Submissions
            </button>
        </div>
    );
}

export default InputBox;
