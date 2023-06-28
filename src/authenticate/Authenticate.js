import React, { useState } from "react";
import "./Authenticate.css";
import Login from "./Login";
import Signup from "./Signup";

function Authenticate() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="authenticate">
      <div className="auth__left">
        <img
          src="https://i.imgur.com/P3Vm1Kq.png"
          alt="Instagram Screenshots"
        />
      </div>
      <div className="auth__right">
        {active === "login" ? <Login /> : <Signup />}

        <div className="auth__more">
          <span>
            {active === "login" ? (
              <>
                Não tem uma conta?{" "}
                <button onClick={handleChange}>Cadastra-se agora </button>
              </>
            ) : (
              <>
                 <button onClick={handleChange}>Login</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;
