import "./buttons.scss"
import "../../../styles.scss"

const AcceptButton = () => {
  return (
    <div className="buttonsContainer">
      <button className="btn acept" onClick={onAccept}>
        Aceptar
      </button>
    </div>
  )
}

export default AcceptButton
