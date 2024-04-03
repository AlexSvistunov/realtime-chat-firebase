import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";

import { useAuth } from "../hooks/use-auth";
import { ROUTES } from "../routes";
import { useEffect } from "react";

const MainPage = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTES.chat);
    }
  })

  return (
    <>
      <Header />
    </>
  );
};

export default MainPage;
