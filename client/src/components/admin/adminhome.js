import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Admin.css'; // Custom CSS for AdminHome
import AdminAppbar from "./adminappbar";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaUserTie, FaBookOpen } from 'react-icons/fa'; // Import icons

const AdminHome = () => {
  const navigate = useNavigate();

  const handleFaculty = () => {
    navigate("/facultyoperations");
  };

  const handleCourse = () => {
    navigate("/courseoperations");
  };

  const handleStudent = () => {
    navigate("/studentoperations");
  };

  return (
    <div>
      <AdminAppbar />
      
      <div className="container">
        
        <div className="card">
          <div className="card-body">
          <h3 className="my-4">Admin Actions</h3><br></br>
            <div className="action-buttons">
              <button className="btn btn-success" onClick={handleFaculty}>
                <FaUserTie className="icon" /> Faculty
              </button>
              <button className="btn btn-success" onClick={handleCourse}>
                <FaBookOpen className="icon" /> Courses
              </button>
              <button className="btn btn-info" onClick={handleStudent}>
                <FaUserGraduate className="icon" /> Students
              </button>
              {/* Add more buttons or actions as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
