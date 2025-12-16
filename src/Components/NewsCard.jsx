import React from "react";

const NewsCard = ({ details }) => {
  //   console.log(details);
  return (
    <div className="card bg-base-100 max-w-98 shadow-sm scale-80 rounded-md overflow-hidden">
      <figure>
        <img
          src={details?.urlToImage}
          className="aspect-video object-contain w-full"
          alt="Shoes"
        />
      </figure>
      <div className="card-body bg-white text-black">
        <h2 className="card-title line-clamp-2 text-xl py-1">
          {details?.title}
        </h2>
        <p className="line-clamp-4 text-xl py-1">{details?.content}</p>
        <div className="card-actions justify-end">
          <button
            className="btn bg-white text-black mt-4"
            onClick={() => window.open(details?.url)}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
