import React from 'react';

const Jewelery = ({ cards }) => {
  const mensClothes = cards.filter(card => card.category === "jewelery");

  return (
    <div className="container relative inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      {mensClothes.map((card) => (
        <div key={card.id} className="card bg-white shadow-lg rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">{card.title}</h1>
          <img src={card.image} alt={card.title} className="w-full h-auto rounded-md mb-4" />
          <p className="text-lg mb-2">Price: ${card.price}</p>
          {/* <p className="text-base mb-2">Description: {card.description}</p> */}
          <p className="text-base font-semibold">Rating: {card.rating.rate} (Based on {card.rating.count} reviews)</p>
        </div>
      ))}
    </div>
  );
}

export default Jewelery;
