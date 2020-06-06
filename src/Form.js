import React from 'react';

const Form = props => {
    return (
        <div className="member-list">
            {props.members.map(member => (
                <div className="member" key={member.id}>
                    <h1>{member.name}</h1>
                    <h2>{member.email}</h2>
                    <p>{member.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Form;