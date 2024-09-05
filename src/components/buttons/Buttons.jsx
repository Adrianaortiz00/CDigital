import { Link } from "react-router-dom";
import "./buttons.scss"

const Buttons = ({onAccept, onCancel}) => {
  return (
    <div className="buttonsContainer">
    <button className="btn acept" onClick={onAccept}>
      Aceptar
    </button>
    <Link to="/">
    <button className="btn cancel" onClick={onCancel}>
      Cancelar
    </button>
    </Link>
  </div>
  )
}

export default Buttons;
