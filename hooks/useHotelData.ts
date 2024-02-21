import bricklyABI from "@/abis/bricklyABI.json";
import { BRICKLY_ADDRESS } from "@/lib/contracts";
import { useReadContract } from "wagmi";

export const useDataHotelId = async (id: number) => {
  const { data } = await useReadContract({
    abi: bricklyABI,
    address: BRICKLY_ADDRESS,
    args: [id],
    functionName: "dataPerId",
  });

  return data;
};
