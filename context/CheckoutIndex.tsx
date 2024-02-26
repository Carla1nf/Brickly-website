import { createContext, useContext, useState } from "react";

const IndexContext = createContext<null | string>(null);
const ManageIndexContext = createContext<
  null | ((nextDeadline: string) => void)
>(null);

export function UseLenguage() {
  return useContext(IndexContext);
}

export function useManageLenguage() {
  return useContext(ManageIndexContext);
}

export function Lenguage({ children }: { children: React.ReactNode }) {
  const [lenguage, setLenguage] = useState<string>("EN");
  // time now
  const mangeLenguage = (newLenguage: string) => {
    setLenguage(newLenguage);
  };

  return (
    <>
      <IndexContext.Provider value={lenguage}>
        <ManageIndexContext.Provider value={mangeLenguage}>
          {children}
        </ManageIndexContext.Provider>
      </IndexContext.Provider>
    </>
  );
}
