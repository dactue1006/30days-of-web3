import { ethers } from "ethers";

import abi from "./abi/keyboards.json"

const contractAddress = '0x3496752388aeFd492d4434d06667d556Cc6F3ED3';
const contractABI = abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}