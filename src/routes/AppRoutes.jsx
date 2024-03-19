import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { ROUTES } from "./routes"
import Chat from "../pages/ChatPage"
import MainPage from "../pages/MainPage"
import Auth from "../components/Auth/Auth"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.chatPage} element={<Chat/>}></Route>
        <Route path={ROUTES.mainPage} element={<MainPage/>}></Route>
        <Route path={ROUTES.authPage} element={<Auth/>}></Route>
      </Routes>
    </>
  )
}

export default AppRoutes
