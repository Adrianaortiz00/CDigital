import { useState } from "react";
import "./buttons.scss";
import CancelButton from "./CancelButton";
import AcceptButton from "./AcceptButton";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Confirmation from "../confirmation/Confirmation";



const LogOutButton = () => {
    const { logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <Link to="/">
          <button className="logOutButton" onClick={() => setIsOpen(true)}>
            <img src="/assets/icons/Logout-icon.svg" alt="logout icon" />
          </button>
        </Link>
        <Confirmation open={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="message">Estas seguro que quiere salir?</h2>
          <div className="buttonsContainer">
            <AcceptButton onAccept={() => logout()} />
            <CancelButton onCancel={() => setIsOpen(false)} />
          </div>
        </Confirmation>
      </div>
    );
  };

export default LogOutButton
