import "../css/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="login-wrapper">
      <div
        className="text-center login-form shadow-lg"
        cz-shortcut-listen="true"
      >
        <main className="form-signin w-100 m-auto form-container">
          <h1 className="h3 mb-3 fw-normal">Login</h1>
          <form className="custom-form">
            <div className="form-floating my-2">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="987898780"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <label htmlFor="floatingInput">Phone number</label>
            </div>
            <div id="recaptcha-container"></div>
            <Link
              to='/verify-otp'
              className="w-100 btn btn-lg btn-primary"
            >
              Sign in
            </Link>
          </form>
          <div>
            <Link className="" to="/signup">
              Register here
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
