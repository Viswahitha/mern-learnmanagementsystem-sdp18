import React, { useEffect, useState } from 'react';
import './updatemodelcourse.css'; // Add CSS styles for your modal here
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Updatemodalcourse = ({ isOpen, onClose, courseId, initialData }) => {
  const [formData, setFormData] = useState(initialData);
    const[coursename, setCourseName] = useState(initialData.courseName)
    const[coursecode, setCourseCode] = useState(initialData.courseCode)
    const[coursecredit, setCourseCredit] = useState(initialData.courseCredit)
    const[coursecooridinatorid, setCourseCoordinatorId] = useState(initialData.courseCoordinatorId)
    const[coursecoordinatorname, setCourseCoordinatorName] = useState(initialData.courseCoordinatorName)
    const [pcc,setpcc] = useState('')
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit ={}
  const {id} = useParams()

  useEffect(() => {
    try{
      const response =  axios.get(`http://localhost:8081/showcourses/${id}`)
      setpcc(response.data)
    }
    catch(e){
      console.log(e.message)
    }
    
  }, []);
  

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Update Course</h2>
       
        <form>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={coursename}
            onChange={handleChange}
          />

          <label htmlFor="courseCode">Course Code:</label>
          <input
            type="text"
            id="courseCode"
            name="courseCode"
            value={coursecode}
            onChange={handleChange}
          />

          <label htmlFor="courseCredit">Course Credit:</label>
          <input
            type="number"
            id="courseCredit"
            name="courseCredit"
            value={coursecredit}
            onChange={handleChange}
          />

          <label htmlFor="courseCoordinatorId">Course Coordinator ID:</label>
          <input
            type="text"
            id="courseCoordinatorId"
            name="courseCoordinatorId"
            value={coursecooridinatorid}
            onChange={handleChange}
          />

          <label htmlFor="courseCoordinatorName">Course Coordinator Name:</label>
          <input
            type="text"
            id="courseCoordinatorName"
            name="courseCoordinatorName"
            value={coursecoordinatorname }
            onChange={handleChange}
          />

          {/* Add submit and cancel buttons */}
          <div className="button-group">
            <button type="submit" onClick={handleSubmit}>Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updatemodalcourse;
