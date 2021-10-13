import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [dataArr, setdataArr] = useState([]);
  useEffect(() => {
    let data;
    axios.get("http://127.0.0.1:8000/u/accounts/").then((result) => {
      data = result.data;
      setdataArr(data);
    });
  }, []);
  return (
    <>
      <div className="row">
        <table className="table table-striped table-dark ">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          {dataArr.map((e, i) => (
            <tbody key={i}>
              <tr>
                <td>{e.username}</td>
                <td>
                  {e.first_name} {e.last_name}
                </td>
                <td>{e.email}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
