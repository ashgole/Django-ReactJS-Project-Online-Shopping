import React from "react";
import { buy } from "../../../api/API";

export default function ShowOne(props) {
  return (
    <>
      <div className="p-1 mh-100">
        <button
          onClick={() => props.data.setshowOne(false)}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <img
                src={props.data2.imgAddress}
                className="card-img-top "
                alt="..."
              />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h2>{props.data2.item}</h2>
                <hr />
                <h5 className="card-text">
                  Description : {props.data2.description}
                </h5>
                <h5>Price : {props.data2.price}</h5>
                <hr />
                <button onClick={() => buy(localStorage.getItem('username'),props.data2.id)} className="btn btn-primary w-100">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
