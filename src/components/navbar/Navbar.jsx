import "./navbar.scss";
import HomeButton from "../buttons/HomeButton";
import LogOutButton from "../buttons/LogOutButton";
import { useAuth } from "../../context/authContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
            <Link to={"/login"} className="LinkEnter">
              <button className="enterButton">
                Entrar
                <img src="./icons/Avatar-icon.svg" alt="avatar" />
              </button>
            </Link>
          </>
        )}

        {(location.pathname === "/signin" ||
          location.pathname === "/login") && <HomeButton />}

        {location.pathname === "/Courses" && userId ? (
          <LogOutButton />
        ) : location.pathname === "/Courses" ? (
          <Link to="/login">
            <button className="enterButton">
              Inicia sesión
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
