import React, { useState } from "react";
import { signup } from "../../api/API";
export default function Signup() {
  const [username, setusername] = useState();
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();

  function signup1(event) {
    event.preventDefault();
    signup(username, firstname, lastname, email, password);
  }

  return (
    <>
      <h2>Signup</h2>
      <form onSubmit={signup1}>
        <div className="form-group  my-2">
          <label>Username</label>
          <input
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group my-2">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <div className="form-group  my-2">
          <label>First Name</label>
          <input
            className="form-control"
            placeholder="firstname"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group  my-2">
          <label>Last Name</label>
          <input
            className="form-control"
            placeholder="lastname"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group my-2">
          <label>Email</label>
          <input
            type="Email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary my-2">
          Signup
        </button>
      </form>
    </>
  );
}
