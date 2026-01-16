import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Background.css";
import "../styles/Landing.css";

function Landing() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(value.length > 30);
  };

  const startGame = () => {
    if (!name.trim()) return;
    navigate("/game", { state: { name } });
  };

  return (
    <div className="background">
      <div className="landing-content">
        <h1>Welcome to EcoDate</h1>

        <input
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your full name"
          className="text"
          maxLength={31}
        />

        <div className="condition">
          <p>This name will appear on your certificate</p>
        </div>

        {nameError && (
          <p className="name-warning">
            ⚠️ Name cannot exceed 30 characters
          </p>
        )}

        <br />

        {!nameError && name.trim() && (
          <button onClick={startGame}>Start Game</button>
        )}
      </div>
    </div>
  );
}

export default Landing;
