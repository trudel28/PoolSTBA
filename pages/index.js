import Header from "../components/Header";
import PlayerRow from "../components/PlayerRow";
import { useRouter } from 'next/router';
import GameContainer from "../components/GameContainer";


export default function Home({ gameData }) {

  const router = useRouter();

  const games = gameData.dates[0].games


  return (
    <div className="flex flex-col items-start">
      
      <Header/>
      <div className="mt-10 grid grid-cols-1 w-full gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {games.length == 0? <p>No Game</p>: games.map(game => <GameContainer key={game.gamePk} game={game}/>)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-72 mt-10 ">
        <div className="grid grid-rows-2 gap-4">
          <div>
            <div className="w-full h-full rounded-xl bg-sidney-crosby bg-cover filter-none hover:filter-grayscale transition-all ease-in">sdfs</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          <button className="border text-white bg-primary_blue rounded-xl hover:opacity-90 active:scale-95 transition">
                <div className="flex flex-col" onClick={() => router.push("/standing")}>
                  <p className="text-md md:text-xl">Ma Position :</p>
                  <p className="text-lg md:text-5xl text-center">1<span className="text-xl">er</span> </p>
                </div>
              </button>
              <button className="border rounded-xl hover:bg-gray-50 active:scale-95 transition">
                <div className="flex flex-col">
                  <p className="text-md md:text-xl">Total de points :</p>
                  <p className="text-lg md:text-5xl text-center">53</p>
                </div>
              </button>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl px-6 py-2">
            <div>
              <h1 className="flex items-center justify-center text-xl border-b pb-2">Mon top 3</h1>
            </div>
            <div className="flex flex-col justify-between h-full mt-2">
              <PlayerRow/>
              <PlayerRow/>
              <PlayerRow/>
            </div>
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


export async function getStaticProps(){
  const gameData = await fetch("https://statsapi.web.nhl.com/api/v1/schedule?date=2021-03-03&expand=schedule.linescore")
  .then(res => res.json());

  return {
    props: {
      gameData
    }
  }

}