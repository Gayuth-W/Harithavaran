import { useNavigate } from "react-router-dom"

function Landing() {
  const navigate =useNavigate();

  const startGame=()=>{
    //Add the user ID generation logic here

    navigate("/game");
  }
  return(
    <>
      <h1>Welcome to Harithavaran</h1>
      <button onClick={startGame}>Start Game</button>
    </>
  )
}

export default Landing;