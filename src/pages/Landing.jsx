import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Landing() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const startGame = () => {
    if (!name.trim()) return alert("Please enter your name");
    navigate("/game", { state: { name } });
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Welcome to Harithavaran 🌱</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />

      <br /><br />

      <button onClick={startGame}>Start Game</button>
    </div>
  );
}

export default Landing;
