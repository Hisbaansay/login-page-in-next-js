import type { NextPage } from 'next'
import Head from 'next/head'
import {FaFacebook,FaLinkedin,FaGoogle,FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md';
import LoginForm from '../components/login-form'
//import 'tailwindcss/base';
//import 'tailwindcss/components';
//import 'tailwindcss/utilities';
//import './index.css';

function Login()  {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='vh-100 d-flex justify-content-center align-items-center mt-48 ml-80'>
       <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl' >
        <div className='w-3/5 p-5'>
          <div className='text-left font-bold'>
            <span className='text-green-500'>Company</span>Name
          </div>
          <div className='py-10'>
            <h2 className='text-3xl font-bold text-green-500 ml-16 '>Sign in to Account</h2>
            <div className='border-2 w-20 border-green-500 inline-block mb-2 ml-40'></div>
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
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <FaRegEnvelope className='text-gray-400 m-2'/>
                <input type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1'/>
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <MdLockOutline className='text-gray-400 m-2'/>
                <input type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/>
              </div>
              <label><input type ="checkbox"/>Remember me</label>
              <a href = "#" className='border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign up</a>
              
            </div>
          </div>
          </div>
        <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
          <h2 className='text-3xl font-bold mb-2'>Hello,Friend</h2>
          <div className='border-2 w-20 border-white inline-block mb-2 ml-9'></div>
          <p className='mb-10'>ulrsdhgludrhglkudrshg</p>
          <a href = "#" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500'>Sign up</a>
          </div>
        </div>  
      </main>
    </div>
  )
}

export default Login