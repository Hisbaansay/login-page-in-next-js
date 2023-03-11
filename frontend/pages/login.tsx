import type { NextPage } from 'next'
import Head from 'next/head'
import {FaFacebook,FaLinkedin,FaGoogle,FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md';
import LoginForm from '../components/login-form'

function Login()  {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='vh-100 sm:flex sm:justify-center sm:items-center mt-8'>
        <div className='sm:bg-white sm:rounded-2xl sm:shadow-2xl sm:flex sm:w-2/3 sm:max-w-4xl'>
          <div className='sm:w-3/5 p-5'>
            <div className='text-left font-bold'>
              <span className='text-green-500'>Company</span>Name
            </div>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-green-500 ml-16 mb-4 sm:text-4xl sm:ml-0'>Sign in to Account</h2>
              <div className='border-2 w-20 border-green-500 inline-block mb-2 ml-40 sm:hidden'></div>
              <div className='flex justify-center my-2'>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaFacebook className='text-sm'/>
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaLinkedin className='text-sm'/>
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaGoogle className='text-sm'/>
                </a>
              </div>
              <p className='text-gray-400 my-3'></p>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope className='text-gray-400 m-2'/>
                  <input type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <div className='bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3'>
                  <MdLockOutline className='text-gray-400 m-2'/>
                  <input type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <label><input type ="checkbox"/>Remember me</label>
                <a href = "#" className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign up</a>
              </div>
            </div>
          </div>
          <div className='sm:w-2/5 sm:bg-green-500 sm:text-white sm:rounded-tr-2xl sm:rounded-br-2xl sm:py-36 sm:px-12'>
        <h2 className='text-3xl font-bold mb-4'>Welcome back!</h2>
    <p className='text-sm mb-8'>Enter your credentials to access your account.</p>
        {/* <LoginForm /> */}
</div>
</div>
</main>
</div>
)
}

export default Login
