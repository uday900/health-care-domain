import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function CoachSignup() {
    const [isregester, setIsregester] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const password = watch('password');
    const registerCoach = (data) => {
        console.log(data);
        // setIsregester(true);
    }
    return (
        <div>
            {isregester ? (
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
                            <p className="text-lg mt-2">Coach Name: {}</p>
                            <p className="text-lg">Your Coach ID is </p>

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
                    <div className=" py-8 px-6 shadow-xl">
                        <h2 className="text-2xl font-bold text-center mb-4">Life Coach Profile</h2>

                        <form onSubmit={handleSubmit(registerCoach)}>

                            <div className="mb-4">
                                <label htmlFor="name">Name <span className="text-red-400">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full text-black border-gray-400 rounded-md px-3 py-2"
                                    {...register('name', {
                                        required: {
                                            value : true, message: "Name is required",
                                        },
                                        minLength: {
                                            value: 3, message: "Name must be at least 3 characters",
                                        },

                                    })} 
                                />
                                { errors.name?.type && <p className='text-red-400'>{errors.name?.message}</p>}

                            </div>
                            <div className="mb-4">
                                <label htmlFor="email">Email <span className="text-red-400">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full text-black border-gray-400 rounded-md px-3 py-2"
                                    {...register('email', {
                                        required: {
                                            value : true, message: "mail id is required",
                                        },
                                        

                                    })} 
                                />
                                { errors.email?.type && <p className='text-red-400'>{errors.email?.message}</p>}

                            </div>
                            <div className="mb-4 flex space-x-5">
                                <div>
                                    <label htmlFor="password">Password <span className="text-red-400">*</span></label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="w-full text-black border-gray-400 rounded-md px-3 py-2"
                                       {...register("password",
                                        {
                                            required:{ value: true, message: "Password is required"},
                                            minLength: {value: 5, message: "Password must be at least 5 characters"},

                                        }
                                       )}
                                    />
                                    { errors.password?.type && <p className='text-red-400'>{errors.password?.message}</p>}

                                    {/* { console.log(password)} */}
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword">Confirm password <span className="text-red-400">*</span></label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="w-full text-black border-gray-400 rounded-md px-3 py-2"
                                       {...register("confirmPassword",{
                                        required:{ value: true, message: "confirm password is required"},
                                        validate: (confirmPassword) => confirmPassword === password || "Passwords do not match",
                                       })}
                                    />
                                    { errors.confirmPassword?.type && <p className='text-red-400'>{errors.confirmPassword?.message}</p>}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="dateOfBirth">Date of Birth:</label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    className="w-full text-black border-gray-400 rounded-md px-3 py-2"
                                   {...register("dateOfBirth")}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="gender">Gender:</label>
                                <div className="flex space-x-4">
                                    <input
                                        type="radio"
                                        id="gender-male"
                                        name="gender"
                                        value="Male"
                                        {...register("gender")}
                                        />
                                    <label htmlFor="gender-male">Male</label>
                                    <input
                                        type="radio"
                                        id="gender-female"
                                        name="gender"
                                        value="Female"
                                        {...register("gender")}
                                    />
                                    <label htmlFor="gender-female">Female</label>
                                </div>
                            </div>
                            <div className="mb-4 flex space-x-5">
                                <div>
                                    <label htmlFor="mobileNumber">Mobile Number <span className="text-red-400">*</span></label>
                                    <input
                                        type="tel"
                                        id="mobileNumber"
                                        name="mobileNumber"
                                        className="w-full text-black border-gray-400 rounded-md px-3 py-2"
                                       {...register("mobileNumber",{
                                        required : { value: true, message: "mobile number is required"},

                                       })}
                                    />
                                    { errors.mobileNumber?.type && <p className='text-red-400'>{errors.mobileNumber?.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="specialty">Specialty <span className="text-red-400">*</span></label>
                                    <input
                                        type="text"
                                        id="specialty"
                                        name="specialty"
                                        className="w-full text-black border-gray-400 rounded-md px-3 py-2"
                                        {...register("specialty", {
                                            required: {
                                                value : true, message: "specialty is required",
                                            }
                                        })}
                                    />
                                    { errors.specialty?.type && <p className='text-red-400'>{errors.specialty?.message}</p>}
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
        </div>
    )
}

export default CoachSignup