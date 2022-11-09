import { Modal, Button, Alert, CardGroup } from "react-bootstrap";
import React from "react";
import Table from "./table";
import { useEffect, useState } from "react";
import axios from "axios";
import AddStudent from "../Forms/AddStudent";

export const Students = () => {
  const [dataTable, setDataTable] = useState([]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    axios("https://localhost:7281/api/students")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  const column = [
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "GPA", value: "gpa" },
  ];

  return (
    <div>
      <div className="App">
        <h1>Our Students</h1>
        <Table data={dataTable} column={column} />
      </div>

      <div>
        <div className="col-sm-6">
          <Button
            onClick={handleShow}
            className="btn btn-success"
            data-toggle="modal"
          >
            <span>Add New Student</span>
          </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddStudent />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close Button
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
