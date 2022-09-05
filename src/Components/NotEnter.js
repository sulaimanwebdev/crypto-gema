import React from 'react'

const NotEnter = ({data}) => {
 
  return (
    <>
      <div className="not-enter-card rounded-xl px-5 pt-7 pb-4 text-white">
        <div className="flex items-center gap-5 justify-center">
            <div className='text-[28px] font-[700]'>Not enter</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-magic" viewBox="0 0 16 16"><path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z"/></svg>
        </div>
        <div className="w-full grid grid-cols-2 gap-3 border-b-2 border-white pb-2 mt-6 mb-2">
            <div className='flex items-center justify-center text-[18.5px]'>Symbol</div>
            <div className='flex items-center justify-center text-[18.5px]'>Entry Point</div>
        </div>
        {
          data.slice(0,3).map((ele)=>{
            return(
              <div className="w-full grid grid-cols-2 gap-3 border-b border-white py-3">
              <div className='flex items-center justify-center text-[15.5px]'>{ele.symbol}</div>
              <div className='flex items-center justify-center text-[15.5px]'>{ele.entryPoint}</div>
            </div>
            )
          })
        }
      </div>
    </>
  )
}

export default NotEnter