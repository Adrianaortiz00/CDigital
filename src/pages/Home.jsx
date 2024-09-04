import "./home.scss"
import Footer from "../components/footer/Footer"

const Home = () => {
  return (
    <div className="home">
      <div className="content">
      <p className="title">Digitaliza y Automatiza basado en experiencia</p>
      <p className="text">Llevamos a cabo proyectos de automatización y digitalización con herramientas de Microsoft Power Platform y UX para mejor</p>
      <button className="registerButton">Registrarse</button>
      </div>
      <div className="imageContainer">
        <img  className="image" src="/assets/imageHome.png" alt="image home" />
      </div>
      <Footer/>
    </div>
    
  )
}

export default Home
