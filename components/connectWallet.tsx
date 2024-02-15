"use client";

import {
  useAddressContext,
  useConnectContext,
  useIsConnecting,
} from "@/context/connection";
import { ShowWhenTrue } from "./conditionals";
import { SpinnerIcon } from "./icons";

export default function ConnectYourWallet() {
  const userAddress = useAddressContext();
  const connect = useConnectContext();
  const connecting = useIsConnecting();

  return (
    <ShowWhenTrue when={userAddress == ""}>
      <div className="w-full text-center flex flex-col justify-center items-center">
        <div className="font-semibold text-2xl">Conectate a tu cuenta</div>
        <div className=" text-lg text-gray-500">
          Conectate para acceder a tu panel y hacerle el seguimiento a tus
          inversiones
        </div>
        <div className="w-auto mt-5">
          <div className="h-20 " onClick={() => (connect ? connect() : "")}>
            <div className=" bg-brickly400 rounded-lg font-semibold hover:scale-[1.01] cursor-pointer transition-all py-3 px-3 text-center text-white shadow-xl flex items-center gap-3 justify-center">
              Conecta tu cuenta
              <ShowWhenTrue when={connecting}>
                <SpinnerIcon className=" animate-spin-slow w-4 h-4" />
              </ShowWhenTrue>
            </div>
          </div>
        </div>
      </div>
    </ShowWhenTrue>
  );
}