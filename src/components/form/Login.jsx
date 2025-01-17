import "./login.scss";
import Title from "../labels/Title";
import Buttons from "../buttons/Buttons";
import Field from "../labels/Field";
import { useState } from "react";
import Confirmation from "../confirmation/Confirmation";
import { useNavigate } from "react-router-dom";
import { API_POST_LOG_USER } from "../../config/url";
import { useAuth } from "../../context/authContext";
import { useMutation } from "react-query";
import AcceptButton from "../buttons/AcceptButton"
import axios from "axios";

const Login = () => {
  const navigator = useNavigate();
  const { setToken, setUserId, token, setUserRole } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const mutation = useMutation((data) => axios.post(API_POST_LOG_USER, data), {
    onSuccess: (response) => {

      setToken(response.data.token);
      setUserId(response.data.userId);
      setUserRole(response.data.userRole);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedInUserId", response.data.userId);
      localStorage.setItem("userRole", response.data.userRole);
      setIsOpen(true);
    },
    onError: (error) => {
      console.error("Error al iniciar sesión:", error);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      mutation.mutate(form);
    }
  };

  const handleCancel = () => {
    setForm({ email: "", password: "" });
    navigator("/");
  };

  const handleAccept = () => {
    setIsOpen(false);
    navigator("/Courses");
  };


  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (form.email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "El correo eletrónico es requerido";
      valid = false;
    }

    if (form.password.trim()) {
      errorsCopy.password = "";
    } else {
      errorsCopy.password = "La contraseña es requerida";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };
  const axiosErrorResponse = mutation.error?.response;

  return (
    <div className="containerForm">
      <form className="form">
        <Title title="Acceso de Usuario"></Title>
        <Field
          field="E-mail"
          type="email"
          required={true}
          placeholder={"Escribe tu e-mail ..."}
          name="email"
          value={form.email}
          onchange={handleChange}
          error={errors.email}
        />
        <Field
          field="Contraseña"
          type="password"
          required={true}
          placeholder={"Escribe tu contraseña ..."}
          name="password"
          value={form.password}
          onchange={handleChange}
          error={errors.password}
        />
        <br />
      <Buttons onAccept={handleLogin} onCancel={handleCancel} />
      {axiosErrorResponse?.status === 401 && (
        <p className="invalidInputText">Contraseña incorrecta.</p>
      )}
      {axiosErrorResponse?.status === 404 && (
        <p className="invalidInputText">
          La dirección de correo electrónico no esta registrada.
        </p>
      )}
      {token && (
        <Confirmation open={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="message">Bienvenido al curso educativo de CDigital</h2>
          <div className="buttonsContainer">
            <AcceptButton onAccept={handleAccept} />
          </div>
        </Confirmation>
        )}
      </form>
    </div>
  );
};

export default Login;
