"use client";

import { Lenguage } from "@/context/CheckoutIndex";
import { BlockchainData } from "@/context/conne";
import { Connection } from "@/context/connection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { fantom, polygon } from "wagmi/chains";

const wagmiConfig = createConfig({
  chains: [polygon],
  transports: {
    [polygon.id]: http(
      "https://quiet-black-tab.matic.quiknode.pro/2c71f78027112fbca1846a95a03d669a61dd2b31/"
    ),
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Connection>
          <BlockchainData>
            <Lenguage>{children}</Lenguage>
          </BlockchainData>
        </Connection>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
