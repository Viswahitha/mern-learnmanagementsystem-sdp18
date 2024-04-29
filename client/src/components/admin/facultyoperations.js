import axios from 'axios';
import { useState, useEffect } from 'react';
import './courseoperations.css';
import AdminAppbar from "./adminappbar";


export default function FacultyOperations() {
  const [faculties, setFaculties] = useState(null);
  
  useEffect(() => {
    // Use useEffect to make the API call when the component mounts
    getFaculties();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts
  
  const getFaculties = () => {
    axios.get('http://localhost:8081/showfaculties')
    .then((response) =>{
      console.log(JSON.stringify(response.data));
      setFaculties(response.data);
    })
    .catch((error)=>{
      console.error('error fetching faculties data:', error)
      setFaculties([]);
    });
  }

  const handleDelete = (objid, facultyId) => {
    if (window.confirm(`Do you want to delete faculty with ID: ${facultyId}`)) {
      console.log(objid);
      axios.post(`http://localhost:8081/deletefaculty/${facultyId}`)
      .then(response => {
        console.log(response.data);
        getFaculties();
        window.alert("Faculty deleted successfully")
      })
      .catch(error => {
        console.error('Error deleting faculty:', error);
      });
    }
  };

  const handleUpdate = (facultyId, faculty) => {
    // Implement update logic here, maybe open a modal with UpdateModal component
  };

  const handleAddFacultyClick = () => {
    // Redirect to the add faculty page
    window.location.href = '/adminaddfaculty';
  };

  return (
    <div>
      <AdminAppbar />
      <div className="table-container">
        <h1>Faculty Details</h1><br/>
        <button className="add-button" onClick={handleAddFacultyClick}>
          Add Faculty
        </button><br/><br/>
        <table>
          <thead>
            <tr>
              <th>Faculty Name</th>
              <th>Faculty ID</th>
              <th>Department</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Designation</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {faculties === null ? (
              <tr>
                <td colSpan="9">Loading...</td>
              </tr>
            ) : (
              faculties.length > 0 ? (
                faculties.map((faculty, index) => (
                  <tr key={index}>
                    <td>{faculty.facultyName}</td>
                    <td>{faculty.facultyId}</td>
                    <td>{faculty.facultyDept}</td>
                    <td>{faculty.facultyEmail}</td>
                    <td>{faculty.facultyPhone}</td>
                    <td>{faculty.facultyDesignation}</td>
                    <td>
                      <button className="delete-button" onClick={() => handleDelete(faculty._id, faculty.facultyId)}>Delete</button>
                    </td>
                    <td>
                      <button className="update-button" onClick={() => handleUpdate(faculty.facultyId, faculty)}>Update</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">There are no faculties available</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
