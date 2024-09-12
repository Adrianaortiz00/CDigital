import { useState } from "react";
import Modal from "react-modal";
import "./modal.scss";

Modal.setAppElement("#root");

const EditModal = ({
  isOpen,
  onClose,
  initialTitle,
  initialDescription,
  initialVideoUrl,
  onSave,
}) => {
  const [editedTitle, setEditedTitle] = useState(initialTitle);
  const [editedDescription, setEditedDescription] =
    useState(initialDescription);
  const [editedVideoUrl, setEditedVideoUrl] = useState(initialVideoUrl);

  const handleSave = () => {
    const updatedCourse = {
      title: editedTitle,
      description: editedDescription,
      videoUrl: editedVideoUrl,
    };
    onSave(updatedCourse); // Ejecuta la función para guardar los cambios
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Editar Curso"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2>Editar Curso</h2>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        className="editInput"
        placeholder="Editar título"
      />
      <textarea
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
        className="editTextarea"
        placeholder="Editar descripción"
      />
      <input
        type="text"
        value={editedVideoUrl}
        onChange={(e) => setEditedVideoUrl(e.target.value)}
        className="editInput"
        placeholder="Editar URL del video"
      />
      <div class="button-container">
        <button onClick={handleSave} className="saveButton">
          Guardar
        </button>
        <button onClick={onClose} className="cancelButton">
          Cancelar
        </button>
      </div>
    </Modal>
  );
};

export default EditModal;
