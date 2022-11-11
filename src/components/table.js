import deleteEntity from "../deleteEntity";
import "./table.css";

const Table = ({ data, column }) => {
  return (
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
          <TableRow item={item} column={column} />
        ))}
      </tbody>
    </table>
  );
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
const TableRow = ({ item, column }) => (
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
      <button id="editButton" type="button" class="btn btn-warning">
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
);

export default Table;
