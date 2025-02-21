import { ethers } from "ethers";
import EventTicketing from "./abi/EventTicketing.json";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const rpcUrl = process.env.REACT_APP_RPC_URL;

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, EventTicketing.abi, signer);

export { provider, signer, contract };
