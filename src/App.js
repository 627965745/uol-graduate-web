import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentTable from "./StudentTable";
import AddStudent from "./AddStudent";
import CourseTable from "./CourseTable";

function App() {
    return (
      <Router>
      <div className="App">
          <Routes>
              <Route exact path="/" element={<StudentTable />} />
              <Route exact path="/addstudent" element={<AddStudent />} />
              <Route exact path="/courses" element={<CourseTable />} />
          </Routes>
      </div>
  </Router>
    );
}

export default App;
