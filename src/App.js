import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SubmissionForm from './components/SubmissionForm';
import SubmissionList from './components/SubmissionList';
import SubmissionDetails from './components/SubmissionDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SubmissionList />} />
          <Route path="/submissions" element={<SubmissionList />} />
          <Route path="/submissions/new" element={<SubmissionForm />} />
          <Route path="/submissions/:id" element={<SubmissionDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;