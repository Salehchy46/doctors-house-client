/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import imageup from '../../../assets/dashboard/imageup.png';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '@/components/hooks/useAxiosSecure';
import Swal from 'sweetalert2';

// Interfaces (same as before, unchanged)
interface Education {
  institution: string;
  degree: string;
  years: string;
}
interface WorkExperience {
  clinic: string;
  role: string;
  years: string;
}
interface Award {
  date: string;
  title: string;
  description: string;
}
interface Contact {
  email: string;
  phone: string;
  image: string;
  country: string;
  hospital: string;
  rating: number;
  experience_years: number;
}
interface FormData {
  name: string;
  country: string;
  specialty: string;
  hospital: string;
  experience_years: number;
  rating: number;
  image: string;
  email: string;
  phone: string;
  about_me: string;
  education: Education[];
  work_experience: WorkExperience[];
  services: string[];
  awards: Award[];
  specializations: string[];
  contact: Contact;
  businessHours: {
    monday: { open: string; close: string } | null;
    tuesday: { open: string; close: string } | null;
    wednesday: { open: string; close: string } | null;
    thursday: { open: string; close: string } | null;
    friday: { open: string; close: string } | null;
    saturday: { open: string; close: string } | null;
    sunday: { open: string; close: string } | null;
  };
}

