import Header from "../components/Header/Header"
import Auth from "../components/Auth/Auth"

import { useState } from "react"

const MainPage = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  return (
    <div>
      <Header isAuthOpen={isAuthOpen} setIsAuthOpen={setIsAuthOpen}/>
      
      <Auth isAuthOpen={isAuthOpen} setIsAuthOpen={setIsAuthOpen}/>
      
    </div>
  )
}

export default MainPage
