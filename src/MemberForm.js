import React, { useState } from 'react';

const MemberForm = props => {
    const [member, setMember] = useState({name: "Firstname Lastname", email: "valid email", body: "Please enter your title"});
    const handleChanges = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };
    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(member)
        setMember({name: '', email: '', body: ''})
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>
                Name
                <input id='name' type='text' onChange={handleChanges} value={member.name} name='name' />
            </label>
            <label htmlFor='email'>
                Email
                <input id='email' type='text' onChange={handleChanges} value={member.email} name='email' />
            </label>
            <label htmlFor='body'>
                Current Title
                <textarea id='body' onChange={handleChanges} value={member.body} name='body' />
            </label>
            <button type='submit'>Add Member</button>
        </form>
    );
};

export default MemberForm;