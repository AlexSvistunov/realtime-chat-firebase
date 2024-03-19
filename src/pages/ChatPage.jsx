import React from "react";
import Header from "../components/Header/Header";

const Chat = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ height: "80vh", border: "1px solid black" }}></div>

        <div style={{ display: "flex" }}>
          <input style={{ width: "100%" }}></input>
          <button style={{ padding: "10px" }}>Отправить</button>
        </div>
      </div>
    </>
  );
};

export default Chat;
