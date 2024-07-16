import React, { Component } from 'react'

const User = (props) => {
    return(
        <div>
            <h1>Child Component</h1>
            <p>User Name is <b>{props.data.name}</b> and Age is <b>{props.data.age}</b></p>
        </div>
    )
}

export default User;