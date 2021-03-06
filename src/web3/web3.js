import { ethers } from "ethers";
// import * as token from "./token";
// import * as market from "./marketplace";
//provider
const provider = new ethers.providers.StaticJsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545"
);

// export const getBalance = async (address) => {
//   let mainetContractAddress = token.mainetContractAddress();
//   let abi = token.abi();
//   let contract = new ethers.Contract(mainetContractAddress, abi, provider);
//   let amount = await contract.balanceOf(address);
//   return amount;
// };

export const connectWallet = async () => {
  if (window.ethereum) {
    const ethAccounts = await window.ethereum.send("eth_requestAccounts");
    console.log("Ethereum:", ethAccounts);
    return true;
  }
  return false;
};
