import { useState } from "react";
import { ethers } from "ethers";
import contractABI from "../abi/EventTicketing.json";

const contractAddress = "0xYourSmartContractAddress";

const EventForm = ({ onEventCreated }) => {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [totalTickets, setTotalTickets] = useState("");

  const createEvent = async () => {
    if (!window.ethereum) return alert("MetaMask required!");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    try {
      const tx = await contract.createEvent(eventName, description, ethers.utils.parseEther(price), totalTickets);
      await tx.wait();
      onEventCreated();
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Event Name" onChange={(e) => setEventName(e.target.value)} />
      <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Price (ETH)" onChange={(e) => setPrice(e.target.value)} />
      <input type="number" placeholder="Total Tickets" onChange={(e) => setTotalTickets(e.target.value)} />
      <button onClick={createEvent}>Create Event</button>
    </div>
  );
};

export default EventForm;
