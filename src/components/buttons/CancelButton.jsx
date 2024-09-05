import { Link } from "react-router-dom";
import "./buttons.scss";

const CancelButton = ({ onCancel }) => {
  return (
    <div className="buttonsContainer">
      <Link to="/">
        <button className="btn cancel" onClick={onCancel}>
          Cancelar
        </button>
      </Link>
    </div>
  );
};

export default CancelButton;
