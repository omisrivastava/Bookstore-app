// import React from "react";
// import Home from "./Home/Home";
// import Course from "./Components/Course";
// import { Route, Routes } from "react-router-dom";
// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/course" element={<Course />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
import React from "react";
import Home from "./Home/Home";
import Courses from './courses/Courses';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses/>} />
          <Route path="/signup" element={<Signup/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
