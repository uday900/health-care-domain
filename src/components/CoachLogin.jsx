import React, { useState } from 'react';
import profileLogo from '../assets/profile-image.png';

function CoachLogin() {
    const [coachId, setCoachId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        let valid = true;

        // Reset error message
        setErrorMessage('');

        // Validation checks
        if (coachId.trim() === '') {
            setErrorMessage('Coach Id is required');
            valid = false;
        } else if (password.length < 5 || password.length > 10) {
            setErrorMessage('Password should have 5 to 10 characters');
            valid = false;
        }

        if (valid) {
            // If validation passes, proceed with login logic
            console.log('Login Coach:', { coachId, password });
            // You can add the actual login logic here
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
                {/* Icon */}
                <img
                    src={profileLogo} // Replace with the path to your image
                    alt="Life Coach Icon"
                    className="w-16 h-16 mb-4 mx-auto rounded-full"
                />

                {/* Title */}
                <h2 className="text-xl text-white font-bold mb-6">Login As Life Coach</h2>

                {/* Form */}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Coach Id"
                            value={coachId}
                            onChange={(e) => setCoachId(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                        <div className="mb-4 text-red-500 text-sm">
                            {errorMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CoachLogin;
