import React, { useState } from 'react';
import './App.css';
import './styles.css'
import Form from './components/Form'
import TeamMembersDisplay from './components/teamMembersDisplay'

function App() {

  
    const [teamMembers,setTeamMembers] = useState([]);
    console.log(teamMembers)
    
  return (
    <div className="App">
     <Form 
     teamMembers={teamMembers}
     setTeamMembers={setTeamMembers}
     />
    
    <div className='center'>
      <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>

      </tr>
        {teamMembers.map((e) => (
        <TeamMembersDisplay member={e}/>
        ))}
      </table>
    </div>
    </div>
  );
}

export default App;
