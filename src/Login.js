import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // 🔴 validation check
    if (!username || !phone || !password) {
      setError("Please fill all fields");
      return; // 🚫 stop here
    }

    // ✅ success
    setError("");
    setUser(username);
    navigate("/");
  };

  return (
    <div
      className="border border-dark rounded p-4 mx-auto my-5"
      style={{ width: "260px" }}
    >
      <h6>UserName</h6>
      <input
        type="text"
        placeholder="Enter your username"
        className="form-control mb-2 border-dark rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <h6>Phone</h6>
      <input
        type="tel"
        placeholder="Enter your number"
        className="form-control mb-2 border-dark rounded"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <h6>Password</h6>
      <input
        type="password"
        placeholder="Enter your password"
        className="form-control mb-2 border-dark rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && (
        <p className="text-danger small mb-2">{error}</p>
      )}

      <button
        className="btn btn-dark w-100"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
