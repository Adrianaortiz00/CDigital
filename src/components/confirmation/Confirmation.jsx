import "./confirmation.scss";

const Confirmation = ({ open, children }) => {
  if (!open) return null;

  return (
    <div className="confirmation isopen">
      <section className="container-confirmation">
        {children}
      </section>
    </div>
  );
};

export default Confirmation;
