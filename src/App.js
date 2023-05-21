import { useState } from 'react'
import User from './component/User'

function App() {
    const [isshow, setIsshow] = useState(true)
    const handleShowhide = () => {
        setIsshow((prev) => !prev)
    }
    return (
        <div className='App'>
            {isshow && <User />}
            <button onClick={() => handleShowhide()}>showHide</button>
        </div>
    )
}

export default App
