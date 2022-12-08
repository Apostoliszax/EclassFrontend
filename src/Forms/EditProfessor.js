import { Form, Button, NavItem } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

function EditProfessor(params) {
  // const [newProfessor, setNewProfessor] = useState({
  //   name: Professor.name,
  //   hours: Professor.hours,
  //   classroom: Professor.classroom,
  //   ects: Professor.ects,
  // });
  const onInputChange = (e) => {
    params.setNewProfessor({
      ...params.professor,
      [e.target.name]: e.target.value,
    });
  };

  // const { name, hours, classroom, ects } = newProfessor;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  function putProfessor(professor) {
    axios
      .put(`https://localhost:7281/api/Professors/${professor.id}`, {
        id: professor.id,
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
      })
      .catch((err) => console.log(err.toJSON()));
  }

  return (
    <>
      {params.professor == null ? (
        ""
      ) : (
        <>
          <Form
            id="EditProfessorForm"
            onSubmit={(e) => {
              e.preventDefault();
              putProfessor(params.professor);
            }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Name *"
                name="name"
                id="Name"
                disabled={false}
                value={params.professor.name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="Email"
                placeholder="Email *"
                name="email"
                disabled={false}
                id="Email"
                value={params.professor.email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit" block>
              Edit Professor
            </Button>
          </Form>
        </>
      )}
    </>
  );
}

export default EditProfessor;
