import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './adminaddcourse.css'; // Custom CSS for CourseForm (optional)
import axios from 'axios';
import AdminAppbar from "./adminappbar";


const FacultyForm = () => {
    const [formData, setFormData] = useState({
      facultyName: '',
      facultyId: '',
      facultyDept: '',
      facultyEmail: '',
      facultyPhone: '',
      facultyDesignation: '',
    });
  
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
      axios.post('http://localhost:8081/addfaculty', formData)
      .then((response)=>{
        console.log("Faculty added successfully");
        window.alert('Faculty added successfully');
        window.location.href= '/facultyoperations';
      })
      .catch((error)=>{
        console.error(error);
        window.alert("Error adding faculty");
        window.location.href= '/facultyoperations';
      });
    };
    
    return(
      <div>      <AdminAppbar />
      
        <div className="container">
      <h1 className="my-4">Faculty Details Form</h1>
   
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="facultyName" className="form-label">Faculty Name</label>
          <input
            type="text"
            className="form-control"
            id="facultyName"
            name="facultyName"
            value={formData.facultyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="facultyId" className="form-label">Faculty ID</label>
          <input
            type="text"
            className="form-control"
            id="facultyId"
            name="facultyId"
            value={formData.facultyId}
            onChange={handleChange}
            required
          />
        </div>
       
        <div className="mb-3">
          <label htmlFor="facultyDept" className="form-label">Faculty Department</label>
          <input
            type="text"
            className="form-control"
            id="facultyDept"
            name="facultyDept"
            value={formData.facultyDept}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="facultyEmail" className="form-label">Faculty Email</label>
          <input
            type="email"
            className="form-control"
            id="facultyEmail"
            name="facultyEmail"
            value={formData.facultyEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="facultyPhone" className="form-label">Faculty Phone</label>
          <input
            type="tel"
            className="form-control"
            id="facultyPhone"
            name="facultyPhone"
            value={formData.facultyPhone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="facultyDesignation" className="form-label">Faculty Designation</label>
          <input
            type="text"
            className="form-control"
            id="facultyDesignation"
            name="facultyDesignation"
            value={formData.facultyDesignation}
            onChange={handleChange}
            required
          />
        </div>
       
        {/* Other input fields go here */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default FacultyForm;
