import React, { useState } from "react";
import StudentService from "../api/StudentService";

export const AddStudent = () => {
  const initialStudentState = {
    id: 0,
    name: "",
    email: "",
    gpa: 0,
    hasThesis: true,
  };
  const [Student, setStudent] = useState(initialStudentState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...Student, [name]: value });
  };

  const saveStudent = () => {
    var data = {
      id: Student.id,
      name: Student.name,
      email: Student.email,
      gpa: Student.gpa,
      hasThesis: Student.hasThesis,
    };

    StudentService.create(data)
      .then((response) => {
        setStudent({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          gpa: response.data.gpa,
          hasThesis: response.data.hasThesis,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newStudent = () => {
    setStudent(initialStudentState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newStudent}>
            Add a student
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              required
              value={Student.Name}
              onChange={handleInputChange}
              name="Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="Email"
              required
              value={Student.Email}
              onChange={handleInputChange}
              name="Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="gpa">GPA</label>
            <input
              type="text"
              className="form-control"
              id="gpa"
              required
              value={Student.gpa}
              onChange={handleInputChange}
              name="gpa"
            />
          </div>

          <div className="form-group">
            <label htmlFor="hasThesis">hasThesis</label>
            <input
              type="text"
              className="form-control"
              id="hasThesis"
              required
              value={Student.hasThesis}
              onChange={handleInputChange}
              name="hasThesis"
            />
          </div>

          <button onClick={saveStudent} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
