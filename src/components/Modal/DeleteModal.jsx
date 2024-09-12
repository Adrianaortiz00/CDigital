import Modal from "react-modal";
import "./modal.scss"

Modal.setAppElement('#root');

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete(); // Ejecuta la función para eliminar el curso
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmar Eliminación"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h3>¿Estás seguro de que quieres eliminar este curso?</h3>
      <div class="button-container">
      <button onClick={handleDelete} className="saveButton">
        Aceptar
      </button>
      <button onClick={onClose} className="cancelButton">
        Cancelar
      </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
