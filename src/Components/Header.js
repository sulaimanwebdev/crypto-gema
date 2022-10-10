import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

  const [path, setpath] = React.useState('/home')
  const [name, setname] = React.useState('HOME')

  React.useEffect(() => {
   if(window.location.pathname === "/"){
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
    <div className='max-w-[1000px] px-5 mx-auto flex items-center justify-between py-7'>
      <Link to="/" className='text-[20px] font-[400] text-[#3E3E3E]'><img src="/images/logo.svg" className='w-[150px]' alt="logo" /></Link>
      <Link to={path} className='button-shadow font-[700] bg-white text-[16px] py-2 px-7 text-[#3E3E3E]'>{name}</Link>
    </div>
  )
}

export default Header