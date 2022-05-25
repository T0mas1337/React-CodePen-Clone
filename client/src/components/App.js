import React from 'react';
import Navbar from "./Navbar/navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Practice from "./pages/practice";
import Theory from "./pages/theory";
import Tests from "./pages/tests";
import TextToUs from "./pages/TextToUs";
import Chat from "./pages/chat";
import Login from "./login/login";
import Blog from "./pages/blog/blog"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/practice' element={<Practice />} />
            <Route path='/tests' element={<Tests />} />
            <Route path='/textToUs' element={<TextToUs />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/login' element={<Login />} />
            <Route path='/blog/:id' element={<Blog />} />
            <Route path='/' element={<Theory />} />
        </Routes>
    </>
  )
}

export default App;
