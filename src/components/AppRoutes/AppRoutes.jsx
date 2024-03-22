import { Routes, Route } from "react-router-dom";

import ChatPage from "../../pages/ChatPage";
import LoginPage from "../../pages/LoginPage";
import MainPage from "../../pages/MainPage";
import RegisterPage from "../../pages/RegisterPage";

import { ROUTES } from "../../routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<MainPage/>}></Route>
      <Route path={ROUTES.chat} element={<ChatPage/>}></Route>
      <Route path={ROUTES.login} element={<LoginPage/>}></Route>
      <Route path={ROUTES.register} element={<RegisterPage/>}></Route>
    </Routes>
  );
};

export default AppRoutes;
