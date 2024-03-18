import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { ROUTES } from "./routes"
import Chat from "../pages/Chat"
import MainPage from "../pages/MainPage"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.chatPage} element={<Chat/>}></Route>
        <Route path={ROUTES.mainPage} element={<MainPage/>}></Route>
      </Routes>
    </>
  )
}

export default AppRoutes
