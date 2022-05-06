import React from 'react';
import Navbar from "./Navbar/navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Practice from "./pages/practice";
import Theory from "./pages/theory";
import Tests from "./pages/tests";
import TextToUs from "./pages/TextToUs";
import Chat from "./pages/chat";
import Profile from "./pages/Profile";


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Profile />} />
            <Route path='/practice' element={<Practice />} />
            <Route path='/theory' element={<Theory />} />
            <Route path='/tests' element={<Tests />} />
            <Route path='/textToUs' element={<TextToUs />} />
            <Route path='/chat' element={<Chat />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
