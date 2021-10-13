import React, { useState } from "react";
import { signin } from "../../api/API";
export default function Signin() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  function signin1(e) {
    e.preventDefault();
    signin(username, password);
  }

  return (
    <>
    <h2>Signin</h2>
      <form onSubmit={signin1}>
        <div className="form-group  my-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Signin
        </button>
      </form>
    </>
  );
}
