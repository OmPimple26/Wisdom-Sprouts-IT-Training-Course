import React from "react";
import { Link } from "react-router-dom";

function Home({ students }) {
  return (
    <div className="container">
      <h1>Dashboard</h1>

      <div className="dashboard">
        <div className="dashboard-card">
          <h3>Total Students</h3>
          <h1>{students.length}</h1>
        </div>

        <div className="dashboard-card">
          <h3>Available Courses</h3>
          <h1>
            {new Set(students.map(s => s.course)).size}
          </h1>
        </div>
      </div>

      <Link to="/students">
        <button>View All Students</button>
      </Link>
    </div>
  );
}

export default Home;