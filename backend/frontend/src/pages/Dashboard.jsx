import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // if no token → go to login
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>You are logged in ✅</p>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
