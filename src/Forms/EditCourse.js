import { Form, Button, NavItem } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import { Modal, Alert, CardGroup } from "react-bootstrap";
function EditCourse(params) {
  // const [newCourse, setNewCourse] = useState({
  //   name: course.name,
  //   hours: course.hours,
  //   classroom: course.classroom,
  //   ects: course.ects,
  // });

  const onInputChange = (e) => {
    params.setNewCourse({ ...params.course, [e.target.name]: e.target.value });
  };

  // const { name, hours, classroom, ects } = newCourse;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  function putCourse(course) {
    axios
      .put(`https://localhost:7281/api/Courses/${course.id}`, {
        id: course.id,
        name: document.getElementById("Name").value,
        hours: document.getElementById("Hours").value,
        classroom: document.getElementById("Classroom").value,
        ects: document.getElementById("Ects").value,
      })
      .catch((err) => console.log(err.toJSON()));
  }

  return (
    <>
      {params.course == null ? (
        ""
      ) : (
        <>
          <Form
            id="EditCourseForm"
            onSubmit={(e) => {
              e.preventDefault();
              putCourse(params.course);
            }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Name *"
                name="name"
                id="Name"
                disabled={false}
                value={params.course.name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                placeholder="Hours *"
                name="hours"
                disabled={false}
                id="Hours"
                value={params.course.hours}
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
                value={params.course.classroom}
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
                value={params.course.ects}
                onChange={(e) => onInputChange(e)}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit" block>
              Edit Course
            </Button>
          </Form>
        </>
      )}
    </>
  );
}

export default EditCourse;
