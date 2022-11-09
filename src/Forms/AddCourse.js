import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function useAddCourse() {
  const [newCourse, setNewCourse] = useState({
    name: "",
    hours: "",
    classroom: "",
    ects: "",
  });

  const onInputChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const { name, hours, classroom, ects } = newCourse;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function postCourse() {
    axios
      .post("https://localhost:7281/api/Courses", {
        id: 0,
        name: document.getElementById("Name").value,
        hours: document.getElementById("Hours").value,
        classroom: document.getElementById("Classroom").value,
        ects: document.getElementById("Ects").value,
      })
      .catch((err) => console.log(err.toJSON()));
  }

  return (
    <Form id="AddCourseForm" onSubmit={postCourse}>
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
          type="number"
          placeholder="Hours *"
          name="hours"
          id="Hours"
          value={hours}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Classroom *"
          name="classroom"
          id="Classroom"
          value={classroom}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="number"
          placeholder="Ects *"
          name="ects"
          id="Ects"
          value={ects}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Add New Course
      </Button>
    </Form>
  );
}

export default useAddCourse;
