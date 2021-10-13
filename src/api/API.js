import axios from "axios";

export const signup = async (
  username,
  first_name,
  last_name,
  email,
  password
) => {
  await axios
    .post(
      "http://127.0.0.1:8000/u/accounts/",
      { username, first_name, last_name, email, password },
      {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    )
    .then((result) => {
      window.location.href = "/signin";
    });
};
export const signin = async (username, password) => {
  await axios
    .post(
      "http://127.0.0.1:8000/u/token-auth/",
      { username, password },
      {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    )
    .then((result) => {
      let data = result.data;
      localStorage.setItem("username", username);
      localStorage.setItem("token", data.token);
      console.log("signin");
      window.location.href = "/";
    });
};

export const buy = async (user, itemid) => {
  await axios
    .post(
      "http://127.0.0.1:8000/o/orders/",
      { user, itemid },
      {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    )
    .then((result) => {
      let data = result.data;
      console.log("orderd", data);
    });
};

export const signout = () => {
  localStorage.clear();
  window.location.href = "/signin";
  console.log("signout");
};
