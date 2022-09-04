import FirstCard from "./Components/FirstCard";
import Header from "./Components/Header";

function App() {

  let enteringColor = "#9150EF";
  let closeTo = "#CB91FD";
  let out = "#71C7E5";

  return (
    <>
     <div className="w-full">
      <div className="mx-auto max-w-[1300px] px-5">
         <Header/>

         <div className="max-w-[900px] mx-auto mt-12 px-5">
          <div className="text-[35px] font-[800] tracking-wide text-center mb-[80px]">TRADING BOT</div>
          <FirstCard enteringColor={enteringColor} closeTo={closeTo} out={out}/>
         </div>

      </div>
     </div>
    </>
  );
}

export default App;
