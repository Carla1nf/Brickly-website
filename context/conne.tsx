import { useKYCData } from "@/hooks/useKYCData";
import { createContext, useContext, useEffect, useState } from "react";
import { useAddressContext } from "./connection";
import { useDataHotelId } from "@/hooks/useGetIndexs";
import { useBlockchainData } from "@/hooks/useBlockchainData";

const isKycContext = createContext<boolean>(false);
const isHotelBlockchainDataContext = createContext<boolean>(false);

export function useKYC() {
  return useContext(isKycContext);
}

export function useHotelBlockchainData() {
  return useContext(isHotelBlockchainDataContext);
}

export function BlockchainData({ children }: { children: React.ReactNode }) {
  const [kyc, setKyc] = useState<boolean>(false);
  const [hotelBlockcahainData, setHotelBlockchainData] = useState<any>(false);

  const userAddress = useAddressContext();

  const initBlockchainData = async () => {
    const blockchainData = (await useBlockchainData(1, userAddress)) as any;
    console.log(blockchainData);
    setHotelBlockchainData(blockchainData ? blockchainData[0].result : "");
    setKyc(blockchainData ? blockchainData[1].result : false);
  };

  initBlockchainData();

  return (
    <isKycContext.Provider value={kyc}>
      <isHotelBlockchainDataContext.Provider value={hotelBlockcahainData}>
        {children}
      </isHotelBlockchainDataContext.Provider>
    </isKycContext.Provider>
  );
}
