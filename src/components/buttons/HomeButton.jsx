import { Link } from "react-router-dom"
import "./buttons.scss"


const HomeButton = () => {
  return (
    <Link to="/">
            <button className="enterButton">
              Inicio
              <img src="/assets/Home-icon.svg" alt="avatar" />
            </button>
    </Link>
  )
}

export default HomeButton