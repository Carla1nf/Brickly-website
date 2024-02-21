"use client";
import bricklyABI from "@/abis/bricklyABI.json";
import { BRICKLY_ADDRESS } from "@/lib/contracts";
import { useReadContract, useReadContracts } from "wagmi";
import { Address } from "web3";

export const useBlockchainData = async (
  houseID: number,
  userAddress: Address
) => {
  const BricklyContract = {
    address: BRICKLY_ADDRESS,
    abi: bricklyABI,
  } as const;

  const { data: blockchainData } = await useReadContracts({
    contracts: [
      {
        ...BricklyContract,
        args: [houseID],
        functionName: "dataPerId",
      },
      {
        ...BricklyContract,
        args: [userAddress],
        functionName: "isKYC",
      },
    ],
  });

  return blockchainData;
};
