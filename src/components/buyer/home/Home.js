import React, { useState } from "react";
import ShowOne from "./ShowOne";
export default function Home(props) {
  const [showOne, setshowOne] = useState(false);
  const [showOneData, setshowOneData] = useState({});

  function showOneF(id, item, description, imgAddress, price) {
    setshowOne(true);
    setshowOneData({ id, item, description, imgAddress, price });
  }
  return (
    <>
      <div className="container">
        {showOne ? (
          <ShowOne data={{ setshowOne: setshowOne }} data2={showOneData} />
        ) : (
          <div className="row ">
            {props.data.dataArr.map((e, i) => {
              return (
                <div key={i} className="list-group">
                  <h3 className="list-group-item list-group-item-action active">
                    {e.product}
                  </h3>
                  <div className="row">
                    {e.items.map((e, i) => {
                      return (
                        <div key={e.item} className="card  col-lg-3 m-4">
                          <img
                            src={e.imgAddress}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">{e.item}</h5>
                            <p className="card-text">
                              Description : {e.description} Price : {e.price}
                            </p>

                            <button
                              onClick={() =>
                                showOneF(
                                  e.id,
                                  e.item,
                                  e.description,
                                  e.imgAddress,
                                  e.price
                                )
                              }
                              className="btn btn-primary"
                            >
                              Buy now
                            </button>
                            <button
                              onClick={() =>
                                props.data.addToCart(
                                  e.name,
                                  e.description,
                                  e.imgAddress,
                                  e.price
                                )
                              }
                              className="btn btn-success mx-2"
                            >
                              Add to card
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
