import "./App.css";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import Student from "./Components/Student/Student";
import Portal from "./Components/Portal/Portal";
import { useState } from "react";
import Mentor from "./Components/Mentor/Mentor";
import MentorView from "./Components/Mentor/MentorView";
import StudentView from "./Components/Student/StudentView";
import AdmissionForm from "./Components/Student/AdmissionForm";
import StudentEdit from "./Components/Student/StudentEdit";
import { UserProvider } from "./Components/UserContext";
import MentorEdit from "./Components/Mentor/MentorEdit";

function App() {
  const [studentdata, setstudentData, setmentorData] = useState([
    {
      roll_no: 1,
      name: "Rani R",
      standard: 9,
      mother_name: "Meena",
      father_name: "Raja",
      contact: "923456****",
      address: "chennai",
    },
    {
      roll_no: 2,
      name: "Jothi R",
      standard: 7,
      mother_name: "Meenabai",
      father_name: "Rajashekar",
      contact: "923333****",
      address: "chennai",
    },
    {
      roll_no: 3,
      name: "Bamini N",
      standard: 5,
      mother_name: "Nagamai",
      father_name: "Nagaraj",
      contact: "976543****",
      address: "chennai",
    },
  ]);
  const mentordata = [
    {
      employe_id: 1,
      name: "Meena S",
      subject: "Tamil",
      qualification: " M.A Tamil(literature)",
      experience: "15 years",
      salary: 40000,
      contact: "922222****",
      address: "chennai",
    },
    {
      employe_id: 2,
      name: "Revathy N",
      subject: "English",
      qualification: " M.A English(literature)",
      experience: "10 years",
      salary: 30000,
      contact: "765432****",
      address: "chennai",
    },
    {
      employe_id: 3,
      name: "Geetha P",
      subject: "Maths",
      qualification: "M.sc,B.Ed",
      experience: "15 years",
      salary: 40000,
      contact: "909876****",
      address: "chennai",
    },
    {
      employe_id: 4,
      name: "Sangeetha J",
      subject: "science",
      qualification: "M.sc(Science)",
      experience: "13 years",
      salary: 35000,
      contact: "923456****",
      address: "chennai",
    },
    {
      employe_id: 5,
      name: "Vinetha R",
      subject: "social",
      qualification: "M.A(History)",
      experience: "6 year",
      salary: 28000,
      contact: "965432****",
      address: "chennai",
    },
  ];
  const [mentorVisible, setMentorVisible] = useState(false);
  return (
    <UserProvider>
      <Routes>
        <Route
          path="/"
          element={<Login setMentorVisible={setMentorVisible} />}
        />
        <Route path="/portal" element={<Portal />}>
          <Route path="mentor" element={<Mentor mentordata={mentordata} />} />
          <Route
            path="mentorview/:id"
            element={<MentorView mentordata={mentordata} />}
          />
          <Route
            path="mentoredit/:id"
            element={
              <MentorEdit
                mentordata={mentordata}
                setmentorData={setmentorData}
              />
            }
          />

          <Route
            path="student"
            element={
              <Student
                studentdata={studentdata}
                setstudentData={setstudentData}
                mentorVisible={mentorVisible}
              />
            }
          />
          <Route
            path="studentview/:id"
            element={<StudentView studentdata={studentdata} />}
          />
          <Route
            path="admissionform"
            element={
              <AdmissionForm
                studentdata={studentdata}
                setstudentData={setstudentData}
              />
            }
          />
          <Route
            path="studentedit/:id"
            element={
              <StudentEdit
                studentdata={studentdata}
                setstudentData={setstudentData}
              />
            }
          />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
