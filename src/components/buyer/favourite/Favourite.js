import React from "react";
import NoData from "../../../icons/NoData";

export default function Favourite(props) {
  return (
    <>
      {props.data.favourite.length ? (
        props.data.favourite.map((e, i) => (
          <>
            <div key={i} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={e.imgAddress} className="card-img-top" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Product Name : {e.name}</h5>
                    <p className="card-text">Description : {e.description}</p>
                    <p className="card-text">Price : {e.price}</p>
                  </div>
                  <button
                    onClick={() =>
                      props.data.removeFromFavourite(e.id, e.price)
                    }
                    className="btn btn-success mx-2 my-1"
                  >
                    Remove from card
                  </button>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </>
        ))
      ) : (
        <NoData />
      )}
      {props.data.total !== 0 && (
        <div className="row">
          <button className="btn btn-primary my-2">
           Total :  {props.data.total}
          </button>
        </div>
      )}
    </>
  );
}
