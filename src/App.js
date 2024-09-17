import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LeftMenuBar from './components/LeftMenuBar';
import Home from './pages/HomePage';
import Billing from './pages/BillingPage';
import ProfilePage from './pages/ProfilePage';
import Sites from './pages/Profile/Sites';
import Users from './pages/Profile/Users';
import ExternalUsers from './pages/Profile/ExternalUsers';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <LeftMenuBar />
        <div className='page-content'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/profile" element={<ProfilePage />}>
              <Route index element={<Sites />} />
              <Route path="sites" element={<Sites />} />
              <Route path="users" element={<Users />} />
              <Route path="externalusers" element={<ExternalUsers />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;