import bricklyABI from "@/abis/bricklyABI.json";
import { BRICKLY_ADDRESS } from "@/lib/contracts";
import { useReadContract } from "wagmi";
import { Address } from "web3";

export const useKYCData = async (address: Address) => {
  const { data } = await useReadContract({
    abi: bricklyABI,
    address: BRICKLY_ADDRESS,
    args: [address],
    functionName: "isKYC",
  });
  return data as boolean;
};
