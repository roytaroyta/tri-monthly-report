import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import MonthlyReportForm from './pages/MonthlyReportForm';
import History from './pages/History';
import AppLayout from './layout/AppLayout';
import FormikTest from './pages/FormikTest';

function UserDashboard({ signOut, username }: { signOut: () => void; username: string }) {
  const inithikisu = { 
    companyName: "",
  };
  return (
    <Router>
      <Routes>
          <Route path="/" element={<AppLayout handleLogout={signOut} userName={username} />}>
          <Route path="/report" element={<MonthlyReportForm />} />
          <Route path="/history" element={<History />} />
          <Route path="/test" element={<FormikTest data={inithikisu}/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default UserDashboard;
