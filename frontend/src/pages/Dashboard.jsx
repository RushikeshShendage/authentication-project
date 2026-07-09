import { useEffect, useState } from "react";
import API from "../api";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      console.log("No access token found");
      return;
    }

    API.get("dashboard/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="text-center">Dashboard</h1>

        {user ? (
          <>
            <h4 className="mt-3">
              Welcome, {user.username}
            </h4>

            <p>Email: {user.email}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;