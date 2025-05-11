import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './pages/privateRoute';
import Timeline from './pages/timeline';
import ScrollToTop from './components/ScrollTop';
import Overview from './components/Overview';


const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>

                <Route path="/" element={<Overview />} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route 
                    path="/timeline/:taskId"
                    element={
                        <PrivateRoute>
                            <Timeline />    
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
