import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './adminaddcourse.css'; // Custom CSS for CourseForm (optional)
import axios from 'axios';
import AdminAppbar from "./adminappbar";


const StudentForm = () => {
    const [formData, setFormData] = useState({
      studentName: '',
      studentId: '',
      studentBranch: '',
      studentDept: '',
      
    });
    //const [message, setMessage] = useState(null);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      axios.post('http://localhost:8081/addstudents',formData)
      .then((response)=>{
        console.log("Student added successfully");
        window.alert('Student added successfully');
        window.location.href= '/studentoperations';
      })
      .catch((error)=>{
        console.error(error);
        window.alert("Error adding student");
        window.location.href= '/studentoperations';
      });
      
    };
    return(
        <div className="container">
      <h1 className="my-4">Student Details Form</h1>
   
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">Student Name</label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="studentId" className="form-label">Student Id</label>
          <input
            type="text"
            className="form-control"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="studentBranch" className="form-label">Student Branch</label>
          <input
            type="text"
            className="form-control"
            id="studentBranch"
            name="studentBranch"
            value={formData.studentBranch}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="studentDept" className="form-label">Student Dept</label>
          <input
            type="text"
            className="form-control"
            id="studentDept"
            name="studentDept"
            value={formData.studentDept}
            onChange={handleChange}
            required
          />
        </div>
       
        {/* Other input fields go here */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
