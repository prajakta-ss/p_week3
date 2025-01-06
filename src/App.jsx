import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import AdminDashboard from './components/AdminDashboard';
import Contact from './contacts/Contacts';

function App() {
  const authUser= useAuth();

  return (
    <>
      <div className="dark-bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
