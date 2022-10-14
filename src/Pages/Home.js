import React from 'react'
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import {Link} from 'react-router-dom'

const Home = () => {



  return (
    <>
       <div className="w-full bg-[#F9F6F6]">
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



      <div className="mx-auto max-w-[1000px] mt-20 px-5 w-full">
       
       <div className='font-[800] text-4xl text-[#535353] mb-3.5 leading-tight text-center'>Probot Club helps traders win regardless of market conditions</div>
       <div className='font-[400] text-base text-[#535353] text-center'>For every market condition, there's a trading streategy that can profit from it. Probot Club bots, happen to be really good at reducing average acquistion costs, directly increasing your profit margins from each trade.</div>

      <div className="mx-auto mb-[100px] max-w-[1000px] mt-24 flex flex-col items-end relative">
         <img src="/images/image1.png" alt="circle image1" className='w-[900px] absolute top-0 -left-[500px]' />
        <div className='max-w-[450px]'>
        <div className='font-[800] text-4xl  text-[#535353] mb-3.5 leading-tight'>Facil,<br/>Intelligence<br/>Automaticzado</div>
         <div className='font-[400] text-base text-[#535353]'>For every market condition, there's a trading streategy that can profit from it.</div>
         <div className="flex items-center font-[400] text-base text-[#535353]"><img src="/images/icon1.svg" className='w-[140px]' alt="icon" /> Technologies que forma automaticzado manda los trades.</div>
         <div className="flex items-center font-[400] text-base text-[#535353]"><img src="/images/icon2.svg" className='w-[140px]' alt="icon" /> Acceso desdo cuaalqueir lugar a los datos.</div>
         <div className="flex items-center font-[400] text-base text-[#535353]"><img src="/images/icon3.svg" className='w-[140px]' alt="icon" /> Puesdes obtenerio gratuitamente de forma especial.</div>
        </div>

      </div>


      <div className="flex items-center gap-10 relative mx-auto max-w-[1000px]">
       <div className='max-w-[500px] relative z-20'>
        <div className='font-[800] text-[58px]  text-[#535353] mb-3.5 leading-tight'>Adquiere el<br/> bot de trading<br/> ahora</div>
        <div className='font-[400] text-base text-[#535353]'>For every market condition, there's a trading streategy that can profit from it. For every market condition, there's a trading streategy that can profit from it. For every market condition, there's a trading streategy that can profit from it.</div>
       </div>      

       <div className="relative z-20 bg-[#F9F6F6] text-[#535353] rounded-t-l-rounded pricing-card px-5 py-10 w-[400px]">
        <div className='font-[700] text-[35px] text-center  mb-3.5 leading-tight'>PLAN MENSUAL</div>
        <div className="flex gap-2 items-end justify-center leading-none"><div className="text-center text-[60px] font-[800]">0€</div><div className="text-center text-[25px] font-[600] mb-1">54€</div></div>
        <div className="flex flex-col gap-3 mt-8">

        <div className="flex mx-auto text-[17px] max-w-[320px] justify-center gap-3">
          <div className="min-w-[15px] min-h-[15px] max-w-[15px] max-h-[15px] rounded-full mt-1 circle-bg"></div>
          <div>Coma oferta de lanzam el bot iento asd asd asd asd asd </div>
        </div>

        <div className="flex mx-auto text-[17px] max-w-[320px] justify-center gap-3">
          <div className="min-w-[15px] min-h-[15px] max-w-[15px] max-h-[15px] rounded-full mt-1 circle-bg"></div>
          <div>Coma oferta de lanzam el bot iento asd asd asd asd asd </div>
        </div>

        <div className="flex mx-auto text-[17px] max-w-[320px] justify-center gap-3">
          <div className="min-w-[15px] min-h-[15px] max-w-[15px] max-h-[15px] rounded-full mt-1 circle-bg"></div>
          <div>Coma oferta de lanzam el bot iento asd asd asd asd asd </div>
        </div>

        </div>

      <Link to="/signup" className='mx-auto mt-10 flex items-center justify-center w-[250px] button-shadow font-[700] bg-white text-[22px] py-2.5 px-7'>Register</Link>


       </div>

      <img src="/images/circle.png" className='absolute top-[200px] -right-[500px] w-[800px]' alt="circle" />
          
      </div>


      <div className="gap-10 relative mx-auto max-w-[1000px] mt-24">
      <div className='font-[800] text-5xl text-[#535353] mb-12 leading-tight'>Como usar</div>
      <div className="bg-white mb-10 shadow-xl rounded-2xl w-full overflow-hidden"><video src="/images/video.mp4" className='w-full  object-contain' controls controlsList='nodownload'></video></div>
      <Link to="/signup" className='mx-auto mt-20 flex items-center justify-center w-full text-[#535353] button-shadow font-[700] bg-white text-[25px] py-4 px-7'>SIGN UP</Link>
      
      </div>

      </div>
         
      </div>
     <Footer/>
     </div>
    </>
  )
}

export default Home