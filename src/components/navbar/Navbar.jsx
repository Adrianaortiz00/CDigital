import "./navbar.scss";
import HomeButton from "../buttons/HomeButton";
import LogOutButton from "../buttons/LogOutButton";
import { useAuth } from "../../context/authContext";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { userId } = useAuth();
  const location = useLocation();

  return (
    <div className="navContainer">
      <div className="logoContainer">
        <img
          className="logoImage"
          src="/assets/CDigital_Completo-cortado.png"
          alt="logo"
        />
      </div>

      <div className="info">
        {/* Mostrar el contenido condicionalmente */}
        {location.pathname === "/" && (
          <>
            <span className="textNavbar">Acerca de</span>
            <span className="textNavbar">Servicios</span>
            <button className="enterButton">
              Entrar
              <img src="/assets/Avatar-icon.svg" alt="avatar" />
            </button>
          </>
        )}

        {location.pathname === "/signin" && <HomeButton />}

        {location.pathname === "/login" && <HomeButton />}

        {location.pathname === "/curso" && userId && <LogOutButton />}
      </div>
    </div>
  );
};

export default Navbar;
