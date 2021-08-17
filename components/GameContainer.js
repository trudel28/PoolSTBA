import Image from 'next/image'
import Link from "next/link"


function GameContainer( {game} ) {

    const isGameStarted = () => {
        if(game.status.abstractGameState !== "Preview"){
            return true
        }
        else{
            return false
        }
    }

    const isGameFinished = () => {
        if(game.status.abstractGameState == "Final"){
            return true
        }
        else{
            return false
        }
    }

   

    const gameStarted = isGameStarted();
    const gameFinished = isGameFinished();
    const homeGoal = game.linescore.teams.home.goals;
    const awayGoal = game.linescore.teams.away.goals;


    return (
        <div className="flex flex-col w-full border rounded-xl p-2 sm:w-[252px] cursor-pointer" onClick={()=>window.open(`https://www.nhl.com/gamecenter/${game.gamePk}`, "_blank")}>
            <p>{gameStarted? gameFinished? game.status.abstractGameState : game.status.currentPeriodTimeRemaining: game.gameDate}</p>
            <div className={gameStarted? gameFinished? "border-b border-2 border-gray-600":"border-b border-2 border-yellow-600":"border-b border-2 border-gray-300"}></div>

            {/* Away Team Row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="relative h-10 w-10 mr-2">
                        <Image 
                            src="https://assets-sports.thescore.com/hockey/team/3/logo.png"
                            layout="fill"
                        />
                    </div>
                    <p>{game.teams.away.team.name}</p>
                </div>
                <p className={gameFinished? awayGoal > homeGoal ? "font-semibold text-xl":"font-semibold text-gray-400 text-xl":"text-xl"}>{awayGoal}</p>
            </div>
            {/* Home Team Row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="relative h-10 w-10 mr-2">
                        <Image 
                            src="https://assets-sports.thescore.com/hockey/team/3/logo.png"
                            layout="fill"
                        />
                    </div>
                    <p>{game.teams.home.team.name}</p>
                </div>
                <p className={gameFinished? homeGoal > awayGoal ? "font-semibold text-xl":"font-semibold text-gray-400 text-xl":"text-xl"}>{homeGoal}</p>
            </div>
        </div>
    )
}

export default GameContainer
