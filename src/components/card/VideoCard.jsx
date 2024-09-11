import "./videoCard.scss";
import DetailsCard from "./DetailsCard";
import { useState } from "react";
import EditButton from "../buttons/EditButton";

const VideoCard = ({ title, videoUrl, description, onClick, onEdit, isAdmin }) => {
  console.log("prueba1", isAdmin);
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si está en modo edición
  const [editedTitle, setEditedTitle] = useState(title); // Estado para el título editado
  const [editedDescription, setEditedDescription] = useState(description); // Estado para la descripción editada

  const handleSave = () => {
    console.log("guardando cambios...")
    const updatedCourse = {
      title: editedTitle,
      description: editedDescription
    };
    onEdit(updatedCourse); // Llama al método de edición con los nuevos valores
    setIsEditing(false); // Salir del modo de edición
  };

  return (
    <div className="videoCard" onClick={onClick}>
      <video width="100%" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isEditing ? (
        <>
          <h3>{title}</h3>
          <DetailsCard description={description} 
           isAdmin={isAdmin}
           onEdit={isAdmin ? (updatedCourse) => handleEditCourse(course.id, updatedCourse) : null}
          />
         
        </>
      ) : (
        <div className="editPopup">
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
          <button onClick={handleSave} className="saveButton">
            Guardar
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
