import { useState } from "react";
import Modal from "react-modal";
import DetailsCard from "./DetailsCard";
import EditModal from "../Modal/EditModal";
import DeleteModal from "../Modal/DeleteModal";
import "./videoCard.scss";
import "../Modal/modal.scss";

Modal.setAppElement('#root');

const VideoCard = ({ id, title, videoUrl, description, onEdit, isAdmin, onDelete }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Funciones para abrir y cerrar los modales
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);
  
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handleEditSave = (updatedCourse) => {
    onEdit(id, updatedCourse);
  };

  return (
    <div className="videoCard">
      <video width="100%" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>{title}</h3>
      <DetailsCard 
        description={description} 
        id={id} 
        onEdit={openEditModal} 
        onDelete={openDeleteModal}
        isAdmin={isAdmin}
      />

      {/* Modal de edición */}
      {isAdmin && (
        <EditModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          initialTitle={title}
          initialDescription={description}
          initialVideoUrl={videoUrl}
          onSave={handleEditSave}
        />
      )}

      {/* Modal de confirmación de eliminar */}
      {isAdmin && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onDelete={() => onDelete(id)}
        />
      )}
    </div>
  );
};

export default VideoCard;
