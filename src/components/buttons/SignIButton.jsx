import { Link } from "react-router-dom";
import "../../pages/home.scss"
import "../buttons/buttons.scss"


const SignIButton = () => {
  return (
    <Link to="/signin" className="linkButton">
      <button className="registerButton">Registrarse</button>
    </Link>
  )
}

export default SignIButton
 