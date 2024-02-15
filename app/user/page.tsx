"use client";
import { ShowWhenFalse, ShowWhenTrue } from "@/components/conditionals";
import ConnectYourWallet from "@/components/connectWallet";
import {
  useAddressContext,
  useConnection,
  useLogOutContext,
} from "@/context/connection";
import { useKYCData } from "@/hooks/useKYCData";
import { useState } from "react";

export default function UsuarioPage() {
  const [isKyc, setKyc] = useState<boolean>(false);

  const info = useConnection() as any;
  const logOut = useLogOutContext();
  const userAddress = useAddressContext();

  const GetKYC = async () => {
    const isKYC = await useKYCData(userAddress);
    setKyc(isKYC);
  };

  GetKYC();

  const handleLogOut = () => {
    if (logOut) {
      logOut();
      window.location.reload();
    }
  };
  return (
    <>
      <ShowWhenTrue when={userAddress != ""}>
        <div className="flex lg:flex-row flex-col gap-5 px-8 lg:px-0">
          <div className="bg-neutral-50 shadow lg:w-1/4 h-[500px] items-center justify-center rounded-lg flex flex-col">
            <div className=" h-96 flex  flex-col items-center gap-3 justify-center animate-enter-token">
              <img
                className="w-28 h-28 rounded-full "
                src={`${info?.profileImage}`}
              />
              <div className="flex flex-col items-center">
                <div className="font-bold">{info?.name}</div>
                <div className="text-sm text-gray-500">{info?.email}</div>
              </div>
            </div>
            <div className="h-full flex flex-col w-full px-6 text-gray-500  gap-3">
              <div className="w-full px-4 py-3 flex gap-5  border-l-4 border-brickly500  hover:bg-neutral-100 cursor-pointer ">
                <img src="/panel/id.svg" width="20" />
                Identidad
              </div>

              <a
                onClick={() => {
                  handleLogOut();
                }}
                href="/"
              >
                <div className="w-full px-4 py-3 flex gap-5  hover:bg-red-100 bg-red-100/80 font-semibold text-red-500 rounded-lg cursor-pointer">
                  <img src="/panel/exit.svg" width="20" />
                  Cerrar sesión
                </div>
              </a>
            </div>
          </div>

          <div className="bg-neutral-50 flex flex-col gap-5 shadow lg:w-3/4 h-[500px] rounded-lg p-8">
            <div className="flex flex-col h-3/4 border-b-2 border-neutral-200/80 gap-5">
              <div className="font-semibold text-xl">Identidad</div>
              <div className="flex md:flex-row flex-col md:gap-0 gap-4">
                <div className="flex gap-5 w-full animate-enter-token">
                  <div className="h-12 w-12 rounded-lg bg-orange-100"></div>
                  <div className="flex-col flex ">
                    <div className="font-semibold"> Verificación de e-mail</div>
                    <div className="text-sm text-gray-500">
                      {" "}
                      Requerido para abrir tu cuenta en Brickly
                    </div>
                  </div>
                </div>
                <div className="w-full flex md:justify-end pr-5">
                  <div className="h-10 w-36 bg-green-100 flex items-center justify-center rounded font-semibold text-green-700 border-green-200 border-2">
                    Completado
                  </div>
                </div>
              </div>

              <div className="flex md:flex-row flex-col md:gap-0 gap-4">
                <div className="flex gap-5 w-full animate-enter-token">
                  <div className="h-12 w-12 rounded-lg bg-pink-100"></div>
                  <div className="flex-col flex">
                    <div className="font-semibold"> Verificación identidad</div>
                    <div className="text-sm text-gray-500">
                      {" "}
                      Cumplimiento regulatorio{" "}
                    </div>
                  </div>
                </div>
                <ShowWhenFalse when={isKyc && userAddress != ""}>
                  <div className="flex flex-col gap-1">
                    <div className="w-full flex md:justify-end pr-5">
                      <a
                        target="_blank"
                        href={`https://signup.metamap.com/?merchantToken=65c66dbf9040f8001d912fe8&flowId=65c66dbf9040f8001d912fe7&metadata={"key":"${userAddress}"}`}
                      >
                        <div className="h-10 w-36 bg-black flex items-center justify-center rounded font-semibold text-white cursor-pointer">
                          Verificate
                        </div>{" "}
                      </a>
                    </div>
                    <div className=" font-light text-neutral-500  text-xs">
                      {" "}
                      Puede tardar hasta 24hs.
                    </div>
                  </div>
                </ShowWhenFalse>

                <ShowWhenTrue when={isKyc}>
                  <div className="w-full flex md:justify-end pr-5">
                    <div className="h-10 w-36 bg-green-100 flex items-center justify-center rounded font-semibold text-green-700">
                      Completado
                    </div>
                  </div>
                </ShowWhenTrue>
              </div>
            </div>
            <div className="text-gray-400">
              Los datos requeridos se utilizarán únicamente para garantizar la
              seguridad y el cumplimiento de las leyes y regulaciones.{" "}
            </div>
          </div>
        </div>
      </ShowWhenTrue>

      <ConnectYourWallet />
    </>
  );
}
