import "../card/detailsCard.scss"

const EditButton = ({ onClick }) => {

  return (
    <button  className="icon-container" onClick={onClick} >
       <img src="./icons/Editar-icon.svg" alt="Editar" className="icon-editar"/>
    </button>
  )
}

export default EditButton
