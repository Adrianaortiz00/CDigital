import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
