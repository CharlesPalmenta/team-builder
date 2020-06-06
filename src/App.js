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

  const addNewMember = memberObjParam => {
    setMembers([...members, {...memberObjParam, id: Date.now() }])
  }
  return (
    <div className='App'>
      <h1>Members</h1>
      <MemberForm addNewMember={addNewMember} />
      <Form members={members} />
    </div>
  );
}

export default App;
