import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

const LoginBox = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/feed");
  }

  return (
    <div className="login-box">
      <input
        className="github-input"
        type="text"
        placeholder="Digite seu usuário do Github"
      />
      <button onClick={handleClick} className="github-button">
        Enviar
      </button>
    </div>
  );
};

export default LoginBox;
