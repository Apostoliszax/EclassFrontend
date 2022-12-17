import { Form, Button, NavItem } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
function EditStudent(params) {
  // const [newStudent, setNewStudent] = useState({
  //   name: student.name,
  //   hours: student.hours,
  //   classroom: student.classroom,
  //   ects: student.ects,
  // });
  console.log(params);

  const onInputChange = (e) => {
    params.setNewStudent({
      ...params.student,
      [e.target.name]: e.target.value,
    });
  };

  // const { name, hours, classroom, ects } = newStudent;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  function putStudent(student) {
    axios
      .put(`https://localhost:7281/api/Students/${student.id}`, {
        id: student.id,
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        gpa: document.getElementById("GPA").value,
      })
      .catch((err) => console.log(err.toJSON()));
  }

  return (
    <>
      {params.student == null ? (
        ""
      ) : (
        <>
          <Form
            id="EditStudentForm"
            onSubmit={(e) => {
              e.preventDefault();
              putStudent(params.student);
            }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Name *"
                name="name"
                id="Name"
                disabled={false}
                value={params.student.name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="Email"
                placeholder="email *"
                name="email"
                disabled={false}
                id="Email"
                value={params.student.email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                placeholder="GPA *"
                name="GPA"
                id="GPA"
                value={params.student.gpa}
                onChange={(e) => onInputChange(e)}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit" block>
              Edit Student
            </Button>
          </Form>
        </>
      )}
    </>
  );
}

export default EditStudent;
