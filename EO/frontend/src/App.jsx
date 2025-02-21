// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import EventForm from './pages/event'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <EventForm></EventForm>
//     </>
//   )
// }

// export default App


import React, { useEffect, useState } from "react";
import { contract } from "./web3";

function App() {
  const [eventName, setEventName] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const name = await contract.eventName(); // Example function
        setEventName(name);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };
    fetchEvent();
  }, []);

  return (
    <div>
      <h1>Event Ticketing System</h1>
      <p>Event Name: {eventName}</p>
    </div>
  );
}

export default App;
