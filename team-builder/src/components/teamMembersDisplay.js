import React, { useState } from 'react';



function TeamMembersDisplay({member}) {


console.log(member)


  return (
    <tr>
            <th>{member.name}</th>     
            <th>{member.email}</th>     
            <th>{member.role}</th> 
    </tr>
  );
}

export default TeamMembersDisplay;