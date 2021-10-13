import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [dataArr, setdataArr] = useState([]);
  useEffect(() => {
    let data;
    axios.get("http://127.0.0.1:8000/products/",).then((result) => {
      data = result.data;
      setdataArr(data);
    });
  }, []);

  return (
    <>
      <div class="list-group">
      {dataArr.map((e, i) => {
        return (
          <div className="row">
            <h3  class="list-group-item list-group-item-action active" key={i}>{e.product}</h3>
            {e.items.map((e) => {
              return (
                <div key={i} className="card col-sm-3 m-4">
                  <img src={e.imgAddress} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{e.item}</h5>
                    <p className="card-text">{e.price} | {e.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      </div>
    </>
  );
}
