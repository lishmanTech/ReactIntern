import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./Component/About/About";
import Gallery from "./Component/Gallery/Gallery";
import Courses from './Component/Courses/Courses'
import Home from './Component/Home'

const App=()=>{
  return(
    <>
     <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/gallery" Component={Gallery} />
        <Route exact path="/courses" Component={Courses} />
        <Route exact path="/contact" Component={Home} />
    </Routes>
    </>
  )
}

export default App;