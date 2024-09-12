import "../card/detailsCard.scss"

const DeleteButton = ({onClick}) => {
  return (
    <button className="icon-container" onClick={onClick}>
      <img src="./icons/Eliminar-icon.svg" alt="Eliminar"  className="icon"  />
    </button>
  )
}

export default DeleteButton
