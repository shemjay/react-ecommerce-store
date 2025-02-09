import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuth";

const AdminDashboard = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/Admin");
  }, [user, navigate]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <button onClick={logout} className="bg-red-500 text-white p-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
