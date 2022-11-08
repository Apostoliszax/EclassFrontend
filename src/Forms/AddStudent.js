import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";

const AddStudent = () => {
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
    AddStudent(name, email, gpa);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
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
          value={gpa}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Add New Student
      </Button>
    </Form>
  );
};

export default AddStudent;
