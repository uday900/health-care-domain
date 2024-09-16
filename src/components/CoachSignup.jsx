import React, { useState   } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CoachSignUp() {
    const [formData, setFormData] = useState({
        
        name: '',
        password: '',
        rePassword: '',
        dateOfBirth: '',
        gender: '',
        mobileNumber: '',
        specialty: '',
    });
    const [errorMsgs, setErrorMsgs] = useState({
        name: false,
        password: false,
        rePassword: false,
        dateOfBirth: false,
        gender: false,
        mobileNumber: false,
        specialty: false,
    });
    const [isregester, setIsregester] = useState(false);
    const [id, setId] = useState(0);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateDate = (dateOfBirth) => {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        const age = today.getFullYear() - birthDate.getFullYear();
        return age >= 20 && age <= 100;
    };

    const validateMobileNumber = (mobileNumber) => {
        const regex = /^\d{10}$/; // Matches 10 digits
        return regex.test(mobileNumber);
    };

    const isFormValid = () => {
        let hasErrors = false;
        setErrorMsgs({
            name: false,
            password: false,
            rePassword: false,
            dateOfBirth: false,
            gender: false,
            mobileNumber: false,
            specialty: false,
        });

        if (formData.name.length < 3 || formData.name.length > 50) {
            hasErrors = true;
            setErrorMsgs(prev => ({ ...prev, name: true }));
        }

        if (formData.password.length < 5 || formData.password.length > 10) {
            hasErrors = true;
            setErrorMsgs(prev => ({ ...prev, password: true }));
        }

        if (!validateDate(formData.dateOfBirth)) {
            hasErrors = true;
            setErrorMsgs(prev => ({ ...prev, dateOfBirth: true }));
        }

        if (!validateMobileNumber(formData.mobileNumber)) {
            hasErrors = true;
            setErrorMsgs(prev => ({ ...prev, mobileNumber: true }));
        }

        if (formData.specialty.length === 0) {
            hasErrors = true;
            setErrorMsgs(prev => ({ ...prev, specialty: true }));
        }

        return !hasErrors;
    };

    const getId = (nthmember) => {
        const prefix = "WC24coach";
        console.log(nthmember + "th member");
        const number = nthmember.toString().padStart(3, '0');
        return `${prefix}${number}`;
    };
     const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid()) {
            // console.log(formData);

            //sending coach data to json
            const nthmember =await axios.get('http://localhost:8080/coaches').then(res => res.data.length + 1);
            const coachId = getId(nthmember);
            axios.post('http://localhost:8080/coaches', {...formData, id: coachId})
            .then(response => {
                setId(response.data.id);
            })
            // setFormData({
            //     name: '',
            //     password: '',
            //     rePassword: '',
            //     dateOfBirth: '',
            //     gender: '',
            //     mobileNumber: '',
            //     specialty: '',
            // });
            setIsregester(true);
        } else {
            console.log("Form is invalid");
        }
    };

    return (
        <>
        { isregester ? (
            <div>
                <div className="flex flex-col items-center justify-center bg-gray-200 min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                {/* Image */}
                {/* <img
                    src="/path-to-your-image.png" // Replace with the path to your image
                    alt="Coach Avatar"
                    className="w-32 h-32 mb-4 mx-auto"
                /> */}
                
                {/* Coach Name and ID */}
                <h2 className="text-2xl font-bold">You are a Coach now!</h2>
                <p className="text-lg mt-2">Coach Name: {formData.name}</p>
                <p className="text-lg">Your Coach ID is {id}</p>
                
                {/* Login Button */}
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => navigate('/coachlogin')}>
                    Login Now
                </button>
            </div>
        </div>
            </div>
        ) : (
            <div className='bg-gray-800 text-white flex items-center justify-center'>
            <div className="py-8 px-6">
                <h2 className="text-2xl font-bold text-center mb-4">Life Coach Profile</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full text-black border-gray-400 rounded-md px-3 py-2"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errorMsgs.name && <p className="text-red-500">Name must be between 3 and 50 characters</p>}
                    </div>
                    <div className="mb-4 flex space-x-5">
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full text-black border-gray-400 rounded-md px-3 py-2"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            {errorMsgs.password && <p className="text-red-500">Password must be between 5 and 10 characters</p>}
                        </div>
                        <div>
                            <label htmlFor="password">Re-enter Password:</label>
                            <input
                                type="password"
                                id="rePassword"
                                name="rePassword"
                                className="w-full text-black border-gray-400 rounded-md px-3 py-2"
                                value={formData.rePassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            className="w-full text-black border-gray-400 rounded-md px-3 py-2"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                        {errorMsgs.dateOfBirth && <p className="text-red-500">Date of Birth must be between 20 and 100 years old</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender">Gender:</label>
                        <div className="flex space-x-4">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                            required/>
                            <label htmlFor="gender-male">Male</label>
                            <input
                                type="radio"
                                id="gender-female"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                            />
                            <label htmlFor="gender-female">Female</label>
                        </div>
                    </div>
                    <div className="mb-4 flex space-x-5">
                        <div>
                            <label htmlFor="mobileNumber">Mobile Number:</label>
                            <input
                                type="tel"
                                id="mobileNumber"
                                name="mobileNumber"
                                className="w-full text-black border-gray-400 rounded-md px-3 py-2"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                required
                            />
                            {errorMsgs.mobileNumber && <p className="text-red-500">Mobile Number must be 10 digits</p>}
                        </div>

                        <div>
                            <label htmlFor="specialty">Specialty:</label>
                            <input
                                type="text"
                                id="specialty"
                                name="specialty"
                                className="w-full text-black border-gray-400 rounded-md px-3 py-2"
                                value={formData.specialty}
                                onChange={handleChange}
                                required
                            />
                            {errorMsgs.specialty && <p className="text-red-500">Specialty must be between 3 and 50 characters</p>}
                        </div>
                        
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
        )}
        </>
    );
}

export default CoachSignUp;
