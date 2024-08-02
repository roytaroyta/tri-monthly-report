import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../../NotFound';
import MonthlyReportForm from '../MonthlyReportForm';
import History from './History';
import AppLayout from '../../layout/AppLayout';
import FormikTest from './UserMonthlyReportForm';
import { initialValues } from '../../interface/MonthlyReport'; 

function UserDashboard({ signOut, username }: { signOut: () => void; username: string }) {
 
  return (
    <Router>
      <Routes>
          <Route path="/" element={<AppLayout handleLogout={signOut} userName={username} />}>
          <Route path="/report" element={<MonthlyReportForm />} />
          <Route path="/history" element={<History />} />
          <Route path="/test" element={<FormikTest initialValues={initialValues}/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default UserDashboard;
