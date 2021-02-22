import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.scss";

const LoginPage: React.FC = () => {
  const history = useHistory();

  return (
    <div className="loginContainer">
      <button
        className="loginBtn"
        onClick={(e) => history.replace("/weather/1")}
      >
        Start App
      </button>
    </div>
  );
};

export default LoginPage;
