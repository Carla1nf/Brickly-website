import { Address, formatUnits, getAddress } from "viem";

/**
 * We read the symbol as name
 * @param param0
 * @returns
 */

export const fromDecimals = (amount: bigint, decimals: number) => {
  return Number(formatUnits(amount, decimals));
};

/**
 * convert a number into the bigInt version with decimal places
 * @param amount
 * @param decimals
 * @returns
 */
export const toDecimals = (amount: number, decimals: number) => {
  return BigInt(amount * 10 ** decimals);
};
