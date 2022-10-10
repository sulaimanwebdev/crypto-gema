import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer bg-white px-5 w-full mt-24">
        <div className='max-w-[950px] mx-auto flex items-start justify-between gap-3 flex-wrap pt-8 pb-7'>
        <Link to="/" className='text-[20px] font-[400] text-[#3E3E3E]'><img src="/images/logo.svg" className='w-[150px]' alt="logo" /></Link>
      <div className="flex flex-col sm:text-right gap-3">
        <a href="/#">Politica de provided</a>
        <a href="/#">Terms and conditions</a>
        <a href="/#">Contacts</a>
      </div>
    </div>
    </div>
  )
}

export default Footer