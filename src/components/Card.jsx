import React from 'react';

const Card = ({ title, description }) => {
    return (
      <div className="bg-[#383A3A] rounded-lg shadow-md p-6 w-1/2 m-3">
        <h2 className="text-md text-white font-semibold mb-2">{title}</h2>
        <p className="text-gray-400 mb-2">{description}</p>
        <button
          className="bg-[#454747] hover:bg-[#5b5d5d] text-gray-400 font-bold p-2 rounded-full focus:outline-none focus:shadow-outline"
        >
          More Info
        </button>
      </div>
    );
  };
  
export default Card;
