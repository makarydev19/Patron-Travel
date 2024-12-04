import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, AboutUs, Services, ContactUs } from './Pages';
import { Navbar } from './Components';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="fixed z-[1000] navbar w-full">
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
