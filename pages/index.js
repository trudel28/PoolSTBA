import Header from "../components/Header";


export default function Home() {


  return (
    <div className="flex flex-col items-start">
      <Header/>
      <div className="mt-10 w-full">
        <div className="flex w-full space-x-6">
          <div className="flex flex-1 space-y-6 flex-col h-72">
            <div className="flex-1  rounded-xl bg-sidney-crosby bg-cover filter-grayscale hover:filter-none transition-all ease-in">sdfs</div>
            <div className=" flex-1 flex space-x-6">
              <div className=" text-white cursor-pointer bg-primary_blue flex-1 rounded-xl p-4 hover:opacity-90 active:scale-95 transition ">
                <p className="text-xl">Ma Position</p>
                <p className="text-6xl text-center">1 <span className="text-xl">/16</span> </p>
              </div>
              <div className="border flex-1 rounded-xl p-4 cursor-pointer hover:bg-gray-50 active:scale-95 transition">
                <p className="text-xl">Total de points</p>
                <p className="text-6xl text-center">54<span className="text-xl"> pts</span> </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1  border rounded-xl">
            sdfdsf
          </div>
        </div>
      </div>

  
    </div>
  )
}
