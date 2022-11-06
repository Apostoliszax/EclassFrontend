import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Courses } from "./components/Courses";
import { Grades } from "./components/Grades";
import { Home } from "./components/Home";
import { Students } from "./components/Students";
import { Professors } from "./components/Professors";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/Home">
                Eclass++
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Courses">
                  Courses
                </Nav.Link>
                <Nav.Link as={Link} to="/Grades">
                  Grades
                </Nav.Link>
                <Nav.Link as={Link} to="/Students">
                  Students
                </Nav.Link>
                <Nav.Link as={Link} to="/Professors">
                  Professors
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Courses" element={<Courses />}></Route>
            <Route path="/Grades" element={<Grades />}></Route>
            <Route path="/Students" element={<Students />}></Route>
            <Route path="/Professors" element={<Professors />}></Route>
          </Routes>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
