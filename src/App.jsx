import { useState } from "react"
import SearchForm from "./components/form/SearchForm"
import UserProfile from "./components/user/UserProfile"
//import TrendingUsers from "./components/user/TrendingUsers"


const App = () => {
  const [userName, setUserName]  = useState('antfu')
  return (
    <main className="   bg-[#0d1117]">
      <SearchForm userName={userName} setUserName={setUserName}/>
      {/* <TrendingUsers/> */}

      <UserProfile userName={userName}/>
     
      
    </main>
  )
}

export default App
