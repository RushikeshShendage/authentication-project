import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const register = async (e) => {
    e.preventDefault();

    try {
      await API.post("register/", {
        username: user.username,
        email: user.email,
        password: user.password,
      });

      alert("Registration Successful");

      setUser({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center"
      style={{
        background:
          "linear-gradient(to right, #667eea, #764ba2)",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: "450px",
          borderRadius: "20px",
        }}
      >
        <div className="card-body p-5">
          <h2 className="text-center mb-2">
            Create Account
          </h2>

          <p className="text-center text-muted mb-4">
            Register to continue
          </p>

          <form onSubmit={register}>
            <div className="mb-3">
              <label className="form-label">
                Username
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                value={user.username}
                onChange={(e) =>
                  setUser({
                    ...user,
                    username: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={user.email}
                onChange={(e) =>
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={user.password}
                onChange={(e) =>
                  setUser({
                    ...user,
                    password: e.target.value,
                  })
                }
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Register
            </button>
          </form>

          <div className="text-center mt-4">
            Already have an account?
            <Link
              to="/"
              className="text-decoration-none ms-2"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;