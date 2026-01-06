import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const finalScore = location.state?.finalScore ?? 0;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Game Completed 🎉</h1>

      <p>Your Pollution Meter</p>
      <h2>{finalScore}%</h2>

      <p>
        Thank you for playing and helping raise awareness about
        environmental protection 🌱
      </p>

      <button onClick={() => navigate("/")}>
        Play Again
      </button>
    </div>
  );
}

export default Result;
