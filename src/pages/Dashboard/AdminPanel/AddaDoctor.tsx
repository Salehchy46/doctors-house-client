'use client';
import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import imageup from '../../../assets/dashboard/imageup.png';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '@/components/hooks/useAxiosSecure';
import Swal from 'sweetalert2';

interface formData {
  name: string,
  email: string,
  specialty: string,
  image: string,
}

const AddaDoctor: React.FC = () => {
  const axiosSecure = useAxiosSecure();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<formData>();

  const handleDoctorAdd = (data: formData) => {
    const newDoctor = {
      name: data.name,
      email: data.email,
      specialty: data.specialty,
      image: data.image,
    }

    axiosSecure.post('/expertDoctors', newDoctor)
      .then(res => {
        console.log(res);
        if (res.data) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Appointment Submitted Successfully.',
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      })
  }

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
      <form action="" onSubmit={handleSubmit(handleDoctorAdd)}>
        <fieldset className="fieldset rounded-box  p-8 w-[540px] h-[650px] bg-white shadow-md">
          {/* Name Field */}
          <div className="mb-6">
            <label className="label font-semibold text-[14px] mb-2 block">Name</label>
            <input
              {...register('name', { required: true })}
              type="text"
              className="input input-lg bg-white border border-gray-300 rounded-md w-full p-3 text-sm focus:outline-none focus:border-teal-500"
              placeholder="Enter Your Name"
            />
            {errors.name && <span className="text-red-600">Name is required</span>}
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="label font-semibold text-[14px] mb-2 block">Email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              className="input input-lg bg-white border border-gray-300 rounded-md w-full p-3 text-sm focus:outline-none focus:border-teal-500"
              placeholder="Enter Your email"
            />
            {errors.email && <span className='text-red-600'>Email is required</span>}
          </div>

          {/* Specialty Field */}
          <div className="mb-6">
            <label className="label font-semibold text-[14px] mb-2 block">Specialty</label>
            <input
              {...register('specialty', { required: true })}
              type="text"
              className="input input-lg bg-white border border-gray-300 rounded-md w-full p-3 text-sm focus:outline-none focus:border-teal-500"
              placeholder="Teeth Orthodontics"
            />
            {errors.specialty && <span className='text-red-600'>specialty is required</span>}
          </div>

          {/* Upload Photo Section */}
          <div className="mb-8">
            <label className="label font-semibold text-[14px] mb-2 block">Upload Your Photo</label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-teal-500 transition-colors">
              <input
                {...register('image', { required: true })}
                type="file"
                id="file-upload"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              {errors.image && <span className='text-red-600'>Image is required</span>}
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
      </form>
    </div>
  );
};

export default AddaDoctor;