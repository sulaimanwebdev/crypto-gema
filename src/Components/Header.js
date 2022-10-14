import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

  const [path, setpath] = React.useState('/')
  const [name, setname] = React.useState('HOME')

  React.useEffect(() => {

    if(window.location.pathname === "/"){
      setpath('/login');
      setname('LOGIN');
     }


   if(window.location.pathname === "/trades"){
    setpath('/login');
    setname('LOGIN');
   }

   if(window.location.pathname === "/login"){
    setpath('/signup');
    setname('SIGN UP');
   }

   if(window.location.pathname === "/signup"){
    setpath('/login');
    setname('LOGIN');
   }

  }, [])
  
  return (
    <>
      <div className={`w-full flex items-center justify-center ${window.location.pathname === "/" ? "absolute top-0 left-0" : ""}`}>
      <div className={`max-w-[1000px] px-5 mx-auto bg-transparent flex items-center justify-between py-7 w-full relative z-20`}>
      <Link to="/" className='text-[20px] font-[400] text-[#3E3E3E]'><img src={window.location.pathname === "/" ? "/images/logo-white.svg" : "/images/logo.svg"} className='w-[150px]' alt="logo" /></Link>
      <Link to={path} className='button-shadow font-[700] bg-white text-[16px] py-3.5 px-8 text-[#3E3E3E]'>{name}</Link>
    </div>
      </div>
    </>
  )
}

export default Header