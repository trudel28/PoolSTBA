import Header from "../components/Header";


export default function Home() {


  return (
    <div className="flex flex-col items-start">
      
      <Header/>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-72 mt-10 ">
        <div className="grid grid-rows-2 gap-4">
          <div>
            <div className="w-full h-full rounded-xl bg-sidney-crosby bg-cover filter-grayscale hover:filter-none transition-all ease-in">sdfs</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className=" text-white cursor-pointer w-full bg-primary_blue  rounded-xl p-4 hover:opacity-90 active:scale-95 transition ">
                <p className="text-lg md:text-xl">Ma Position</p>
                <p className="text-2xl md:text-6xl text-center ">1 <span className="md:text-xl">/16</span> </p>
              </div>
              <div className="border w-full rounded-xl p-4 cursor-pointer hover:bg-gray-50 active:scale-95 transition">
                <p className="text-lg md:text-xl">Total de points</p>
                <p className="text-2xl md:text-6xl text-center">54<span className="md:text-xl"> pts</span> </p>
              </div>
          </div>
        </div>
        <div className="  border rounded-xl">
            sdfdsf
          </div>

      </div>




      {/* <div className="flex mt-10 h-72 w-full space-x-6">
          <div className="flex space-y-6 flex-col flex-[1]">
            <div className="hidden sm:flex w-full h-full rounded-xl bg-sidney-crosby bg-cover filter-grayscale hover:filter-none transition-all ease-in">sdfs</div>
            <div className="flex space-x-6 w-full">
              <div className=" text-white cursor-pointer w-full bg-primary_blue  rounded-xl p-4 hover:opacity-90 active:scale-95 transition ">
                <p className="text-xl">Ma Position</p>
                <p className="text-6xl text-center">1 <span className="text-xl">/16</span> </p>
              </div>
              <div className="border w-full rounded-xl p-4 cursor-pointer hover:bg-gray-50 active:scale-95 transition">
                <p className="text-xl">Total de points</p>
                <p className="text-6xl text-center">54<span className="text-xl"> pts</span> </p>
              </div>
            </div>
          </div>
          <div className="flex flex-grow  border rounded-xl">
            sdfdsf
          </div>
        </div>
        */}
    </div>
    
  )
}


