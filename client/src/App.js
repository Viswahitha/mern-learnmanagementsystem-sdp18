import './App.css';
import{BrowserRouter, Routes,Route} from 'react-router-dom';
import Signin from './components/signin';
import SignUp from './components/signup';
import Home from './components/home';
import Course from './components/CoursesPage';
import Mern from "./components/mern";
import Profile from "./components/Profile";
import Daa from "./components/daa";
import Dbms from "./components/Dbms";
import Mp from "./components/Mp";
import Pfsd from "./components/Pfsd";
import Psqt from "./components/Psqt";
import Ddai from "./components/Ddai";
import Aoop from "./components/Aoop";
import Admin from "./components/admin/adminhome";
import Faculty from "./components/faculty/facultyhome";
import Admincourse from "./components/admin/adminaddcourse";
import Adminaddfaculty from "./components/admin/adminaddfaculty";
import Adminstudent from "./components/admin/adminaddstudents";
import Studentoperations from "./components/admin/studentoperations";
import Courseoperations from './components/admin/courseoperations';
import Facultyoperations from "./components/admin/facultyoperations";
import Assignments from "./components/faculty/assignments";
import Viewassignmentfaculty from "./components/faculty/viewassignments"


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route index element ={<Signin />}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/mern" element={<Mern/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/daa" element={<Daa/>}/>
        <Route path="/dbms" element={<Dbms/>}/>
        <Route path="/mp" element={<Mp/>}/>
        <Route path="/pfsd" element={<Pfsd/>}/>
        <Route path="/psqt" element={<Psqt/>}/>
        <Route path="/ddai" element={<Ddai/>}/>
        <Route path="/aoop" element={<Aoop/>}/>
        <Route path="/adminhomepage"element={<Admin/>}/>
        <Route path="/facultyhomepage"element={<Faculty/>}/>
        <Route path="/adminaddcourse"element={<Admincourse/>}/>
        <Route path="/adminaddfaculty"element={<Adminaddfaculty/>}/>
        <Route path="/adminaddstudent"element={<Adminstudent/>}/>
        <Route path="/studentoperations"element={<Studentoperations/>}/>
        <Route path="/courseoperations"element={<Courseoperations/>}/>
        <Route path="/facultyoperations"element={<Facultyoperations/>}/>
        <Route path="/facultyassignments"element={<Assignments/>}/>
        <Route path="/facultyviewassignments" element={<Viewassignmentfaculty/>}/>

       
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
