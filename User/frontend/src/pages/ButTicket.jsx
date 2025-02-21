import { useParams } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";
import contractABI from "../abi/EventTicketing.json";

const contractAddress = "0xYourSmartContractAddress";

const BuyTicket = () => {
  const { eventId } = useParams();
  const [ticketCount, setTicketCount] = useState(1);

  const buyTicket = async () => {
    if (!window.ethereum) return alert("MetaMask required!");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    try {
      const event = await contract.getEvent(eventId);
      const price = ethers.utils.parseEther(event[2].toString());

      const tx = await contract.buyTicket(eventId, ticketCount, { value: price.mul(ticketCount) });
      await tx.wait();
      alert("Ticket Purchased!");
    } catch (error) {
      console.error("Purchase failed:", error);
    }
  };

  return (
    <div>
      <h2>Buy Ticket for Event {eventId}</h2>
      <input type="number" min="1" onChange={(e) => setTicketCount(e.target.value)} />
      <button onClick={buyTicket}>Buy Ticket</button>
    </div>
  );
};

export default BuyTicket;
