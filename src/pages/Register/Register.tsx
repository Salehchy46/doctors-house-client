'use client';
import React, { useContext } from 'react';
import frame1 from '../../assets/frame1.png';
import frame2 from '../../assets/frame2.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthContext from '@/context/AuthContext/AuthContext';
import useAxiosPublic from '@/components/hooks/useAxiosPublic';
import Swal from 'sweetalert2';

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const { createUser } = useContext(AuthContext); 
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Only email and password for Firebase auth
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log('Firebase user created:', loggedUser);

        // Save additional info to DB
        const userInfo = {
          name: data.name,
          username: data.username,
          email: data.email,
        };

        axiosPublic.post('/users', userInfo).then(res => {
          if (res.data.insertedId) {
            console.log('User added to the database');
            reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'User Created Successfully',
              showConfirmButton: false,
              timer: 1500,
            });
            navigate('/')
          }
        });
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      });
  };

  return (
    <div className="max-w-[1280px] mx-auto min-h-screen flex">
      {/* Left side - Image/Branding */}
      <div className="hero-content bg-teal-950 w-full">
        <div className="lg:flex bg-teal-950 relative">
          <img className="w-[570px] h-[570px] relative top-16 left-10" src={frame2} alt="" />
          <img className="w-[460px] h-80 relative right-72 bottom-40" src={frame1} alt="" />
        </div>
      </div>

      {/* Right side - Register Form */}
      <div className="w-full bg-white text-black items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card w-full max-w-sm shrink-0 shadow-xl">
                <div className="w-[460px] max-w-sm shadow-xl shrink-0">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold p-5">Sign up to DOC HOUSE</h2>
                  </div>
                  <div className="card-body p-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Name</label>
                        <input
                          {...register('name', { required: true })}
                          type="text"
                          className="input bg-gray-100"
                          placeholder="Enter your Name"
                        />
                        {errors.name && <span className="text-red-600">Name is required</span>}

                        <label className="label text-xl font-semibold">Username</label>
                        <input
                          {...register('username', { required: true })}
                          type="text"
                          className="input bg-gray-100"
                          placeholder="Enter your Username"
                        />
                        {errors.username && <span className="text-red-600">Username is required</span>}

                        <label className="label text-xl font-semibold">Email</label>
                        <input
                          {...register('email', { required: true })}
                          type="email"
                          className="input bg-gray-100"
                          placeholder="Enter your Email"
                        />
                        {errors.email && <span className="text-red-600">Email is required</span>}

                        <label className="label text-xl font-semibold">Password</label>
                        <input
                          {...register('password', {
                            required: true,
                            minLength: 6,
                            maxLength: 16,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/,
                          })}
                          type="password"
                          className="input bg-gray-100"
                          placeholder="Enter your Password"
                        />
                        {errors.password?.type === 'required' && (
                          <span className="text-red-600">Password is required</span>
                        )}
                        {errors.password?.type === 'minLength' && (
                          <span className="text-red-600">Password must be at least 6 characters</span>
                        )}
                        {errors.password?.type === 'maxLength' && (
                          <span className="text-red-600">Password must be less than 16 characters</span>
                        )}
                        {errors.password?.type === 'pattern' && (
                          <span className="text-red-600">
                            Password must have uppercase, lowercase, number and special character
                          </span>
                        )}

                        <input
                          type="submit"
                          className="btn btn-lg border-0 bg-[#F7A582] mt-4 rounded-xl hover:bg-transparent hover:border hover:border-[#F7A582] hover:text-[#F7A582]"
                          value="Create Account"
                        />
                      </fieldset>
                    </form>
                    <p className="text-[18px] text-center">
                      Already registered? Go to{' '}
                      <Link to="/login" className="text-[#F7A582] font-bold">
                        SIGN IN
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
