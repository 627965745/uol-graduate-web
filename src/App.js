import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentTable from "./StudentTable";
import AddStudent from "./AddStudent";

function App() {
    return (
      <Router>
      <div className="App">
          <Routes>
              <Route exact path="/" element={<StudentTable />} />
              <Route exact path="/addstudent" element={<AddStudent />} />
          </Routes>
      </div>
  </Router>
    );
}

export default App;
