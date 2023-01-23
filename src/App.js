import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Students from "./Students.js";
import Teachers from "./Teachers.js";
import DataProvider from "./DataProvider.js";
import ActionStudent from "./ActionStudent.js";
import ActionTeacher from "./ActionTeacher.js";

// Main component which handles all the routings
function App() {
  return (

    <div className="App">
      <h6>Day-26 adminDashboard using axios task</h6>
      <p className="netlify-suggestion-p">Kindly <b>DO NOT REFRESH</b> this netlify site when you are in the page other than home (dashboard) page. If you refresh on page other than home page, then it will give "page not found" (problem with netlify deployment). </p>

      <BrowserRouter>
      <DataProvider>
        <Routes>

          {/* Routing for dashboard */}
          <Route path="/" element={ <Dashboard /> } />

          {/* Routing for students-list page */}
          <Route path="/students" element={ <Students /> } />

          {/* Routing for teachers-list page */}
          <Route path="/teachers" element={ <Teachers /> } />

          {/* Routing for create-student page */}
          <Route path="/create-student" element={ <ActionStudent /> } />

          {/* Routing for edit-student page */}
          <Route path="/edit-student/:id" element={ <ActionStudent /> } />

          {/* Routing to view (or read) student */}
          <Route path="/view-student/:id/:toView" element={ <ActionStudent /> } />


          {/* Routing for create-teacher page */}
          <Route path="/create-teacher" element={ <ActionTeacher /> } />

          {/* Routing for edit-teacher page */}
          <Route path="/edit-teacher/:id" element={ <ActionTeacher /> } />

          {/* Routing to view (or read) teacher */}
          <Route path="/view-teacher/:id/:toView" element={ <ActionTeacher /> } />

        </Routes>
      </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
