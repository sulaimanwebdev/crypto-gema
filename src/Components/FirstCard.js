import React from 'react'

const FirstCard = (props) => {
  return (
    <>
    <div className="card-shadow bg-[#F6F6F6] w-full rounded-xl pt-10 pb-8 px-5">
               <div className="flex items-center justify-center flex-col sm2:flex-row gap-[20px] sm2:gap-[50px] lg:gap-[100px]">
                  <div className="flex items-center justify-between gap-5">
                    <div className="text-[19px] text-gray-900 font-[400]">ETHUSDT</div>
                    <div className="flex items-center gap-2">
                    <div className="rounded-full bg-white border w-[30px] sm:w-[50px] h-[30px]"></div>
                    <div className="rounded-full bg-white border w-[30px] sm:w-[50px] h-[30px]"></div>
                    <div className={`rounded-full border w-[30px] sm:w-[50px] h-[30px]`} style={{background: props.enteringColor}}></div>
                    <img src="/images/bullish.png" className='max-w-[50px]' alt="bullish" />
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="text-[19px] text-gray-900 font-[400]">BNBUSDT</div>
                    <div className="flex items-center gap-2">
                    <div className="rounded-full bg-white border w-[30px] sm:w-[50px] h-[30px]"></div>
                    <div className={`rounded-full border w-[30px] sm:w-[50px] h-[30px]`} style={{background: props.closeTo}}></div>
                    <div className="rounded-full bg-white border w-[30px] sm:w-[50px] h-[30px]"></div>
                    <img src="/images/bearish.png" className='max-w-[50px]' alt="bearish" />

                    </div>
                  </div>
               </div>


               <div className="flex items-center justify-center flex-col sm2:flex-row gap-[20px] sm2:gap-[50px] lg:gap-[100px] mt-5 sm2:mt-7">
                  <div className="flex items-center gap-5">
                    <div className="text-[19px] text-gray-900 font-[400]">BTCUSDT</div>
                    <div className="flex items-center gap-2">
                    <div className="rounded-full bg-white border w-[30px] sm:w-[50px] h-[30px]"></div>
                    <div className={`rounded-full border w-[30px] sm:w-[50px] h-[30px]`} style={{background: props.closeTo}}></div>
                    <div className="rounded-full bg-white border w-[30px] sm:w-[50px] h-[30px]"></div>
                    <img src="/images/bearish.png" className='max-w-[50px]' alt="bearish" />

                    
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="text-[19px] text-gray-900 font-[400]">XRPUSDT</div>
                    <div className="flex items-center gap-2">
                    <div className={`rounded-full border w-[30px] sm:w-[50px] h-[30px]`} style={{background: props.out}}></div>
                    <div className="rounded-full bg-white border w-[30px] sm:w-[50px] h-[30px]"></div>
                    <div className="rounded-full bg-white border w-[30px] sm:w-[50px] h-[30px]"></div>
                    <img src="/images/bullish.png" className='max-w-[50px]' alt="bullish" />

                   
                    </div>
                  </div>
               </div>

               <div className="flex items-center sm:justify-center flex-wrap mt-14 gap-[30px] md:gap-[50px]">
               <div className="flex items-center gap-3">
               <div className="text-[17px] text-gray-900 font-[400]">Entering</div>
               <div className={`rounded-full border w-[30px] sm:w-[45px] h-[30px]`} style={{background: props.enteringColor}}></div>
               </div>

               <div className="flex items-center gap-3">
               <div className="text-[17px] text-gray-900 font-[400]">Close to</div>
               <div className={`rounded-full border w-[30px] sm:w-[45px] h-[30px]`} style={{background: props.closeTo}}></div>
               </div>

               <div className="flex items-center gap-3">
               <div className="text-[17px] text-gray-900 font-[400]">Out</div>
               <div className={`rounded-full border w-[30px] sm:w-[45px] h-[30px]`} style={{background: props.out}}></div>
               </div>

               <div className="flex items-center gap-3">
               <div className="text-[17px] text-gray-900 font-[400]">Compra</div>
               <img src="/images/bullish.png" className='max-w-[50px] -mt-2' alt="bullish" />
               </div>

               <div className="flex items-center gap-3">
               <div className="text-[17px] text-gray-900 font-[400]">Venta</div>
               <img src="/images/bearish.png" className='max-w-[50px] -mt-2' alt="bearish" />

               </div>

                
               </div>

          </div>
    </>
  )
}

export default FirstCard