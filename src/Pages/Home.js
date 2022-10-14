import React from 'react'
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import {Link} from 'react-router-dom'

const Home = () => {



  return (
    <>
       <div className="w-full">
     <Header/>

      <div className="w-full">
      <video src="/images/video.mp4" className='w-full  object-contain' autoPlay muted loop></video>
      <div className="mx-auto max-w-[1000px] px-5 absolute top-[300px] text-white left-1/2 -translate-x-1/2 w-full">
      <div>
        <h1 className='font-[800] text-5xl leading-tight'>
        Welcome<br/>
        to the best<br/>
        Trading Bot Platform
      </h1>
      <div className="flex flex-wrap gap-7 mt-7">
      <Link to='/signup' className='button-shadow font-[700] bg-white text-[17x] py-3 w-[150px] flex items-center justify-center text-[#3E3E3E]'>SIGNUP</Link>
      <Link to='/' className='button-shadow font-[700] bg-transparent border-2 border-white text-[17x] py-3 w-[150px] flex items-center justify-center text-white'>ABOUT US</Link>

      </div>
      </div>
        
      </div>
      </div>

     <div className="relative z-20">
        

     </div>
     <Footer/>
     </div>
    </>
  )
}

export default Home