import React, { useContext } from 'react'
import UserContext from './User'
const File = (props) => {
    const { name, age, address } = useContext(UserContext)
    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>
                    {address.nation}-{address.city.stress}-{address.city.house}
                </li>
            </ul>
        </div>
    )
}

export default File
