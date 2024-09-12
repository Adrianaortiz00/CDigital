import "./buttons.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const LogOutButton = () => {
  const { logout } = useAuth();

  return (
    <div>
      <Link to="/">
        <button className="logOutButton" onClick={logout}>
          <img src="./icons/Logout-icon.svg" alt="logout icon" />
        </button>
      </Link>
    </div>
  );
};

export default LogOutButton;
