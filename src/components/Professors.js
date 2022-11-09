import React from "react";
import Table from "./table";
import { useEffect, useState } from "react";
import { Modal, Button, Alert, CardGroup } from "react-bootstrap";
import axios from "axios";
import AddProfessor from "../Forms/AddProfessor";

export const Professors = () => {
  const [dataTable, setDataTable] = useState([]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
        <div className="col-sm-6">
          <Button
            onClick={handleShow}
            className="btn btn-success"
            data-toggle="modal"
          >
            <span>Add New Professor</span>
          </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Professor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddProfessor />
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
