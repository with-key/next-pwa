import React, { useEffect } from "react";

const Home = () => {
  const f = () => {
    Notification.requestPermission((result) => {
      console.log(result);
      if (result === "granted") {
        alert("Permissions granted");
      } else {
        alert("Permissions denied");
      }
    });
  };

  return <button onClick={() => f()}>알림 설정</button>;
};

export default Home;
