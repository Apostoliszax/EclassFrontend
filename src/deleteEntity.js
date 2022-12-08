import axios from "axios";

function deleteEntity(id, item) {
  if (item.gpa != null) {
    axios.delete(`https://localhost:7281/api/students/${id}`).then((res) => {
      window.location.reload(true);
    });
  } else if (item.ects != null) {
    axios.delete(`https://localhost:7281/api/courses/${id}`).then((res) => {
      window.location.reload(true);
    });
  } else {
    axios.delete(`https://localhost:7281/api/professors/${id}`).then((res) => {
      window.location.reload(true);
    });
  }
}
export default deleteEntity;
