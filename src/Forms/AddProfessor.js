import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function useAddProfessor() {
  const [newProfessor, setNewProfessor] = useState({
    name: "",
    email: "",
  });

  const onInputChange = (e) => {
    setNewProfessor({ ...newProfessor, [e.target.name]: e.target.value });
  };

  const { name, email, gpa } = newProfessor;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function postProfessor() {
    axios
      .post("https://localhost:7281/api/professors", {
        id: 0,
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
      })
      .catch((err) => console.log(err.toJSON()));
  }

  return (
    <Form id="AddProfessorForm" onSubmit={postProfessor}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          id="Name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          id="Email"
          value={email}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Add New Professor
      </Button>
    </Form>
  );
}

export default useAddProfessor;
