// import { ethers } from "ethers";

export const connectWallet = async () => {
  if (window.ethereum) {
    const ethAccounts = await window.ethereum.send("eth_requestAccounts");
    console.log("Ethereum:", ethAccounts);
    return true;
  }
  return false;
};
