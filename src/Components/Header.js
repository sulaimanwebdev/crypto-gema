import React from 'react'

const Header = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex items-center justify-between py-7'>
      <button className='text-[20px] font-[400] text-[#3E3E3E]'>CRYPTO<span className='font-[700]'>GEMA</span></button>
      <button className='button-shadow font-[700] bg-white text-[16px] py-2 px-3.5 text-[#3E3E3E]'>MI CUENTA</button>
    </div>
  )
}

export default Header