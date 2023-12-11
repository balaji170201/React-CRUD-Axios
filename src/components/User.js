import React from 'react'
import { Link } from 'react-router-dom'

const User = ({id,name,username,email,address,phone,website,company,handleDelete}) => {

  return (
    <div className='userList'>
        <p><strong>Name </strong>: {name} </p>
        <p><strong>Username </strong>: {username}</p>
        <p><strong>Email </strong>: {email}</p>
        <p><strong>Address </strong>: {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}</p>
        <p><strong>Phone </strong>: {phone}</p>
        <p><strong>Website </strong>: {website}</p>
        <p><strong>Company </strong>: {`${company.name},${company.bs}`}</p>
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <Link to={`/edituser/${id}`}><button type="button" class="btn btn-primary">Edit</button></Link>
            <button type="button" class="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
        </div>
    </div>
  )
}

export default User