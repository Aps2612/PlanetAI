import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

function Header() {
  return (
    <div className = "header">
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/submissions">Submissions</Link>
          </li>
          <li>
            <Link to="/submissions/new">Create New Submission</Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Header;