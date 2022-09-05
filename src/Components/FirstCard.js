import React from 'react'

const FirstCard = (props) => {
  return (
    <>
    <div className="card-shadow bg-[#F6F6F6] w-full rounded-xl pt-10 pb-8 px-5">
               <div className="flex items-center justify-center gap-[100px]">
                  <div className="flex items-center gap-5">
                    <div className="text-[19px] text-gray-900 font-[400]">ETHUSDT</div>
                    <div className="flex items-center gap-2">
                    <div className="rounded-full bg-white border w-[50px] h-[30px]"></div>
                    <div className="rounded-full bg-white border w-[50px] h-[30px]"></div>
                    <div className={`rounded-full border w-[50px] h-[30px]`} style={{background: props.enteringColor}}></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="text-[19px] text-gray-900 font-[400]">BNBUSDT</div>
                    <div className="flex items-center gap-2">
                    <div className="rounded-full bg-white border w-[50px] h-[30px]"></div>
                    <div className={`rounded-full border w-[50px] h-[30px]`} style={{background: props.closeTo}}></div>
                    <div className="rounded-full bg-white border w-[50px] h-[30px]"></div>
                    </div>
                  </div>
               </div>


               <div className="flex items-center justify-center gap-[100px] mt-7">
                  <div className="flex items-center gap-5">
                    <div className="text-[19px] text-gray-900 font-[400]">BTCUSDT</div>
                    <div className="flex items-center gap-2">
                    <div className="rounded-full bg-white border w-[50px] h-[30px]"></div>
                    <div className={`rounded-full border w-[50px] h-[30px]`} style={{background: props.closeTo}}></div>
                    <div className="rounded-full bg-white border w-[50px] h-[30px]"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="text-[19px] text-gray-900 font-[400]">XRPUSDT</div>
                    <div className="flex items-center gap-2">
                    <div className={`rounded-full border w-[50px] h-[30px]`} style={{background: props.out}}></div>
                    <div className="rounded-full bg-white border w-[50px] h-[30px]"></div>
                    <div className="rounded-full bg-white border w-[50px] h-[30px]"></div>
                    </div>
                  </div>
               </div>

               <div className="flex items-center justify-center mt-14 gap-[50px]">
               <div className="flex items-center gap-5">
               <div className="text-[19px] text-gray-900 font-[400]">Entering</div>
               <div className={`rounded-full border w-[45px] h-[30px]`} style={{background: props.enteringColor}}></div>
               </div>

               <div className="flex items-center gap-5">
               <div className="text-[19px] text-gray-900 font-[400]">Close to</div>
               <div className={`rounded-full border w-[45px] h-[30px]`} style={{background: props.closeTo}}></div>
               </div>

               <div className="flex items-center gap-5">
               <div className="text-[19px] text-gray-900 font-[400]">Out</div>
               <div className={`rounded-full border w-[45px] h-[30px]`} style={{background: props.out}}></div>
               </div>
                
               </div>

          </div>
    </>
  )
}

export default FirstCard