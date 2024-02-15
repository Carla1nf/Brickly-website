"use client";
import bricklyABI from "@/abis/bricklyABI.json";
import { BRICKLY_ADDRESS } from "@/lib/contracts";
import { useReadContract, useReadContracts } from "wagmi";
import { Address } from "web3";

export const useUserDataPerHouseId = async (
  houseID: number,
  _ownershipID: number,
  address: Address
) => {
  const BricklyContract = {
    address: BRICKLY_ADDRESS,
    abi: bricklyABI,
  } as const;

  const { data: investedAmount } = await useReadContracts({
    contracts: [
      {
        ...BricklyContract,
        args: [address, houseID],
        functionName: "AddressInvestedAmount",
      },
      {
        ...BricklyContract,
        args: [houseID, _ownershipID],
        functionName: "getClaimableAmount",
      },
      {
        ...BricklyContract,
        args: [houseID, _ownershipID],
        functionName: "claimedAmountPerNFT",
      },
    ],
  });

  return investedAmount;
};
