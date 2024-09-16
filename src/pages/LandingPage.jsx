import React from 'react';
import { useNavigate } from 'react-router-dom';
import LifeCoachProfile from '../components/Dummy';

function LandingPage() {
    const navigate = useNavigate();
  return (
    <div>

<div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-screen-xl px-4 py-8 ">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">WeCare</h1>
          <p className="text-lg text-gray-600">We are at the heart of appropriate care</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-4">
              <i className="fas fa-user-tie text-3xl text-blue-500"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Login as a Coach</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">Login</button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full mt-2"
            onClick={()=>navigate('/coachsignup')}>Join as a Coach</button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-4">
              <i className="fas fa-user text-3xl text-green-500"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Login as a User</h2>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-4">Login</button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full mt-2">Join as a User</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default LandingPage;