import { createContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { IndexPage } from '../IndexPage'
import { AllRoutes } from './Routes/Routes'

export  const User  = createContext()
function App() {
  const [count, setCount] = useState(0)
  const [user, setuser] = useState(null);


  const Update =(val)=>{
    setuser(val)
}



  return (
    <User.Provider value={{user,Update}}>
      <div className="App">
      <AllRoutes/>
    </div>
    </User.Provider>
    
  )
}

export default App
