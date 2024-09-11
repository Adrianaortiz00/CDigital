import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";
import "./detailsCard.scss";

const DetailsCard = ({ description, id, onEdit, onDelete}) => {
  console.log('DetailsCard render');
  return (
    <div className="details-container">
      <p className="description">{description}</p>
      <div >
      {onEdit && typeof onEdit === 'function' && <EditButton onClick={() => onEdit(id)} />}
        <DeleteButton onClick={() => onDelete(id)} />
      </div>
    </div>
  );
};

export default DetailsCard;
