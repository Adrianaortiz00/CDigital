import "./login.scss";
import Title from "../labels/Title";
import Buttons from "../buttons/Buttons";
import Field from "../labels/Field";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
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
        <Buttons onAccept={handleLogin} onCancel={handleCancel} />
      </form>
    </div>
  );
};

export default Login;
