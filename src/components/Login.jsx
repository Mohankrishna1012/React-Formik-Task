import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let username = "abc";
  let pass = "123";
  let login = () => {
    if (username == "abc" && pass == "123") {
      navigate("/portal/dashboard");
    } else {
      alert("Worng data");
    }
  };
  return (
    <div class="login">
      <h1>Login</h1>
      <form method="post">
        <input
          type="text"
          name="u"
          placeholder="Username"
          required="required"
        />
        <input
          type="password"
          name="p"
          placeholder="Password"
          required="required"
        />
        <button onClick={login} className="btn btn-primary btn-user btn-block">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
