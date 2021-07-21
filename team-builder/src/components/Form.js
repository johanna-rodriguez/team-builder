import React, { useState } from 'react';
import '../styles.css'


function Form({teamMembers,setTeamMembers}) {



    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [role,setRole] = useState('');

    const addMember = (event) =>{
        event.preventDefault();
        console.log(event.target)
        setTeamMembers([
                ...teamMembers,
                {
                    'name':name,
                    'email':email,
                    'role':role,
                }        
        ])
        // console.log(teamMembers)

     }


  return (

     <form className="center" onSubmit={addMember}>

         <label>Name
            <input onChange={event=>setName(event.target.value)} id='fnameInput' placeholder='Name' name='fname' type='text'></input>
         </label>

         <label>Email
            <input onChange={event=>setEmail(event.target.value)} id='femailInput' placeholder='Email' name='femail' type='text'></input>
         </label>

         <label>Role
            <select onChange={event=>setRole(event.target.value)} id='froleInput' placeholder='Role' name='frole' type='text'>
                <option>Backend Bngineer</option>
                <option>Frontend Bngineer</option>
                <option>Designer</option>

            </select>
         </label>

        <button>Send</button>
     </form>
  );
}

export default Form;


