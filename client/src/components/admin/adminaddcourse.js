import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './adminaddcourse.css'; // Custom CSS for CourseForm (optional)
import axios from 'axios';
import AdminAppbar from "./adminappbar";


const CourseForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    courseCode: '',
    courseCredit: '',
    courseCoordinatorId: '',
    courseCoordinatorName: '',
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
    axios.post('http://localhost:8081/addcourse', formData)
      .then((response) => {
        console.log(response.data);
        console.log("Course added successfully");
        //setMessage("Course added Successfully");
        window.alert('Course added successfully'); // Display success alert
        // Redirect to course details page (replace '/coursedetails' with your actual URL)
        window.location.href = '/courseoperations';
      })
      .catch((error) => {
        console.error(error);
        window.alert('Error adding course'); // Display error alert
        // Redirect to course details page (replace '/coursedetails' with your actual URL)
        window.location.href = '/courseoperations';
      });
  };

  return (
    <div>
            <AdminAppbar />

  
    <div className="container">
      <h1 className="my-4">Course Details Form</h1>
   
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="courseCode" className="form-label">Course Code</label>
          <input
            type="text"
            className="form-control"
            id="courseCode"
            name="courseCode"
            value={formData.courseCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseCredit" className="form-label">Course Credit</label>
          <input
            type="text"
            className="form-control"
            id="courseCredit"
            name="courseCredit"
            value={formData.courseCredit}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseCoordinatorId" className="form-label">Course Coordinator ID</label>
          <input
            type="text"
            className="form-control"
            id="courseCoordinatorId"
            name="courseCoordinatorId"
            value={formData.courseCoordinatorId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseCoordinatorName" className="form-label">Course Coordinator Name</label>
          <input
            type="text"
            className="form-control"
            id="courseCoordinatorName"
            name="courseCoordinatorName"
            value={formData.courseCoordinatorName}
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

export default CourseForm;
