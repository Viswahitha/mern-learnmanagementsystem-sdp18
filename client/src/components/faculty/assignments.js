import React, { useState } from 'react';
import './assignments.css'; // External CSS file
import axios from 'axios';
import FAppbar from "./facultyAppbar";


export default function Assignments() {
    const [formData, setFormData] = useState({
        facultyId: '', // New field for faculty ID
        courseName: '',
        courseCode: '',
        assignmentNumber: '',
        dueDate: '',
        question: ''
       
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, for example, sending data to a server or updating state
        console.log(formData);
        axios.post('http://localhost:8081/addassignment',formData)
        .then((responsse)=>{
            console.log(responsse.data);
            window.location.href = "/facultyhomepage"
        })
        .catch((error)=> {
            console.error(error);
            console.log("error adding assignment please retry again");
        });

    };

    return (
        <div>      <FAppbar />
       
        <div className="center-wrapper">
            <div className="container">
                <h2 align="center">Add Assignment</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="facultyId">Faculty ID:</label>
                        <input
                            type="text"
                            id="facultyId"
                            name="facultyId"
                            value={formData.facultyId}
                            onChange={handleChange}
                            style={{ width: 'calc(100% - 30px)' }}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="courseName">Course Name:</label>
                        <input
                            type="text"
                            id="courseName"
                            name="courseName"
                            value={formData.courseName}
                            onChange={handleChange}
                            required
                            style={{ width: 'calc(100% - 30px)' }} // Adjust width here
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="courseCode">Course Code:</label>
                        <input
                            type="text"
                            id="courseCode"
                            name="courseCode"
                            value={formData.courseCode}
                            onChange={handleChange}
                            required
                            style={{ width: 'calc(100% - 30px)' }} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="assignmentNumber">Assignment Number:</label>
                        <input
                            type="text"
                            id="assignmentNumber"
                            name="assignmentNumber"
                            value={formData.assignmentNumber}
                            onChange={handleChange}
                            required
                            style={{ width: 'calc(100% - 30px)' }} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dueDate">Due Date:</label>
                        <input
                            type="date"
                            id="dueDate"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleChange}
                            style={{ width: 'calc(100% - 30px)' }} 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="question">Question:</label>
                        <textarea
                            id="question"
                            name="question"
                            value={formData.question}
                            rows={6} // Increase the number of rows (adjust as needed)
                            cols={100}
                            onChange={handleChange}
                            required
                            style={{ width: 'calc(100% - 30px)' }} 
                        ></textarea>
                    </div>
                   
                    <button type="submit" className="btn-submit">Submit</button>
                </form>
            </div>
        </div>
        </div>
    );
}
