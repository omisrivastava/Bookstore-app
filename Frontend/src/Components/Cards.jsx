import React from "react";

const Cards = ({item}) => {
  return (
    <>
      <div className="mt-20 p-3 ">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 ">
          <figure>
            <img
              src={item.image}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline py-4">{item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 duration-200 py-4">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
