import { z } from "zod";

const ethereumAddressSchema = z
  .string()
  .regex(/^0x[a-fA-F0-9]{40}$/, "Invalid Ethereum address");

export const tokenSchema = z.object({
  name: z.string(),
  symbol: z.string(),
  decimals: z.number(),
  address: ethereumAddressSchema,
  chainId: z.number(),
  isNative: z.boolean(),
  isLp: z.boolean(),
  icon: z.string(),
});

export type Token = z.infer<typeof tokenSchema>;

type Tokens = Record<string, Token[]>;

export const INTERNAL_TOKENS: Tokens = {
  polygon: [
    {
      name: "USDC",
      symbol: "USDC",
      decimals: 6,
      address: "0x1B6382DBDEa11d97f24495C9A90b7c88469134a4",
      chainId: 137,
      isNative: false,
      isLp: false,
      icon: "/tokens/usdc.svg",
    },
    {
      name: "testUSDC",
      symbol: "testUSDC",
      decimals: 18,
      address: "0xb1fcbae0f02a3d1883db9fed075220e4fd265383",
      chainId: 137,
      isNative: false,
      isLp: false,
      icon: "/tokens/usdc.svg",
    },
  ],
};
