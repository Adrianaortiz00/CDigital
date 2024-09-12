import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";
import "./detailsCard.scss";

const DetailsCard = ({ description, id, onEdit, onDelete, isAdmin }) => {
  return (
    <div className="details-container">
      <p className="description">{description}</p>
      <div>
        {isAdmin && (
          <div className="button-container">
            {onEdit && <EditButton onClick={onEdit} />}
            <DeleteButton onClick={() => onDelete(id)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
