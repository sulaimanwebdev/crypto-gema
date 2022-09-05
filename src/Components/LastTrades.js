import React from 'react'

const LastTrades = ({data}) => {
  return (
    <>
      <div className="last-trade-card rounded-2xl px-5 pt-7 pb-12 text-white overflow-x-scroll">
      <div className="mx-auto max-w-[750px] min-w-[550px]">
      <div className="w-full grid grid-cols-3 gap-3 border-b-2 border-white pb-2 mt-6 mb-2">
            <div className='flex items-center justify-center text-[18.5px] font-[500]'>Symbol</div>
            <div className='flex items-center justify-center text-[18.5px] font-[500]'>Entry Point</div>
            <div className='flex items-center justify-center text-[18.5px] font-[500]'>Time Stamp</div>
        </div>
        {
          data.map((ele)=>{
            return(
              <div className="w-full grid grid-cols-3 gap-3 border-b border-white py-3">
              <div className='flex items-center justify-center text-[15.5px]'>{ele.symbol}</div>
              <div className='flex items-center justify-center text-[15.5px]'>{ele.entryPoint}</div>
              <div className='flex items-center justify-center text-[15.5px]'>{ele.timeStamp}</div>
            </div>
            )
          })
        }
      </div>
      </div>
    </>
  )
}

export default LastTrades