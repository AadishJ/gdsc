import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function InputBox() {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Disable the submit button

        try {
            await axios.post('https://gdscbackend.onrender.com/', { text: input });
            alert('Submitted successfully!');
            setInput(''); 
        } catch (error) {
            console.error('Error submitting:', error);
            alert('There was an error submitting your input.');
        } finally {
            setIsLoading(false); // Re-enable the submit button
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
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className={`mt-4 px-6 py-3 rounded-md text-white transition duration-200 ease-in-out ${isLoading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-500'}`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Submitting...' : 'Submit'}
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
