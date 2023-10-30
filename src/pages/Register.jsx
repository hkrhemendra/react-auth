import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-wrapper">
      <div
        className="text-center login-form shadow-lg"
        cz-shortcut-listen="true"
      >
        <main className="form-signin w-100 m-auto form-container">
          <h1 className="h3 mb-3 fw-normal">Register</h1>
          <form className="custom-form">
            <div className="form-floating my-2">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="John Doe"
                required
              />
              <label for="floatingInput">Full Name</label>
            </div>
            <div className="form-floating my-2">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="john@doe.com"
                required
              />
              <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating my-2">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="987898780"
              />
              <label for="floatingInput">Phone number</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sing up
            </button>
          </form>
          <div>
            <Link className="" to="/">
              Login here
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Register;
