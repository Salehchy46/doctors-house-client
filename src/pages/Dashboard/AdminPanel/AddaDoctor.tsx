'use client';
import React, { useState, ChangeEvent } from 'react';
import imageup from '../../../assets/dashboard/imageup.png';

const AddaDoctor: React.FC = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => {
        if (typeof ev.target?.result === 'string') {
          setPreviewUrl(ev.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-10">Add a New Doctor</h2>
      <fieldset className="fieldset rounded-box  p-8 w-[540px] h-[650px] bg-white shadow-md">
        {/* Name Field */}
        <div className="mb-6">
          <label className="label font-semibold text-[14px] mb-2 block">Name</label>
          <input
            type="text"
            className="input input-lg bg-white border border-gray-300 rounded-md w-full p-3 text-sm focus:outline-none focus:border-teal-500"
            placeholder="Enter Your Name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="label font-semibold text-[14px] mb-2 block">Email</label>
          <input
            type="email"
            className="input input-lg bg-white border border-gray-300 rounded-md w-full p-3 text-sm focus:outline-none focus:border-teal-500"
            placeholder="Enter Your email"
          />
        </div>

        {/* Specialty Field */}
        <div className="mb-6">
          <label className="label font-semibold text-[14px] mb-2 block">Specialty</label>
          <input
            type="text"
            className="input input-lg bg-white border border-gray-300 rounded-md w-full p-3 text-sm focus:outline-none focus:border-teal-500"
            placeholder="Teeth Orthodontics"
          />
        </div>

        {/* Upload Photo Section */}
        <div className="mb-8">
          <label className="label font-semibold text-[14px] mb-2 block">Upload Your Photo</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-teal-500 transition-colors">
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex flex-col items-center justify-center">
                <span className="text-gray-600 text-sm">Upload Your Photo</span>
                <img
                  src={imageup} 
                  alt="Upload icon" 
                  width={40} 
                  height={40} 
                  className="mb-2"
                />
                
              </div>
            </label>
          </div>
        </div>

        {/* Preview Image */}
        {previewUrl && (
          <div className="mb-4 flex justify-center">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-32 h-32 rounded-md object-cover border"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="btn w-full bg-teal-950 hover:bg-teal-700 text-white font-semibold py-3 rounded-md transition-colors"
        >
          Add
        </button>
      </fieldset>
    </div>
  );
};

export default AddaDoctor;