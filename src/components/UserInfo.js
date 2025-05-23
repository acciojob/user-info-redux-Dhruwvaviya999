import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateName, updateEmail } from '../userSlice';

const UserInfo = () => {

    const dispatch = useDispatch();
    const name = useSelector(state => state.user.name);
    const email = useSelector(state => state.user.email);

  return (
    <div>
        <h1>User Information</h1>

        <label htmlFor="name">Name: </label>
        <input onChange={(e) => dispatch(updateName(e.target.value))} type="text" id='name'/> <br />

        <label htmlFor="email">Email: </label>
        <input onChange={(e) => dispatch(updateEmail(e.target.value))} type="email" id='email' />

        <h4>Current values in store: </h4>
        <div className='output'>Name - {name}</div>
        <div className='output'>Email - {email}</div>
    </div>
  )
}

export default UserInfo
