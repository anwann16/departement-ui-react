import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

import Navbar from "./Navbar";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div className="px-14">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
