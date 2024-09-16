import React from 'react';

function LifeCoachProfile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-white text-2xl font-bold text-center mb-8">Life Coach Profile</h1>

        {/* Form Start */}
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div className="md:col-span-2">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="w-full p-3 text-black rounded-md"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            {/* Password and Re-enter Password */}
            <div>
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password:
              </label>
              <input
                className="w-full p-3 text-black rounded-md"
                id="password"
                type="password"
                placeholder="Enter password"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-bold mb-2" htmlFor="re-password">
                Re-enter Password:
              </label>
              <input
                className="w-full p-3 text-black rounded-md"
                id="re-password"
                type="password"
                placeholder="Re-enter password"
              />
            </div>

            {/* Date of Birth */}
            <div className="md:col-span-2">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="dob">
                Date of Birth:
              </label>
              <input
                className="w-full p-3 text-black rounded-md"
                id="dob"
                type="text"
                placeholder="dd-mm-yyyy"
              />
            </div>

            {/* Gender */}
            <div className="md:col-span-2">
              <label className="block text-white text-sm font-bold mb-2">Gender:</label>
              <div className="flex items-center space-x-4">
                <label className="text-white">
                  <input className="mr-2" type="radio" name="gender" value="male" />
                  Male
                </label>
                <label className="text-white">
                  <input className="mr-2" type="radio" name="gender" value="female" />
                  Female
                </label>
              </div>
            </div>

            {/* Mobile Number and Specialty */}
            <div>
              <label className="block text-white text-sm font-bold mb-2" htmlFor="mobile">
                Mobile Number:
              </label>
              <input
                className="w-full p-3 text-black rounded-md"
                id="mobile"
                type="text"
                placeholder="Enter mobile number"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-bold mb-2" htmlFor="specialty">
                Specialty:
              </label>
              <input
                className="w-full p-3 text-black rounded-md"
                id="specialty"
                type="text"
                placeholder="Enter your specialty"
              />
            </div>
          </div>

          {/* Register Button */}
          <div className="text-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        {/* Form End */}
      </div>
    </div>
  );
}

export default LifeCoachProfile;
