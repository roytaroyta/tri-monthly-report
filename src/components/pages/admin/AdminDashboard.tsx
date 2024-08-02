import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../../NotFound';
import AppLayout from '../../layout/AppLayout';

function AdminDashboard({ signOut, username }: { signOut: () => void; username: string }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout handleLogout={signOut} userName={username}  />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AdminDashboard;