import Title from "../labels/Title";
import Field from "../labels/Field";
import Buttons from "../buttons/Buttons";
import "./register.scss";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import AcceptButton from "../buttons/AcceptButton"
import Confirmation from "../confirmation/Confirmation";
import { useMutation } from "react-query";
import { API_POST_USER } from "../../config/url";


const RegisterCard = () => {
  const navigator = useNavigate();
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const mutation = useMutation((data) => axios.post(API_POST_USER, data), {
    onSuccess: () => {
      setOpenConfirmation(true);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      mutation.mutate(form);
    }
  };

  const handleCancel = () => {
    setForm({ name: "", email: "", password: "" });
    navigator("/");
  };

  const handleAccept = () => {
    setopenConfirmation(false);
    navigator("/");
  };

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (form.name.trim()) {
      errorsCopy.name = "";
    } else {
      errorsCopy.name = "El nombre es requerido";
      valid = false;
    }

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
      <Title title="Registro de usuario"></Title>
      <Field
        field="Nombre"
        type="text"
        placeholder={"Escribe tu nombre ..."}
        name="name"
        value={form.name}
        onchange={handleChange}
        error={errors.name}
      />
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
      <Buttons onAccept={handleSubmit} onCancel={handleCancel} />
      <h3 className="logInText">
        ¿Ya tienes cuenta? Accede &nbsp;
        <span>
          <Link to={"/login"}>aquí</Link>
        </span>
      </h3>
      {axiosErrorResponse?.status === 409 && (
        <p className="invalidInputText">Correo electrónico ya en uso.</p>
      )}
      {openConfirmation && (
        <Confirmation open={openConfirmation} onClose={() => setOpenConfirmation(false)}>
          <h2 className="message">Usuario registrado exitosamente!</h2>
          <div className="buttonsContainer">
            <AcceptButton onAccept={handleAccept} />
          </div>
        </Confirmation>
        )}
    </form>
    </div>

  );
};

export default RegisterCard;
