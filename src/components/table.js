import deleteEntity from "../deleteEntity";
import { useEffect, useState } from "react";
import EditCourse from "../Forms/EditCourse";
import "./table.css";
import { parsePath } from "react-router-dom";

const Table = ({ data, column, variation }) => {
  const [newCourse, setNewCourse] = useState(null);

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
              />
            </>
          ))}
        </tbody>
      </table>
      <EditCourse
        course={newCourse}
        setNewCourse={setNewCourse}
        variation={variation}
      />
    </>
  );
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;

const TableRow = ({ item, column, setNewCourse }) => {
  return (
    <>
      <tr>
        {column.map((columnItem, index) => {
          if (columnItem.value.includes(".")) {
            const itemSplit = columnItem.value.split(".");
            return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
          }
          console.log(item);
          return <td>{item[`${columnItem.value}`]}</td>;
        })}
        <td>
          <button
            id="editButton"
            onClick={() => setNewCourse(item)}
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
