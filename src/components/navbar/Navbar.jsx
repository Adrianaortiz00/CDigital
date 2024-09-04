import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="logoContainer">
        <img className="logoImage" src="/assets/CDigital_Completo-cortado.png" alt="logo" />
      </div>
      <div className="info">
        <span>Acerca de</span>
        <span>Servicios</span>
        <button className="enterButton">
          Entrar
          <img src="/assets/Avatar-icon.svg" alt="avatar" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
