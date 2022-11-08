import React from "react";
import Table from "./table";
import { useEffect, useState } from "react";
import axios from "axios";

export const Professors = () => {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios("https://localhost:7281/api/professors")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  const column = [
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
  ];
  return (
    <div>
      <div className="App">
        <h1>Our Professors</h1>
        <Table data={dataTable} column={column} />
      </div>

      <div>
        <button
          type="button"
          class="btn btn-outline-success"
          onClick={() => this.setState({ showModal: true })}
        >
          Add a Professor
        </button>
      </div>
    </div>
  );
};
