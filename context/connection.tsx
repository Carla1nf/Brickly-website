import { Web3Auth } from "@web3auth/modal";
import { createContext, useContext, useState } from "react";
import Web3, { Address } from "web3";

const Web3AuthContext = createContext<null | string>(null);
const IsConnectingContext = createContext<boolean>(false);
const LogOutContext = createContext<null | (() => void)>(null);
const ConnectContext = createContext<null | (() => void)>(null);
const AddressContext = createContext<Address>("");

export function useConnection() {
  return useContext(Web3AuthContext);
}

export function useIsConnecting() {
  return useContext(IsConnectingContext);
}

export function useConnectContext() {
  return useContext(ConnectContext);
}

export function useLogOutContext() {
  return useContext(LogOutContext);
}

export function useAddressContext() {
  return useContext(AddressContext);
}

export function Connection({ children }: { children: React.ReactNode }) {
  const [_web3Auth, _setWeb3Auth] = useState<any>();
  const [info, setInfo] = useState<any>("");
  const [address, setAddress] = useState<Address>("");
  const [isConnecting, setConnecting] = useState<boolean>(false);
  // time now

  const manageConection = async () => {
    const web3auth = new Web3Auth({
      clientId:
        "BAjh-6ukQ_Rs0vYzENzfVfCEtMDMLp6hqY7xH6XG0ShE5Infqr8TFVY5KOgTUoGeuNZubYf5v80TYHbGeeqy0uM", // get from https://dashboard.web3auth.io
      web3AuthNetwork: "sapphire_mainnet",

      chainConfig: {
        chainNamespace: "eip155",
        chainId: "0x1", // EVM chain's Chain ID
        rpcTarget: "https://rpc.ankr.com/eth", // EVM chain's RPC endpoint
        // Avoid using public rpcTarget in production.
        // Use services like Infura, Quicknode, Alchemy, Ankr etc.
        displayName: "Ethereum Mainnet", // EVM chain's Name
        blockExplorer: "https://etherscan.io/", // EVM chain's Blockexplorer
        ticker: "ETH", // EVM chain's Ticker
        tickerName: "Ethereum", // EVM chain's Ticker Name
      },
    });

    try {
      await web3auth.initModal();
      _setWeb3Auth(web3auth);
    } catch (e) {
      console.log(e);
    }

    setConnecting(true);
    const web3authProvider = await web3auth.connect();

    try {
      const web3 = new Web3(web3authProvider ?? _web3Auth);
      const userAccounts = await web3.eth.getAccounts();
      const getInfo = await web3auth.getUserInfo();
      console.log("Info", getInfo);
      setAddress(userAccounts[0]);
      setInfo(getInfo);
      console.log(getInfo);
      console.log("executing...");
    } catch (e) {
      console.log(e);
      setConnecting(false);
    }
    setConnecting(false);
  };

  const logout = async () => {
    console.log(1);
    try {
      _web3Auth.logout();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Web3AuthContext.Provider value={info}>
        <ConnectContext.Provider value={manageConection}>
          <IsConnectingContext.Provider value={isConnecting}>
            <AddressContext.Provider value={address}>
              <LogOutContext.Provider value={logout}>
                {children}
              </LogOutContext.Provider>
            </AddressContext.Provider>
          </IsConnectingContext.Provider>
        </ConnectContext.Provider>
      </Web3AuthContext.Provider>
    </>
  );
}
