import React from 'react'
import User from './User'

const Userlist = ({users,setUsers}) => {

    const handleDelete = (id) => {
        const updatedList = users.filter((user) => user.id !== id);
        setUsers(updatedList);
    }

  return (
    <div className='users'>
        {
            users.map((user) => (
                <User {...user} handleDelete={handleDelete}/>
            ))
        }
    </div>
  )
}

export default Userlist