import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Students from "./pages/Students";
import initialStudents from "./data/data.js";

import "./App.css";

function App() {
  const [students, setStudents] = useState(initialStudents);

  // Delete Student
  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);

    setStudents(updatedStudents);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home students={students} />} />

        <Route
          path="/students"
          element={
            <Students students={students} deleteStudent={deleteStudent} />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
