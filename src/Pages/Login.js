import React from 'react'
import Footer from '../Components/Footer';
import Header from "../Components/Header";

const Login = () => {
  return (
    <>
     <div className="w-full">
     <Header/>

      <div className="mx-auto max-w-[1300px] px-5">

         <div className="max-w-[500px] mx-auto mt-12 px-5">
          <div className="text-[35px] font-[800] tracking-wide text-center mb-[40px]">LOGIN</div>
        
        

          <div className="entering-card rounded-xl px-10 pt-8 pb-8 text-white">
           <form>
            <div>
                <div className='text-[#505458] text-[17px] mb-2 font-[800]'>User Email</div>
                <input type="email" className='w-full text-black outline-none bg-white rounded-full px-3 py-2' />
            </div>

            <div className='mt-7'>
                <div className='text-[#505458] text-[17px] mb-2 font-[800]'>Password</div>
                <input type="password" className='w-full text-black outline-none bg-white rounded-full px-3 py-2' />
            </div>

            <a href="/#" className='text-[#505458] block w-fit mt-4'>Did you forget your password?</a>
      
           <div className="flex justify-end mt-5"><button className='button-shadow font-[700] bg-white text-[17px] py-2 px-7 text-[#3E3E3E]'>Login</button></div>
           </form>
    
         </div>




         </div>



      </div>
      <Footer/>

     </div>
    </>
  )
}

export default Login