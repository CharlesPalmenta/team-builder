import React, { useState } from 'react';
import Form from './Form';
import MemberForm from './MemberForm';
import './index.css';

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Charles Palmenta",
      email: "palmentac@gmail.com",
      body: "Web Developer"
    }
  ]);
  return (
    <div className='App'>
      <h1>Members</h1>
    
    </div>
  );
}

export default App;
