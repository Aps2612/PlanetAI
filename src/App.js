import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SubmissionForm from './components/SubmissionForm';
import SubmissionList from './components/SubmissionList';
import SubmissionDetails from './components/SubmissionDetail';
import { submissionData } from './components/submissionData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  const [data,setData] = useState(submissionData);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SubmissionList  submissions = {data}/>} />
          <Route path="/submissions" element={<SubmissionList submissions = {data}/>} />
          <Route path="/submissions/new" element={<SubmissionForm />} />
          {data.map((submission) => (<Route path="/submissions/:id" element={<SubmissionDetails submission = {submission}/>} />))}
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;