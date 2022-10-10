import React from 'react'
import CloseToEnter from "../Components/CloseToEnter";
import Entering from "../Components/Entering";
import FirstCard from "../Components/FirstCard";
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import LastTrades from "../Components/LastTrades";
import NotEnter from "../Components/NotEnter";

const Trades = () => {

    
  let enteringColor = "#9150EF";
  let closeTo = "#CB91FD";
  let out = "#71C7E5";

  let data = [
    {
      symbol: "ETHUSDT",
      entryPoint: "1.4345",
      timeStamp: "10/12/2021 14:05",
    },

    {
      symbol: "BTCUSDT",
      entryPoint: "1.4345",
      timeStamp: "12/1/2021 14:05",

    },

    {
      symbol: "XRPUSDT",
      entryPoint: "1.4345",
      timeStamp: "6/15/2021 14:05",

    },
    {
      symbol: "ETHUSDT",
      entryPoint: "1.4345",
      timeStamp: "10/12/2021 14:05",
    },

    {
      symbol: "BTCUSDT",
      entryPoint: "1.4345",
      timeStamp: "12/1/2021 14:05",

    },

    {
      symbol: "XRPUSDT",
      entryPoint: "1.4345",
      timeStamp: "6/15/2021 14:05",

    },

    {
      symbol: "BTCUSDT",
      entryPoint: "1.4345",
      timeStamp: "12/1/2021 14:05",

    },

  ]


  return (
    <>
       <div className="w-full">
     <Header/>

      <div className="mx-auto max-w-[1300px] px-5">

         <div className="max-w-[900px] mx-auto mt-12 px-5">
          <div className="text-[35px] font-[800] tracking-wide text-center mb-[80px]">TRADING BOT</div>
          <FirstCard enteringColor={enteringColor} closeTo={closeTo} out={out}/>
         </div>

         <div className="max-w-[1200px] mx-auto mt-12 px-5 grid grid-cols-1 lg:grid-cols-3 gap-[30px] xl:gap-[60px] mb-16 md:mb-36">
          <Entering data={data}/>
          <CloseToEnter data={data}/>
          <NotEnter data={data}/>
         </div>

         <div className="max-w-[1000px] mx-auto px-5">
          <div className="text-[35px] font-[800] tracking-wide text-center mb-[30px]">LAST TRADES</div>
          <LastTrades data={data}/>
         </div>

      </div>

     <Footer/>
     </div>
    </>
  )
}

export default Trades