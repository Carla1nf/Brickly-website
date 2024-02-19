"use client";
import { ShowWhenTrue } from "@/components/conditionals";
import ConnectYourWallet from "@/components/connectWallet";
import { useAddressContext, useIsLoadingContext } from "@/context/connection";
import { translateText } from "@/lib/translate";

export default function WithdrawPage() {
  const userAddress = useAddressContext();
  const loading = useIsLoadingContext();

  return (
    <>
      <ShowWhenTrue when={userAddress != "" && !loading}>
        <div className="flex flex-col">
          <div className="flex items-center border-b-2 border-b-brickly400/10 py-2">
            <div className="font-semibold text-3xl w-full">
              {translateText({ text: "Retira tu dinero" })}
            </div>
            <div className=" text-gray-400 text-xl w-full justify-end px-6 flex">
              {translateText({ text: "Dinero disponible:" })}
              <span className="text-brickly400 font-bold ml-2">
                {(0).toFixed(2)} USD
              </span>
            </div>
          </div>
          <div className="py-5 flex gap-5">
            <div className="bg-neutral-100 shadow hover:scale-[1.03] transition-all cursor-pointer rounded px-3 py-2 flex gap-7 relative animate-enter-div">
              <ShowWhenTrue when={true}>
                <div className="absolute bg-brickly400/90 top-6 text-white font-bold w-full -ml-3 text-center py-3">
                  {translateText({ text: "No tienes fondos disponibles" })}
                </div>
              </ShowWhenTrue>
              <div className="flex flex-col gap-1">
                <div className="font-semibold text-xl">
                  {translateText({ text: "Criptomonedas" })}
                </div>
                <div className=" text-gray-400 text-sm">
                  Demora de retiro: {"< 1 min"}
                </div>

                <div className=" text-gray-400 text-sm">Comisión: 0.03 USD</div>
              </div>

              <div>
                <img src="/payments/usdc.jpg" width={85} />
              </div>
            </div>
            <div className="bg-neutral-100 shadow hover:scale-[1.03] transition-all cursor-pointer rounded px-3 py-2 flex gap-7 relative animate-enter-div">
              <ShowWhenTrue when={true}>
                <div className="absolute  bg-brickly400/90 top-6 text-white font-bold w-full -ml-3 text-center py-3">
                  {translateText({ text: "No tienes fondos disponibles" })}
                </div>
              </ShowWhenTrue>
              <div className="flex flex-col gap-1">
                <div className="font-semibold text-xl">
                  {translateText({ text: "Transferencia" })}
                </div>

                <div className=" text-gray-400 text-sm">
                  Demora de retiro: {"1 dia habil"}
                </div>

                <div className=" text-gray-400 text-sm">Comisión: 3 USD</div>
              </div>

              <div>
                <img src="/payments/bank.jpg" width={85} />
              </div>
            </div>
          </div>
        </div>
      </ShowWhenTrue>
      <ConnectYourWallet />
    </>
  );
}
