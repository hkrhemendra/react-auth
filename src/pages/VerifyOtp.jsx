import React from 'react'
import { Link } from 'react-router-dom'

const VerifyOtp = () => {
  return (
    <div className="login-wrapper">
    <div
      className="text-center login-form shadow-lg"
      cz-shortcut-listen="true"
    >
      <main className="form-signin w-100 m-auto form-container">
        <div className=''>
         <h1 className="h3 mb-3 fw-normal">Verify Otp</h1>
         <p>
            Please enter your OTP to verify. 
         </p>
        </div>
        <form className="custom-form">
          <div className="form-floating my-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="9090"
            />
            <label for="floatingInput">OTP</label>
          </div>
          <Link className="w-100 btn btn-lg btn-primary" to='/verify-otp' type="submit">
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
  )
}

export default VerifyOtp
