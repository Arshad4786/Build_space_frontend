import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MensClothing from './router/mens.js'; 
import Jewelery from './router/jewelery.js';
import Electronics from './router/electronics.js';
import WomenClothing from './router/womens.js';

function App() {
  const [cards, setCard] = useState([]);

  const fetchdata = async () => {
    let a = await fetch("https://fakestoreapi.com/products");
    let data = await a.json();
    setCard(data);
    console.log(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container relative inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                {cards.slice(7,14).map((card) => (
                  <div key={card.id} className="card">
                    <h1>{card.title}</h1>
                    <img src={card.image} alt={card.title} />
                    <p>Price: ${card.price}</p>
                    <p>Category: {card.category}</p>
                    <p>Rating: {card.rating.rate} (Based on {card.rating.count} reviews)</p>
                  </div>
                ))}
              </div>
            }
          />
          <Route path="/mens-clothing" element={<MensClothing cards={cards} />} />
          <Route path="/jewelery" element={<Jewelery cards={cards} />} />
          <Route path="/electronics" element={<Electronics cards={cards} />} />
          <Route path="/womens-clothing" element={<WomenClothing cards={cards} />} />



        </Routes>
      </Router>
    </>
  );
}

export default App;
