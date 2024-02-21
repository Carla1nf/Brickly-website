"use client";

import {
  useAddressContext,
  useConnectContext,
  useIsConnecting,
  useIsLoadingContext,
} from "@/context/connection";
import { ShowWhenTrue } from "./conditionals";
import { SpinnerIcon } from "./icons";
import { useState } from "react";

export default function ConnectYourWallet() {
  const [ready, setReady] = useState<boolean>(false);
  const userAddress = useAddressContext();
  const connect = useConnectContext();
  const connecting = useIsConnecting();
  const loading = useIsLoadingContext();

  setTimeout(() => {
    setReady(true);
  }, 500);

  return (
    <ShowWhenTrue when={ready}>
      <ShowWhenTrue when={userAddress == "" && !loading}>
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
      <ShowWhenTrue when={loading}>
        <div className="w-full flex items-center justify-center">
          <SpinnerIcon className="w-8 animate-spin" />
        </div>
      </ShowWhenTrue>
    </ShowWhenTrue>
  );
}
