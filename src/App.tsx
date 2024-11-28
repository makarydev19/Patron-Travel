import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/1-Home';
import AboutUs from './Pages/2-AboutUs';
import Services from './Pages/3-Services';
import ContactUs from './Pages/4-ContactUs';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="fixed md:static navbar w-full">
          <Navbar />
        </div>
        <div className="flex relative dark:bg-main-dark-bg">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contactUs" element={<ContactUs />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
