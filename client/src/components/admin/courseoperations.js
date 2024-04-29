import axios from 'axios';
import { useState, useEffect } from 'react';
import './courseoperations.css';
import AdminAppbar from "./adminappbar";
import UpdateModal from "./Updatemodelcourse";
export default function CourseOperations() {
  const [courses, setCourses] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for managing modal visibility
  const [selectedCourseId, setSelectedCourseId] = useState(null); // State to store the selected course ID for update
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Use useEffect to make the API call when the component mounts
    getCourses();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts
  const getCourses = ()=>{
    axios.get('http://localhost:8081/showcourses')
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setCourses(response.data);
    })
    .catch((error) => {
      console.error('Error fetching courses data:', error);
      setCourses([]); // Set an empty array in case of an error
    });
  }
  const handleDelete = (courseId,courseCode) => {
    // Implement your delete logic here using Axios or any other method
    if(window.confirm(`Are you sure you want to delete Course: ${courseCode}`)){
      console.log(courseId)
      axios.post(`http://localhost:8081/deletecourse/${courseCode}`)
      .then(response => {
        console.log(response.data); 
       getCourses()// Assuming the server sends "course deleted" message
        
      })
      .catch(error => {
        console.error('Error deleting course:', error);
      });

    }else{
      
    }
    console.log('Delete course with ID:', courseId);
  };

  const handleUpdate = (courseId, course) => {
    // Implement your update logic here using Axios or any other method
    //console.log('Update course with ID:', courseId);
    setSelectedCourseId(courseId); // Set the selected course ID for update
    setShowModal(true); 
    setFormData(course);
  };

  
  const handleAddCourseClick = () => {
    // Redirect to the add course page
    window.location.href = '/adminaddcourse'; // Replace '/add-course' with the actual URL of your add course page
  };
  return (<div>
      <AdminAppbar />
    <div className="table-container">
      <h1>Course Details</h1><br/>
      <button className="add-button" onClick={handleAddCourseClick}>
        Add Course
      </button><br/><br/>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Course Credit</th>
            <th>Course Coordinator ID</th>
            <th>Course Coordinator Name</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses === null ? (
            <tr>
              <td colSpan="7">Loading...</td>
            </tr>
          ) : (
            courses.length > 0 ? (
              courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.courseName}</td>
                  <td>{course.courseCode}</td>
                  <td>{course.courseCredit}</td>
                  <td>{course.courseCoordinatorId}</td>
                  <td>{course.courseCoordinatorName}</td>
                  <td>
                    <button className="delete-button" onClick={() => handleDelete(course._id,course.courseCode)}>Delete</button>
                  </td>
                  <td>
                    <button className="update-button" onClick={() => handleUpdate(course._id,course)}>Update</button>
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
    <UpdateModal  isOpen={showModal} onClose={() => setShowModal(false)} courseId={selectedCourseId} initialData={formData} />
    </div>
  );
  }

