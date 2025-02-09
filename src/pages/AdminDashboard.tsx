import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuth";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const AdminDashboard = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/Admin");
  }, [user, navigate]);

  return (
    <>
      <Nav />
      <div className="p-4 flex items-start justify-between w-full h-screen">
        <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
        <button onClick={logout} className="bg-red-500 text-white p-2 rounded">
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
