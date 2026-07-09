import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await API.post("login/", {
        username,
        password,
      });

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light"
    >
      <div
        className="card shadow p-4"
        style={{ width: "400px", borderRadius: "15px" }}
      >
        <h2 className="text-center mb-4">
          Login
        </h2>

        <div className="mb-3">
          <label className="form-label">
            Username
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={login}
        >
          Login
        </button>

        <p className="text-center mt-3">
          Don't have an account?
          <a href="/register"> Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;