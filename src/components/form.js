import { useState } from 'react';

function FormComponent() {
    const [formData, setFormData] = useState({
        inputValue: '',
        emailValue: '',
        selectValue: '',
        additionalInfo: '',
        signUp: false,
        gender: '',
        ageRange: 18,
        dob: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { inputValue, emailValue, selectValue, additionalInfo, signUp, gender, ageRange, dob } = formData;
        alert(`Name: ${inputValue}, Email: ${emailValue}, Language: ${selectValue}, Additional Info: ${additionalInfo}, SignUp: ${signUp}, Gender: ${gender}, Age Range: ${ageRange}, DOB: ${dob}`);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-800 py-10">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 border-2 border-blue-300 max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">User Information</h2>

                <div className="mb-4">
                    <label htmlFor="inputValue" className="block text-gray-700">Enter Name:</label>
                    <input
                        id="inputValue"
                        name="inputValue"
                        type="text"
                        value={formData.inputValue}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="emailValue" className="block text-gray-700">Email:</label>
                    <input
                        id="emailValue"
                        name="emailValue"
                        type="email"
                        value={formData.emailValue}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="selectValue" className="block text-gray-700">Select Language:</label>
                    <select
                        id="selectValue"
                        name="selectValue"
                        value={formData.selectValue}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded focus:ring focus:ring-blue-200"
                    >
                        <option value="">Choose a language</option>
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="spanish">Spanish</option>
                        <option value="chinese">Chinese</option>
                        <option value="hindi">Hindi</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="additionalInfo" className="block text-gray-700">Additional Info:</label>
                    <input
                        id="additionalInfo"
                        name="additionalInfo"
                        type="text"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700">Gender:</label>
                    <div className="flex items-center">
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Female
                        </label>
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="ageRange" className="block text-gray-700">Age Range: {formData.ageRange}</label>
                    <input
                        id="ageRange"
                        name="ageRange"
                        type="range"
                        min="18"
                        max="100"
                        value={formData.ageRange}
                        onChange={handleChange}
                        className="w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="dob" className="block text-gray-700">Date of Birth:</label>
                    <input
                        id="dob"
                        name="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="mb-6 flex items-center">
                    <input
                        id="signUp"
                        name="signUp"
                        type="checkbox"
                        checked={formData.signUp}
                        onChange={handleChange}
                        className="mr-2 text-blue-600 focus:ring focus:ring-blue-200"
                    />
                    <label htmlFor="signUp" className="text-gray-700">Sign Up for Newsletter</label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormComponent;
