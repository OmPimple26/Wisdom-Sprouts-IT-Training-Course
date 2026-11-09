import React, { useState } from "react";
import { Link } from "react-router-dom";

function Students({ students, deleteStudent }) {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container">
      <h1>Student List</h1>

      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredStudents.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>{student.age}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">📚</div>

          <h2>
            {students.length === 0
              ? "No Students Available!"
              : "No Students Found!"}
          </h2>

          <p>
            {students.length === 0
              ? "Your student list is currently empty. Start by adding your first student."
              : "We couldn't find any students matching your search. Try another name or email."}
          </p>

          {students.length === 0 ? (
            // <Link to="/add-student">
            <Link to="/">
              <button>Add Your First Student</button>
            </Link>
          ) : (
            <button onClick={() => setSearch("")}>Clear Search</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Students;
