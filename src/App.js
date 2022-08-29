import React from 'react'
 import "./App.css"
function App() {
  return (
    <>
    <div className='flex justify-around text-lg font-semibold text-sky-500'>
    <div className='flex justify-evenly'>
      <a className='m-8 ui3 hover:text-sky-700' href="/">LOGO Here</a>
      <a className='m-8 ui3 hover:text-sky-700' href="/">Home</a>
      <a className='m-8 ui3 hover:text-sky-700' href="/">Page NO.2</a>
      <a className='m-8 ui3 hover:text-sky-700' href="/">Page NO.3</a>
    </div>
    <div>
      <div className='flex justify-evenly '>
        <button className='m-8 bg-sky-500 hover:bg-sky-800 text-white pr-6 pl-6 pt-1 pb-1 rounded-lg' >Signup</button>
        <button className=' bor m-8 bg-white hover:bg-slate-100 text-sky-500  border-t-sky-600  pr-6 pl-6 pt-1 pb-1 rounded-lg' >Login</button>
      </div>
    </div>
  </div>


  <div className='flex justify-center items-center mt-11 ui'>
  <div>
    <div className='flex flex-col  bg-sky-50 pr-32 pl-32 pb-8 ui4'>
     <div className='flex justify-start -ml-32'>
      <img src="Ellipse 1.png"  width={100} alt="" />
     </div>
     <div className=' flex  items-center justify-center '>
      <img src="/public/animation_640_l7bl38nc 1.png " width={300} alt="" />
     </div>
     <div className='flex  flex-col justify-center items-center mt-10'>
      <p className='font-bold text-xl text-blue-500'>Forget Password</p>
      <p className='text-sm text-blue-500'>Lorem ipsum, dolor sit Ea, doloremque iusto!</p>
     </div>
    </div>

  </div>




<div className='bg-white  pt-12 pr-10 pl-10 ui2 ui4 ui5' >
<div>
<div className='flex flex-col justify-center items-center mb-12'>
  <div className='mb-16 mr-72'>
    <img src="—Pngtree—button plus icon_3566852.jpg" width={40} height={40} alt="" />
  </div>



  <div className='flex flex-col '>
  <div>
    <p className='font-bold text-2xl'>Enter the OTP</p>
    <p>Please enter OTP recieved on <span className='text-sky-500'> rcsxx@gmail.com </span></p>
  </div>
  <div>

  <div className='mt-14'>
  <p>Enter Email or Mobile</p>
 <input type="email" name='email' placeholder=' Enter Email or Mobile' className='border w-96 h-10' />
  </div>

  <div className='mt-4'>
  <p>OTP</p>
 <input type="email" name='email' placeholder='enter the otp' className='border  w-96 h-10' />
 <p className='text-blue-600 text-sm'>Resend OTP</p>
  </div>


  <div className='mt-4'>
    <button className='pr-20 pl-20 pb-1 pt-1 w-96 h-10 bg-sky-500 hover:bg-sky-800 text-cyan-50'>Reset</button>
  </div>

</div>

  </div>
</div>
    </div>
</div>
</div>
    </>
  )
}

export default App

