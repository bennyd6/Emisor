import { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from "../abi/EventTicketing.json";

const contractAddress = "0xYourSmartContractAddress";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    if (!window.ethereum) return alert("MetaMask required!");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    try {
      const eventCount = await contract.eventCounter();
      let eventList = [];

      for (let i = 0; i < eventCount; i++) {
        const event = await contract.getEvent(i);
        eventList.push({ id: i, name: event[0], description: event[1], price: ethers.utils.formatEther(event[2]) });
      }

      setEvents(eventList);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <p>Price: {event.price} ETH</p>
          <a href={`/event/${event.id}`}>Share Event</a>
        </div>
      ))}
    </div>
  );
};

export default EventList;
