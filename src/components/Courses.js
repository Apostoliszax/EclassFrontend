import React from "react";
import Table from "./table";
import { useEffect, useState } from "react";
import axios from "axios";

export const Courses = () => {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios("https://localhost:7281/api/courses")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  const column = [
    { heading: "Name", value: "name" },
    { heading: "Classroom", value: "classroom" },
    { heading: "Hours", value: "hours" },
    { heading: "ECTS", value: "ects" },
  ];
  return (
    <div>
      <div className="App">
        <h1>Our Courses</h1>
        <Table data={dataTable} column={column} />
      </div>

      <div>
        <button
          type="button"
          class="btn btn-outline-success"
          onClick={() => this.setState({ showModal: true })}
        >
          Add a course
        </button>
      </div>
    </div>
  );
};
