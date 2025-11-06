'use client'
import React, { useContext } from 'react';
import frame1 from '../../assets/frame1.png';
import frame2 from '../../assets/frame2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '@/context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import type { UserCredential } from 'firebase/auth';

// Main Component
const Register: React.FC = () => {
  // redirect to the page
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/';
  console.log('state capture from', location?.state);

  //auth error 
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { login } = useContext(AuthContext);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const passwordInput = form.elements.namedItem('password') as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;
    console.log(email, password);

    login(email, password)
      .then((result: UserCredential) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'Logged in Successfully',
          text: 'You Logged-in',
          icon: 'success',
        });
        navigate(from, { replace: true });
      })
      .catch((error: unknown) => {
        // Firebase errors are typically objects with 'message'
        if (error instanceof Error) {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
          });
        } else {
          console.error(error);
        }
      });
  };

  return (
    <div className="max-w-[1280px] mx-auto min-h-screen flex">
      {/* Left side - Image/Branding */}
      <div className="hero-content bg-teal-950 w-full">
        <div className="lg:flex bg-teal-950 relative">
          <img
            className="w-[570px] h-[570px] relative top-16 left-10"
            src={frame2}
            alt=""
          />
          <img
            className="w-[460px] h-80 relative right-72 bottom-40"
            src={frame1}
            alt=""
          />
        </div>
      </div>
      {/* Right side - Login Form */}
      <div className="w-full bg-white text-black items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8"></div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card w-full max-w-sm shrink-0 shadow-xl">
              <div className="w-[460px] max-w-sm shadow-xl shrink-0 ">
                <div className="text-center">
                  <h2 className="text-3xl font-bold p-5">Sign up to DOC HOUSE</h2>
                </div>
                <div className="card-body p-10">
                  <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">
                      <label className="label text-xl font-semibold">Email</label>
                      <input
                        type="email"
                        className="input bg-gray-100"
                        name="email"
                        placeholder="Enter your Email"
                      />
                      <div className="flex justify-between items-center">
                        <label className="label text-xl font-semibold">
                          Password
                        </label>
                        <div>
                          <a className="link link-hover text-[#F7A582]">
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="input bg-gray-100"
                        placeholder="Enter your Password"
                      />
                      <input
                        type="submit"
                        value="Log in"
                        className="btn btn-lg border-0 bg-[#F7A582] hover:bg-transparent hover:border hover:border-[#F7A582] hover:text-[#F7A582] mt-4 rounded-xl"
                      />
                    </fieldset>
                  </form>
                  <p className="text-[18px] text-center">
                    Please register at first. Go to{' '}
                    <Link to="/register" className="text-[#F7A582] font-bold">
                      SIGN UP
                    </Link>
                  </p>
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
