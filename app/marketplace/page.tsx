"use client";
import CustomButton from "@/components/ui/Button";
import { useState } from "react";
import CheckoutPage from "./checkout";
import DetailsBeforeCheckout from "./details";

export default function InvestPage() {
  const [isChecking, setIsChecking] = useState(false);
  const handleChecking = (status: boolean) => {
    window.scrollTo(0, 0);
    setIsChecking(status);
  };
  return (
    <>
      {isChecking ? (
        <DetailsBeforeCheckout />
      ) : (
        <div className="flex flex-col xl:-ml-10 -mt-10">
          <div className="max-w-9xl py-5 px-20 animate-enter-div">
            <div className="flex flex-col lg:flex-row justify-between items-start  space-y-4 lg:space-y-0 lg:space-x-8 ">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Castelldefels Hotel - Habitación 1
                </h1>
                <div className="mt-1 text-base text-gray-600 flex gap-2">
                  secured by Hotelier Services{" "}
                  <img src="/home/Hotelier.svg" className="w-5" />{" "}
                </div>
              </div>
              <div className="flex space-x-5 px-10">
                <CustomButton content={"Compartir"} />
                <CustomButton content={"Estructura legal"} />
              </div>
            </div>
          </div>

          <div className="max-w-9xl py-5 px-20 flex gap-5  animate-enter-div">
            <img
              src="/hotel-page/Base.png"
              className="rounded-xl w-[600px] xl:w-[790px]"
            />

            <div className="flex flex-col gap-5">
              <img
                src="/hotel-page/Example1.png"
                width="4200"
                className="rounded-xl h-[250px]"
              />
              <img
                src="/hotel-page/Example1.png"
                width="4200"
                className="rounded-xl h-[250px]"
              />
            </div>
          </div>

          <div className="max-w-9xl py-5 px-20 flex gap-5 relative ">
            <div className="flex flex-col gap-10">
              <div className="xl:w-[790px] border h-24 rounded-xl border-brickly100 flex">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div className="flex-col flex p-5 gap-2 px-8">
                    <div>Area</div>
                    <div className="flex gap-1">
                      {" "}
                      <img
                        src="/home/icons/building.svg"
                        width="20"
                      /> 200m“{" "}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <div className="font-bold text-xl">About this hotel</div>
                <div className="xl:w-[780px]">
                  GTHolaSOLorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
              </div>

              <div className="flex p-5 h-full w-full bg-brickly50/70 rounded-xl border-2 border-brickly100 ">
                <div className="flex w-full flex-col gap-5">
                  <div className="text-neutral-700">Dueño del hotel</div>
                  <div className="flex gap-3">
                    <img src="/home/Hotelier.svg" width="60" />
                    <div className="flex flex-col justify-center ">
                      <div className="font-bold ">Hotelier Services</div>
                      <div className="text-sm text-neutral-500 min-w-min">
                        Hotelier Services LLC
                      </div>
                    </div>
                    <div className="justify-self-end w-7/12 flex justify-end gap-5 items-center">
                      <div className="bg-black h-10 w-32 bg-brickly400/30 rounded flex justify-center text-brickly700 font-semibold items-center text-sm">
                        Página web
                      </div>
                      <div className="bg-black h-10 w-32 bg-brickly400/30 rounded flex justify-center text-brickly700 font-semibold items-center text-sm">
                        Proyectos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col  rounded-xl border-2 border-brickly100 w-full  ">
              <div className="flex-col flex p-5  gap-5 ">
                <div className="flex-col flex ">
                  <div className=" text-sm text-gray-500">Inversión minima</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    {" "}
                    <div className=" font-extrabold text-2xl text-brickly400">
                      100u$d{" "}
                    </div>{" "}
                    / persona
                  </div>
                </div>
                <div className="h-20  border-b-2 border-b-brickly400/20">
                  <div
                    onClick={() => handleChecking(true)}
                    className=" bg-brickly400 rounded-lg font-semibold hover:scale-[1.01] cursor-pointer transition-all py-3 text-center text-white "
                  >
                    Invertir ahora
                  </div>
                </div>
              </div>

              <div className="flex-col flex p-5  gap-2 -mt-3 ">
                <div className=" text-sm text-gray-500">Recaudación total</div>
                <div className="flex flex-col gap-3">
                  <div className="relative bg-gray-100 w-full h-4 rounded-lg">
                    <div className="absolute  left-0 top-0 bottom-0 w-[40%] bg-gradient-to-r from-orange-400 to-pink-500 rounded-l-lg"></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm  font-bold">
                      <div className="flex justify-end w-[40%]">4.000U$D</div>
                      <div>10.000U$D</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col flex p-5  gap-1 ">
                <div className="font-bold ">Solicita una reunión online</div>
                <div className="text-gray-500 text-sm ">
                  Es gratis y sin obligación ━ puedes cancelarla cuando quieras
                </div>
                <div className=" bg-black/60 rounded-lg font-semibold hover:scale-[1.01] cursor-pointer transition-all py-3 text-center text-white mt-2">
                  Solicitar reunión
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-9xl py-5 px-20 flex gap-12 ">
            <div className="h-96  w-full flex">
              <div className="flex flex-col gap-10">
                <div className="font-bold text-xl">Caracteristicas</div>
                <div className="flex gap-10">
                  <div className="flex flex-col gap-5 ">
                    {[
                      ["Precio minimo del token", "100U$D"],
                      ["Rentabilidad  anual", "8,32%"],
                      ["Inicio Renta", "30/09/2021"],
                      ["Rentabilidad total", "7536.24"],
                      ["Blockchain", "Polygon"],
                    ].map((item) => (
                      <div className="flex gap-2 items-end">
                        <div className="text-gray-500 w-56">{item[0]}</div>{" "}
                        <div className="font-bold  justify-end flex items-end w-32">
                          {item[1]}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-5 ">
                    {[
                      ["Precio minimo del token", "100U$D"],
                      ["Rentabilidad anual", "8,32%"],
                      ["Inicio Renta", "30/09/2021"],
                      ["Rentabilidad total", "7536.24"],
                      ["Blockchain", "Polygon"],
                    ].map((item) => (
                      <div className="flex gap-2 items-end">
                        <div className="text-gray-500 w-56 text-sm">
                          {item[0]}
                        </div>{" "}
                        <div className="font-bold  justify-end flex items-end w-32">
                          {item[1]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-brickly100 w-full rounded-xl h-[300px] p-5 flex flex-col gap-5">
              {" "}
              <div className=" text-sm text-gray-500">Calculadora retorno</div>
              <div className="flex flex-col gap-4 font-semibold">
                Inversión U$D:
                <input
                  className="border px-4 py-1 bg-brickly100/50 font-semibold text-lg border-brickly100 rounded"
                  placeholder="U$D"
                  min={0}
                  defaultValue={0}
                  type="number"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-end items-center">
                  <div className="text-sm w-full">Ganancia total (5 años)</div>
                  <div className="text-lg text-green-900 font-bold px-2">
                    300U$D
                  </div>
                </div>

                <div className="flex justify-end items-center">
                  <div className="text-sm w-full">Ganancia anual</div>
                  <div className="text-lg text-green-900 font-bold px-2">
                    60U$D
                  </div>
                </div>

                <div className="flex justify-end items-center">
                  <div className="text-sm w-full">
                    Monto final (Ganancia + Inversión)
                  </div>
                  <div className="text-base text-green-900 font-bold px-2">
                    600U$D
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
