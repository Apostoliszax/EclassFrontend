import http from "../http-common";

const getAll = () => {
  return http.get("/courses");
};
const get = (id) => {
  return http.get(`/courses/${id}`);
};
const create = (data) => {
  return http.post("/courses", data);
};
const update = (id, data) => {
  return http.put(`/courses/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/courses/${id}`);
};
const CourseService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default CourseService;
