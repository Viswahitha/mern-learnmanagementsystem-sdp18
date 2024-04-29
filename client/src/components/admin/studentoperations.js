import axios from 'axios';
import { useState, useEffect } from 'react';
import './courseoperations.css';
import AdminAppbar from "./adminappbar";

export default function CourseOperations() {
  const [students, setStudents] = useState(null);
  
  useEffect(() => {
    // Use useEffect to make the API call when the component mounts
    getStudents();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts
  const getStudents = ()=>{
    axios.get('http://localhost:8081/showstudents')
    .then((response) =>{
      console.log(JSON.stringify(response.data));
      setStudents(response.data);
    })
    .catch((error)=>{
      console.error('error fetching students data:' ,error)
      setStudents([]);
    });
   
  }


  const handleDelete=(objid, studentId) => {
    // Implement your delete logic here using Axios or any other method
    if(window.confirm(`Do you want to delete student with id: ${studentId}`)){
      console.log(objid)
      axios.post(`http://localhost:8081/deletestudent/${studentId}`)
      .then(response => {
        console.log(response.data);
        getStudents()
      })
      .catch(error => {
        console.error('Error deleting student:' , error);
      });
    }
  };

  const handleUpdate = (courseId, course) => {
   
  };
  const handleAddStudentClick = () => {
    // Redirect to the add course page
    window.location.href='/adminaddstudent';
   
  };


  return (
  <div>
      <AdminAppbar />
    <div className="table-container">
      <h1>Student Details</h1><br/>
      <button className="add-button" onClick={handleAddStudentClick}>
        Add Student
      </button><br/><br/>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student ID</th>
            <th>Branch</th>
            <th>Department</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students === null ? (
            <tr>
              <td colSpan="7">Loading...</td>
            </tr>
          ) : (
            students.length > 0 ? (
              students.map((student, index) => (
                <tr key={index}>
                  <td>{student.studentName}</td>
                  <td>{student.studentId}</td>
                  <td>{student.studentBranch}</td>
                  <td>{student.studentDept}</td>
                
                  <td>
                    <button className="delete-button" onClick={() => handleDelete(student._id,student.studentId)}>Delete</button>
                  </td>
                  <td>
                    <button className="update-button" onClick={() => handleUpdate()}>Update</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">There are no courses available</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
   
    </div>
  );
  }

