import React, { useEffect, useState } from "react";
import axios from "axios";

export default function OrderList() {
  const [dataArr, setdataArr] = useState([]);
  useEffect(() => {
    let data;
    axios.get("http://127.0.0.1:8000/o/orderlist/").then((result) => {
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
              <th scope="col"></th>
            </tr>
          </thead>
          {dataArr.map((e, i) => (
            <tbody key={i}>
              <tr>
                <td>{e.username}</td>
                <td>
                  <table className="table table-striped table-dark ">
                    <thead>
                      <tr>
                        <th scope="col">ItemName</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    {e.myorders.map((e, i) => (
                      <tbody key={i}>
                        <tr>
                          <td>{e.itemname}</td>
                          <td>10000</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
