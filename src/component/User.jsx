import React, { createContext, useEffect, useState } from 'react'
import Profile from './Profile'

export const UserContext = createContext()

const User = () => {
    const [name, setName] = useState('Long')
    const [age, setAge] = useState(24)
    const [address, setAddress] = useState({
        nation: 'VietNam',
        city: {
            stress: '200 To Huu',
            house: 'building'
        }
    })

    const handleAge = () => {
        setAge((pre) => pre + 1)
    }
    const handleAdd = () => {
        // setAddress((prev) => ({
        //     ...prev,
        //     city: 'QuangNam'
        // }))
        setAddress((prevAddress) => {
            const newCity = { ...prevAddress.city }
            newCity.stress = 'stress moiws hoan toan'
            return {
                ...prevAddress,
                city: newCity
            }
        })
    }

    const getAddress = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    nation: 'USA',
                    city: {
                        stress: '100, Niscolas',
                        house: 'building'
                    }
                })
            }, 3000)
        })
    }

    useEffect(() => {
        console.log('123')
        getAddress().then((res) => {
            // const newAdd = { ...address }
            // setAddress(newAdd)
            // newAdd.city = res.city
            setAddress((prev) => {
                const newPrev = { ...prev }
                newPrev.city = res.city
                return newPrev
            })
        })
        return () => {
            console.log('destroy')
        }
    }, [])

    return (
        <>
            <UserContext.Provider value={{ name, age, address, handleAge }}>
                <Profile />
                <button onClick={() => handleAdd()}>setAddress</button> <br />
            </UserContext.Provider>
        </>
    )
}

export default User
