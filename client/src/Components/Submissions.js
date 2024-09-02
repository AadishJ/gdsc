import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Submissions() {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const response = await axios.get('https://gdscbackend.onrender.com/submissions');
                if (Array.isArray(response.data)) {
                    setSubmissions(response.data);
                } else {
                    console.error('Unexpected response format:', response.data);
                    setSubmissions([]);
                }
            } catch (error) {
                console.error('Error fetching submissions:', error);
                setError('There was an error fetching submissions.');
                setSubmissions([]);
            } finally {
                setLoading(false);
            }
        };

        fetchSubmissions();
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">Submissions</h2>
            {loading && (
                <div className="flex justify-center items-center h-64">
                    <svg className="animate-spin h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"></path>
                    </svg>
                </div>
            )}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {!loading && !error && (
                <ul className="space-y-4">
                    {submissions.length > 0 ? (
                        submissions.map((submission, index) => (
                            <li key={index} className="p-4 border border-indigo-300 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                                <p className="text-gray-700">{submission.Input}</p>
                            </li>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No submissions yet.</p>
                    )}
                </ul>
            )}
        </div>
    );
}

export default Submissions;
