import React, { useEffect, useState } from "react";
import axios from "axios";
function Profile() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    let data;
    const headers = {
      Authorization: "Token " + localStorage.getItem("token"),
    };
    axios.get("http://127.0.0.1:8000/u/accounts/11/",{headers}).then((result) => {
      data = result.data;
      setProfile(data);
    });
  }, []);

  return (
    <>
      <div class="container border border-primary">
        <div class="row  justify-content-center align-items-center">
          <div class="col-8">
            <img
              class="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtCmWx_JK4rl8tdilxp-ZJoTWvbsQU8YskQ&usqp=CAU"
              alt="myimage"
            />
          </div>
          <div class="col-4 d-flex flex-column">
            <h5 className="card-title">{profile.username}</h5>
            <h6 className="card-text">
              {" "}
              {profile.first_name} {profile.last_name}
            </h6>
            <h6 className="card-text"> {profile.email}</h6>

            <a href="/" className="btn btn-primary">
              Edit Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
