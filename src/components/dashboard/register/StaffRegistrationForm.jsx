import React, { useState } from 'react';
import { inputStyle } from '../../Constants';

const StaffRegistrationForm = () => {
    const [selectedImage, setSelectedImage] = useState('');


    const handleSelectImage = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.onload = () => {
                if (img.width === img.height) {
                    // Aspect ratio is 1:1
                    setSelectedImage(reader.result);
                } else {
                    // Aspect ratio is not 1:1
                    alert('Please select an image with a 1:1 aspect ratio.');
                }
            };
            img.src = e.target.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className="bg-[#fff]">
            <div className="h-[88vh] overflow-y-auto"
                style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
                <div className="flex flex-col sm:py-[3rem] sm:px-[2rem] mx-[0.5rem] my-[0.5rem] md:mx-[4rem] sm:mx-[3rem] sm:my-[2rem] md:my-[5rem] sm:shadow-paper">
                    <h1 className="text-3xl font-normal mb-7 text-center text-[#000000]">Staff Registration</h1>
                    <div className='flex flex-col sm:flex-row sm:gap-3'>
                        <div className="w-full h-[50vh] sm:h-[55%] md:w-[50%] md:h-[70%] lg:h-[50vh] lg:w-[50%]">
                            <input
                                type="file"
                                accept="image/*"
                                name=""
                                id="imageInput"
                                className="hidden"
                                onChange={handleSelectImage}
                            />
                            <label htmlFor="imageInput" className="cursor-pointer mb-4 ">
                                {selectedImage ? (
                                    <img
                                        src={selectedImage}
                                        alt="Selected"
                                        className="w-full h-full object-contain object-center"
                                    />
                                ) : (
                                    <div className="border-2 border-dashed border-gray-400 w-full h-64 lg:h-80 xl:h-120 flex items-center justify-center">
                                        <span className="text-gray-400">Select an Image</span>
                                    </div>
                                )}
                            </label>
                        </div>
                        <form className=" w-full sm:w-1/2">
                            <div className="mb-4">
                                <label className="block text-[#000000]" htmlFor="firstname">First name</label>
                                <input className={`w-full ${inputStyle}`} type="text" id="firstname" name="name" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#000000]" htmlFor="Othernames">Other names</label>
                                <input className={`w-full ${inputStyle}`} type="text" id="Othernames" name="name" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#000000]" htmlFor="email">Email</label>
                                <input className={`w-full ${inputStyle}`} type="email" id="email" name="email" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#000000]" htmlFor="contact">Contact</label>
                                <input className={`w-full ${inputStyle}`} type="text" id="Contact" name="name" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#000000]" htmlFor="Address">Address</label>
                                <input className={`w-full ${inputStyle}`} type="text" id="Address" name="name" required />
                            </div>

                            <button className="w-full p-2 bg-blue-500 text-[#fff] rounded hover:bg-blue-600" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffRegistrationForm;