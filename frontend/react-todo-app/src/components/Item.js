import "./Item.css";
import { Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Tooltip from "@mui/material/Tooltip";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
export default function Item(props) {
  const { title, deleteTask, item, editTask } = props;

  return (
    <div className="list-item">
      <div className="left-zone">
        <div className="checkbox-mui">
          <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} />
        </div>
        <p className="title">{title}</p>
      </div>
      <div className="btn-container">
        <Tooltip
          title="Edit"
          placement="bottom"
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -14],
                  },
                },
              ],
            },
          }}
        >
          <EditNoteIcon
            className="btn"
            color="primary"
            onClick={() => editTask(item._id)}
          />
        </Tooltip>
        <Tooltip title="Delete" placement="bottom"
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -14],
                  },
                },
              ],
            },
          }}>
        <DeleteIcon
          className="btn"
          color="primary"
          onClick={() => deleteTask(item._id)}
        />
        </Tooltip>
      </div>
    </div>
  );
}
