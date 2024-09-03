import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './navbar';
function App() {
    
  const [cards, setCard] = useState([])
    
  const fetchdata = async () => {
    let a = await fetch("https://fakestoreapi.com/products")
    let data = await a.json() 
    setCard(data)
    console.log(data)
  }

 useEffect(() => {
   fetchdata()
 
 }, [])
 

  return (
    <>
    <div className='bg'>
    <Navbar/>
    <div className="container relative inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" >
      {cards.map((card)=>{
        return <div key ={card.id} className="card">
<h1>{card.title}</h1>
<p>Price: ${card.price}</p> 
<p>Description: {card.description}</p> 
<p>Category: {card.category}</p> 
<img src={card.image} alt={card.title} /> 
<p>Rating: {card.rating.rate} (Based on {card.rating.count} reviews)</p> 

        </div>

      })}
    </div>
    </div>
    </>
  
  );
 
}

export default App;
