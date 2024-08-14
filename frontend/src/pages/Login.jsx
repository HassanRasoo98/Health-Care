import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
const [formData, SetFormData] = useState({
  email:'',
  password:''

})

const handleInputChange =e => {
  SetFormData({... formData, [e.target.name]: e.target.value})
}
const submitHandler = async event =>{
  event.preventDefault()
  setLoading(true)

  try{
    const res = await fetch (`${BASE_URL}/auth/signup`,{
      method : 'POST',
      headers:{
        'Content-Type': 'application/json'   
      },
        body: JSON.stringify(formData)

    })
    const {message} = await res.json()
    if(!res.ok){
      throw new Error(message)
    
    }
    setLoading(false)
    toast.success(message)
    navigate('/login')
   

  } catch (err){
    toast.error(err.message)
    setLoading(false)
  }
}

  return (
  <section className='px-5 lg:px-0'>
    <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
      <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
        Hello! <span className='text-primaryColor'>Welcome </span>Back🎉
      </h3>
      <form className='py-4 md:py-0' onSubmit={submitHandler}>
        <div className='mb-5'>
          <input type="email" placeholder='Enter Your Email' name='email'value={formData.email}
          onChange={handleInputChange} 
          className='w-full  border-b border-solid border-[#0066ff61] focus:outline-none
          focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
          placeholder:text-textColor cursor-pointer'
          required/>
        </div>
        <div className='mb-5'>
          <input type="Password" placeholder='Password' name='password'value={formData.password}
          onChange={handleInputChange} 
          className='w-full  border-b border-solid border-[#0066ff61] focus:outline-none
          focus:border-b-primaryColor text-[22px] leading-7 text-headingColor 
          placeholder:text-textColor  cursor-pointer'
          required/>
        </div>

        <div className='mt-7'>
          <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Login</button>

        </div>
        <p className='mt-5 text-textColor text-center'>Don't have an account <Link to='/signup' className='text-primaryColor font-medium ml-1 '>SignUp</Link></p>
      </form>
    </div>

  </section>  
  
  
  
  
  )
}

export default Login