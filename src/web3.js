// import Web3 from "web3";
// import { ethers } from "ethers";

export const connectWallet = async () => {
  if (window.ethereum) {
    const ethAccounts = await window.ethereum.send("eth_requestAccounts");
    console.log("Ethereum:", ethAccounts);
    // window.web3 = new Web3(window.ethereum);
    return true;
  }
  return false;
};
