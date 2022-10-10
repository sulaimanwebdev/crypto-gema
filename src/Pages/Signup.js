import React from 'react'
import Footer from '../Components/Footer';
import Header from "../Components/Header";

const Signup = () => {

    const [selectBox, setselectBox] = React.useState('hidden');
    const [selectText, setselectText] = React.useState('Yes');
  return (
    <>
     <div className="w-full">
     <Header/>

      <div className="mx-auto max-w-[1300px] px-5">

         <div className="max-w-[500px] mx-auto mt-12 px-5">
          <div className="text-[35px] font-[800] tracking-wide text-center mb-[40px]">SIGN UP</div>
        
        

          <div className="close-to-enter-card rounded-xl px-10 pt-8 pb-8 text-white">
           <form>
            <div>
                <div className='text-[#505458] text-[17px] mb-2 font-[800]'>Email</div>
                <input type="email" className='w-full text-black outline-none bg-white rounded-full px-3 py-2' />
            </div>

            <div className='mt-7'>
                <div className='text-[#505458] text-[17px] mb-2 font-[800]'>Password</div>
                <input type="password" className='w-full text-black outline-none bg-white rounded-full px-3 py-2' />
            </div>

            <div className='mt-7'>
                <div className='text-[#505458] text-[17px] mb-2 font-[800]'>Repeat Password</div>
                <input type="password" className='w-full text-black outline-none bg-white rounded-full px-3 py-2' />
            </div>

            <div className="mt-7">
            <div className='text-[#505458] text-[17px] mb-2 font-[800]'>Are you registerd at xx broker?</div>
            <div onClick={()=> {selectBox === "hidden" ? setselectBox('') : setselectBox('hidden')}} className="flex items-center relative gap-4 cursor-pointer rounded-full bg-white w-fit text-[#505458] px-3 py-1">
                {selectText} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>
            <div className={`${selectBox} absolute top-full left-0 w-full bg-white  rounded-md`}>
                <div onClick={()=> {setselectText('Yes')}} className='border-b px-3 py-1'>Yes</div>
                <div onClick={()=> {setselectText('No')}} className='px-3 py-1'>No</div>
            </div>
            </div>
            
            </div>
            
            <div className="flex items-center mt-7 gap-2"><input type="checkbox" className='h-4 w-4 cursor-pointer' name="checkbox" id="checkbox" /> <label htmlFor='checkbox' className='text-[#505458] cursor-pointer block w-fit'>Did you forget your password?</label></div>
      
           <div className="flex justify-end mt-5"><div className="bg-white w-fit px-3.5 py-1.5"><button className='button-shadow font-[700] bg-white text-[17px] py-2 px-7 text-[#3E3E3E]'>REGISTER</button></div></div>
           </form>
    
         </div>




         </div>



      </div>
      <Footer/>

     </div>
    </>
  )
}

export default Signup