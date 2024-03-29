import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function useAddStudent() {
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    gpa: 0,
    hasThesis: false,
  });

  const onInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const { name, email, gpa } = newStudent;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function postStudent() {
    axios
      .post("https://localhost:7281/api/students", {
        id: 0,
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        gpa: document.getElementById("GPA").value,
        hasThesis: true,
        courses: null,
      })
      .catch((err) => console.log(err.toJSON()));
  }

  return (
    <Form id="AddStudentForm" onSubmit={postStudent}>
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
      <Form.Group>
        <Form.Control
          type="number"
          placeholder="GPA"
          name="gpa"
          id="GPA"
          value={gpa}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Add New Student
      </Button>
    </Form>
  );
}

export default useAddStudent;
