import React, { useContext } from 'react'
import File from './File'
import UserContext from './User'

const Profile = () => {
    const { handleAge } = useContext(UserContext)
    return (
        <div>
            <File />
            <button onClick={() => handleAge()}>setAge</button>
        </div>
    )
}

export default Profile
