import deleteEntity from "../deleteEntity";
import { useEffect, useState } from "react";
import EditCourse from "../Forms/EditCourse";
import EditProfessor from "../Forms/EditProfessor";
import EditStudent from "../Forms/EditStudent";
import "./table.css";
import { parsePath } from "react-router-dom";
import { Modal, Button, Alert, CardGroup } from "react-bootstrap";

const Table = ({ data, column, variation }) => {
  const [newCourse, setNewCourse] = useState(null);
  const [newProfessor, setNewProfessor] = useState(null);
  const [newStudent, setNewStudent] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <table>
        <thead>
          <tr>
            {column.map((item, index) => (
              <TableHeadItem item={item} />
            ))}
            <td id="actionsHead">Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <>
              <TableRow
                item={item}
                column={column}
                setNewCourse={setNewCourse}
                setNewProfessor={setNewProfessor}
                setNewStudent={setNewStudent}
              />
            </>
          ))}
        </tbody>
      </table>
      {variation == "courses" ? (
        <EditCourse
          course={newCourse}
          setNewCourse={setNewCourse}
          variation={variation}
        />
      ) : (
        ""
      )}
      {variation == "professors" ? (
        <EditProfessor
          professor={newProfessor}
          setNewProfessor={setNewProfessor}
          variation={variation}
        />
      ) : (
        ""
      )}
      {variation == "students" ? (
        <EditStudent
          student={newStudent}
          setNewStudent={setNewStudent}
          variation={variation}
        />
      ) : (
        ""
      )}
    </>
  );
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;

const TableRow = ({
  item,
  column,
  setNewCourse,
  setNewProfessor,
  setNewStudent,
}) => {
  function HandleEditButton(item) {
    setNewCourse(item);
    setNewProfessor(item);
    setNewStudent(item);
  }
  return (
    <>
      <tr>
        {column.map((columnItem, index) => {
          if (columnItem.value.includes(".")) {
            const itemSplit = columnItem.value.split(".");
            return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
          }
          return <td>{item[`${columnItem.value}`]}</td>;
        })}
        <td>
          <button
            id="editButton"
            onClick={() => HandleEditButton(item)}
            type="button"
            class="btn btn-warning"
          >
            Edit
          </button>
          <button
            onClick={() => deleteEntity(item.id, item)}
            type="button"
            class="btn btn-danger "
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Table;