const AddaDoctor: React.FC = () => {
  const axiosSecure = useAxiosSecure();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      education: [{ institution: '', degree: '', years: '' }],
      work_experience: [{ clinic: '', role: '', years: '' }],
      services: [''],
      awards: [{ date: '', title: '', description: '' }],
      specializations: [''],
      businessHours: {
        monday: null, tuesday: null, wednesday: null, thursday: null,
        friday: null, saturday: null, sunday: null
      }
    }
  });

  // Cloudinary upload using your credentials
  const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'doctors_house'); 
    formData.append('cloud_name', 'dooxq5dm7');       

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dooxq5dm7/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || 'Upload failed');
      return data.secure_url;
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      throw new Error('Image upload failed');
    }
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Preview
      const reader = new FileReader();
      reader.onload = ev => {
        if (typeof ev.target?.result === 'string') {
          setPreviewUrl(ev.target.result);
        }
      };
      reader.readAsDataURL(file);

      // Upload to Cloudinary
      setUploading(true);
      try {
        const imageUrl = await uploadToCloudinary(file);
        setValue('image', imageUrl);
        Swal.fire({
          icon: 'success',
          title: 'Image uploaded',
          text: 'Doctor photo uploaded successfully',
          timer: 1500,
          showConfirmButton: false
        });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        Swal.fire('Error', 'Failed to upload image. Please check your Cloudinary preset or network.', 'error');
        setPreviewUrl(null);
        setValue('image', '');
      } finally {
        setUploading(false);
      }
    }
  };

  // Helper functions (addArrayField, removeArrayField unchanged)
  const addArrayField = (field: 'education' | 'work_experience' | 'services' | 'awards' | 'specializations') => {
    const current = watch(field) as any[];
    if (field === 'education') setValue(field, [...current, { institution: '', degree: '', years: '' }]);
    else if (field === 'work_experience') setValue(field, [...current, { clinic: '', role: '', years: '' }]);
    else if (field === 'awards') setValue(field, [...current, { date: '', title: '', description: '' }]);
    else setValue(field, [...current, '']);
  };

  const removeArrayField = (field: 'education' | 'work_experience' | 'services' | 'awards' | 'specializations', index: number) => {
    const current = watch(field) as any[];
    if (current.length > 1) {
      const updated = current.filter((_, i) => i !== index);
      setValue(field, updated as any);
    }
  };

  const onSubmit = async (data: FormData) => {
    // Validate image is uploaded
    if (!data.image) {
      Swal.fire('Error', 'Please upload a doctor photo', 'error');
      return;
    }

    const doctorData = {
      name: data.name,
      country: data.country,
      specialty: data.specialty,
      hospital: data.hospital,
      experience_years: Number(data.experience_years),
      rating: Number(data.rating),
      image: data.image,
      email: data.email,
      phone: data.phone,
      about_me: data.about_me,
      education: data.education,
      work_experience: data.work_experience,
      services: data.services.filter(s => s.trim() !== ''),
      awards: data.awards,
      specializations: data.specializations.filter(s => s.trim() !== ''),
      contact: {
        email: data.email,
        phone: data.phone,
        image: data.image,
        country: data.country,
        hospital: data.hospital,
        rating: Number(data.rating),
        experience_years: Number(data.experience_years)
      },
      businessHours: data.businessHours
    };

    try {
      const res = await axiosSecure.post('/expertDoctors', doctorData);
      if (res.data) {
        Swal.fire({
          icon: 'success',
          title: 'Doctor Added Successfully',
          showConfirmButton: false,
          timer: 1500
        });
        reset();
        setPreviewUrl(null);
      }
    } catch (error: any) {
      Swal.fire('Error', error.response?.data?.message || 'Failed to add doctor', 'error');
    }
  };

  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-10">Add a New Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <fieldset className="fieldset rounded-box p-8 bg-white shadow-md">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label font-semibold">Name *</label>
              <input {...register('name', { required: 'Name is required' })} className="input w-full border bg-gray-100" />
              {errors.name && <span className="text-red-600">{errors.name.message}</span>}
            </div>
            <div>
              <label className="label font-semibold">Country *</label>
              <input {...register('country', { required: 'Country is required' })} className="input w-full border bg-gray-100" />
              {errors.country && <span className="text-red-600">{errors.country.message}</span>}
            </div>
            <div>
              <label className="label font-semibold">Specialty *</label>
              <input {...register('specialty', { required: 'Specialty is required' })} className="input w-full border bg-gray-100" />
            </div>
            <div>
              <label className="label font-semibold">Hospital *</label>
              <input {...register('hospital', { required: 'Hospital is required' })} className="input w-full border bg-gray-100" />
            </div>
            <div>
              <label className="label font-semibold">Experience (years) *</label>
              <input type="number" {...register('experience_years', { required: true, valueAsNumber: true })} className="input w-full border bg-gray-100" />
            </div>
            <div>
              <label className="label font-semibold">Rating (0-5) *</label>
              <input step="0.1" type="number" {...register('rating', { required: true, min: 0, max: 5, valueAsNumber: true })} className="input w-full border bg-gray-100" />
            </div>
            <div>
              <label className="label font-semibold">Email *</label>
              <input type="email" {...register('email', { required: 'Email is required' })} className="input w-full border bg-gray-100" />
            </div>
            <div>
              <label className="label font-semibold">Phone *</label>
              <input {...register('phone', { required: 'Phone is required' })} className="input w-full border bg-gray-100" />
            </div>
          </div>

          {/* About Me */}
          <div>
            <label className="label font-semibold">About Me</label>
            <textarea {...register('about_me')} rows={3} className="textarea w-full border bg-gray-100" />
          </div>

          {/* Education */}
          <div className="pt-4">
            <label className="label font-semibold text-lg">Education</label>
            {watch('education').map((_, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-2 mb-2 items-end">
                <input {...register(`education.${idx}.institution`)} placeholder="Institution" className="input border bg-gray-100" />
                <input {...register(`education.${idx}.degree`)} placeholder="Degree" className="input border bg-gray-100" />
                <div className="flex gap-2">
                  <input {...register(`education.${idx}.years`)} placeholder="Years (e.g., 2000-2006)" className="input border bg-gray-100 flex-1" />
                  <button type="button" onClick={() => removeArrayField('education', idx)} className="btn btn-sm btn-error">X</button>
                </div>
              </div>
            ))}
            <button type="button" onClick={() => addArrayField('education')} className="btn btn-sm btn-secondary mt-2">+ Add Education</button>
          </div>

          {/* Work Experience */}
          <div className="pt-4">
            <label className="label font-semibold text-lg">Work Experience</label>
            {watch('work_experience').map((_, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-2 mb-2">
                <input {...register(`work_experience.${idx}.clinic`)} placeholder="Clinic" className="input border bg-gray-100" />
                <input {...register(`work_experience.${idx}.role`)} placeholder="Role" className="input border bg-gray-100" />
                <div className="flex gap-2">
                  <input {...register(`work_experience.${idx}.years`)} placeholder="Years" className="input border bg-gray-100 flex-1" />
                  <button type="button" onClick={() => removeArrayField('work_experience', idx)} className="btn btn-sm btn-error">X</button>
                </div>
              </div>
            ))}
            <button type="button" onClick={() => addArrayField('work_experience')} className="btn btn-sm btn-secondary">+ Add Experience</button>
          </div>

          {/* Services */}
          <div className="pt-4">
            <label className="label font-semibold text-lg">Services</label>
            {watch('services').map((_, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input {...register(`services.${idx}`)} placeholder="Service description" className="input border bg-gray-100 flex-1" />
                <button type="button" onClick={() => removeArrayField('services', idx)} className="btn btn-sm btn-error">X</button>
              </div>
            ))}
            <button type="button" onClick={() => addArrayField('services')} className="btn btn-sm btn-secondary">+ Add Service</button>
          </div>

          {/* Awards */}
          <div className="pt-4">
            <label className="label font-semibold text-lg">Awards</label>
            {watch('awards').map((_, idx) => (
              <div key={idx} className="p-2 mb-2 rounded">
                <input {...register(`awards.${idx}.date`)} placeholder="Date (e.g., 2018)" className="input border bg-gray-100 w-full mb-1" />
                <input {...register(`awards.${idx}.title`)} placeholder="Award Title" className="input border bg-gray-100 w-full mb-1" />
                <textarea {...register(`awards.${idx}.description`)} placeholder="Description" className="textarea border bg-gray-100 w-full" />
                <button type="button" onClick={() => removeArrayField('awards', idx)} className="btn btn-sm btn-error mt-1">Remove</button>
              </div>
            ))}
            <button type="button" onClick={() => addArrayField('awards')} className="btn btn-sm btn-secondary">+ Add Award</button>
          </div>

          {/* Specializations */}
          <div className="pt-4">
            <label className="label font-semibold text-lg">Specializations</label>
            {watch('specializations').map((_, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input {...register(`specializations.${idx}`)} placeholder="Specialization" className="input border bg-gray-100 flex-1" />
                <button type="button" onClick={() => removeArrayField('specializations', idx)} className="btn btn-sm btn-error">X</button>
              </div>
            ))}
            <button type="button" onClick={() => addArrayField('specializations')} className="btn btn-sm btn-secondary">+ Add Specialization</button>
          </div>

          {/* Business Hours */}
          <div className="pt-4">
            <label className="label font-semibold text-lg">Business Hours</label>
            {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
              <div key={day} className="grid grid-cols-3 gap-2 mb-2 items-center">
                <span className="capitalize">{day}</span>
                {/* @ts-expect-error dynamic path */}
                <input type="time" {...register(`businessHours.${day}.open` as const)} placeholder="Open" className="input border bg-gray-100" />
                {/* @ts-expect-error dynamic path */}
                <input type="time" {...register(`businessHours.${day}.close` as const)} placeholder="Close" className="input border bg-gray-100" />
              </div>
            ))}
          </div>

          {/* Image Upload */}
          <div className="pt-4">
            <label className="label font-semibold">Doctor Photo</label>
            <div className="border-2 border-dashed p-4 text-center">
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="doctor-img" />
              <label htmlFor="doctor-img" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <img src={imageup} alt="Upload" width={40} height={40} />
                  <span className="text-sm">{uploading ? 'Uploading...' : 'Click to upload image'}</span>
                </div>
              </label>
              {previewUrl && <img src={previewUrl} alt="Preview" className="w-32 h-32 object-cover mt-2 mx-auto" />}
            </div>
            {errors.image && <span className="text-red-600">Image upload required</span>}
          </div>

          <button type="submit" className="btn w-full bg-teal-950 text-white hover:bg-teal-700" disabled={uploading}>
            {uploading ? 'Uploading Image...' : 'Add Doctor'}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddaDoctor;