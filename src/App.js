import React from 'react';
import Heading from './Heading';
import Faces from './Faces';
import Submission from './Submission';
import './App.css';
import './Faces.css';
import './Heading.css';
import './Submission.css';

function App() {
  return (
    <div className="App">
      <Heading />
      <Faces /> 
      <Submission />
    </div>
  );
}

export default App;
