import React from "react";
import Table from "./table";
import { useEffect, useState } from "react";
import axios from "axios";
import AddCourse from "../Forms/AddCourse";
import { Modal, Button, Alert, CardGroup } from "react-bootstrap";

export const Courses = () => {
  const [dataTable, setDataTable] = useState([]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    axios("https://localhost:7281/api/courses")
      .then((res) => setDataTable(res.data))
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
        <Table data={dataTable} column={column} variation={"courses"} />
        
      </div>

      <div className="col-sm-6">
        <Button
          onClick={handleShow}
          className="btn btn-success"
          data-toggle="modal"
        >
          <span>Add New Course</span>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddCourse />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
