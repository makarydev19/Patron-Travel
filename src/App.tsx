import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AboutUs, Services, ContactUs } from './Pages';
import { Navbar } from './Components';

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
