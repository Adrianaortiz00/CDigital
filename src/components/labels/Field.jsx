import "./field.scss"

const Field = ({ field, name, placeholder, value, type, onchange, error }) => {
  return (
    <div className="container">
      <label htmlFor="Name">{field}</label>
      <input
        type={type}
        name={name}
        className="nameInput"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
      {error && <p className="invalidInputText">{error}</p>}
    </div>
  );
};

export default Field;
