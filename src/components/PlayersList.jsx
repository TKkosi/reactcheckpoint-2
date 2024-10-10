import players from "../../data/players"
import Player from "./Player"

const PlayersList = () => {
  return (
    <div>
        {players.map((players , index) =>(
            <Player key={index} name={players.name} club={players.club} image={players.image} number={players.number} position={players.position} age={players.age} country={players.country}/>
        ))}
    </div>
  )
}

export default PlayersList