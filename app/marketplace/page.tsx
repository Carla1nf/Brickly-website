"use client";
import CustomButton from "@/components/ui/Button";
import { useEffect, useRef, useState } from "react";
import { GetData, getHotelData } from "@/services/api";
import { useDataHotelId } from "@/hooks/useHotelData";
import { ShowWhenFalse, ShowWhenTrue } from "@/components/conditionals";
import { useKYCData } from "@/hooks/useKYCData";
import {
  useAddressContext,
  useConnectContext,
  useConnection,
  useIsConnecting,
} from "@/context/connection";
import Link from "next/link";
import { fromDecimals } from "@/lib/erc20";
import { INTERNAL_TOKENS } from "@/lib/token";
import Skeletons from "@/components/ui/Skeleton";
import { SpinnerIcon } from "@/components/icons";
import CountdownTimer from "@/components/ui/CountDown";
import axios from "axios";
import Calculator from "@/components/calculator";

export default function InvestPage() {
  const [hotelOffer, setHotelOffer] = useState<GetData>();
  const [isKyc, setKyc] = useState<boolean>(false);
  const info = useConnection() as any;
  const [hotelBlockcahainData, setHotelBlockchainData] = useState<any>(null);

  const userAddress = useAddressContext();
  const connecting = useIsConnecting();
  const connect = useConnectContext();

  const GetKYC = async () => {
    const isKYC = await useKYCData(userAddress);
    setKyc(isKYC);
  };

  const GetBlockchainData = async () => {
    const hotel = await useDataHotelId(1);
    setHotelBlockchainData(hotel);
  };

  const hotelData = async () => {
    const data = (await getHotelData(1)) as GetData;
    setHotelOffer(data);
  };

  const wantedAmount = hotelBlockcahainData
    ? fromDecimals(hotelBlockcahainData[1], INTERNAL_TOKENS.polygon[1].decimals)
    : 0;
  const investedAmount = hotelBlockcahainData
    ? fromDecimals(hotelBlockcahainData[2], INTERNAL_TOKENS.polygon[1].decimals)
    : 0;
  const porcentageBuilt =
    hotelBlockcahainData && investedAmount > 0
      ? (investedAmount * 100) / wantedAmount
      : 0;

  console.log(porcentageBuilt, "%%");

  useEffect(() => {
    hotelData();
  }, []);

  GetKYC();
  GetBlockchainData();

  return (
    <>
      <div className="flex flex-col xl:-ml-10 -mt-10 md:px-20 px-12">
        <div className="max-w-9xl py-5   animate-enter-div">
          <div className="flex flex-col lg:flex-row justify-between md:items-start text-center  space-y-4 lg:space-y-0 lg:space-x-8">
            <div>
              <h1 className="text-4xl  font-semibold text-gray-900">
                Castelldefels Hotel - Habitación 1
              </h1>
              <div className="mt-1 text-base text-gray-600 flex md:justify-start justify-center gap-2">
                secured by Hotelier Services{" "}
                <img src="/home/Hotelier.svg" className="w-5" />{" "}
              </div>
            </div>
            <div className="flex space-x-5 h-12">
              <CustomButton
                content={"Compartir"}
                link="https://brick-ly.com/marketplace"
                copia={true}
              />
              <CustomButton content={"Estructura legal"} />
            </div>
          </div>
        </div>

        <div className="max-w-9xl py-5 flex gap-5  animate-enter-div">
          <img
            src="/hotel-page/Base.png"
            className="rounded-xl w-[600px] xl:w-[790px] shadow-xl"
          />

          <div className="flex flex-col gap-5">
            <img
              src="/hotel-page/Example1.png"
              width="4200"
              className="rounded-xl h-[250px] shadow-xl"
            />
            <img
              src="/hotel-page/Example0.png"
              width="4200"
              className="rounded-xl h-[250px] shadow-xl"
            />
          </div>
        </div>

        <div className="max-w-9xl py-5 flex md:flex-row flex-col gap-5 relative ">
          <div className="flex flex-col gap-10">
            <div className="xl:w-[790px] md:flex-row md:flex grid grid-cols-2  border md:h-24 rounded-xl border-brickly100">
              {[
                ["N° piso", hotelOffer?.Piso],
                ["Camas", hotelOffer?.Camas],
                ["Area", hotelOffer?.Metros],
                ["Unidad", hotelOffer?.Unidad],
                ["Localidad", hotelOffer?.Localidad],
              ].map((item, index) => (
                <div className="flex-col flex p-5 gap-2 px-8">
                  <div className="text-black font-semibold">{item[0]}</div>
                  <div className="flex gap-1">
                    {" "}
                    <img src="/home/icons/building.svg" width="20" />
                    <ShowWhenTrue when={item[1] == undefined}>
                      <Skeletons />
                    </ShowWhenTrue>
                    {item[1]}
                    <ShowWhenTrue when={index == 2}>m2</ShowWhenTrue>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <div className=" font-semibold text-xl">Sobre este hotel</div>
              <div className="xl:w-[780px]">
                Ubicado a pocos pasos de las doradas playas de Castelldefels,
                Hotel Castelldefels se erige como un refugio de serenidad en
                medio de la energía vibrante de esta encantadora localidad
                costera. Nuestras habitaciones, meticulosamente diseñadas,
                reflejan un estilo moderno y acogedor, brindando un espacio
                donde puedes relajarte.
              </div>
            </div>

            <div className="flex gap-5 p-5 h-full w-full bg-brickly50/70 rounded-xl border-2 border-brickly100 ">
              <div className="flex w-full flex-col gap-5">
                <div className="text-neutral-700 font-semibold">
                  Dueño del hotel
                </div>
                <div className="flex gap-3 ">
                  <img src="/home/Hotelier.svg" width="60" />
                  <div className="flex flex-col justify-center ">
                    <div className=" font-semibold ">CI</div>
                    <div className="text-sm text-neutral-500 min-w-min">
                      Castelldefels investment LLC
                    </div>
                  </div>
                  <div className="justify-self-end w-1/2 flex  justify-end gap-5 items-center">
                    <a href="https://hotelierservices.com/" target="_blank">
                      <div className="bg-black h-10 w-32 bg-brickly400/30 rounded flex justify-center text-brickly700 font-semibold items-center text-sm">
                        Página web
                      </div>
                    </a>
                    <a
                      href="https://hotelierservices.com/proyectos-e-inversiones/"
                      target="_blank"
                    >
                      <div className="bg-black h-10 w-32 bg-brickly400/30 rounded flex justify-center text-brickly700 font-semibold items-center text-sm">
                        Proyectos
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col  rounded-xl border-2 border-brickly100 w-full  ">
            <div className="flex-col flex p-5  gap-5 ">
              <div className="flex gap-3">
                <div className="flex-col flex w-full">
                  <div className=" text-sm text-gray-500">
                    Interes aproximado
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    {" "}
                    <div className=" font-extrabold text-3xl text-brickly400 flex gap-2">
                      <ShowWhenTrue when={hotelOffer?.Interes == undefined}>
                        <div className="flex items-center justify-between ">
                          <div className="h-2.5 bg-brickly400 rounded-full dark:bg-gray-700 w-12"></div>
                        </div>
                      </ShowWhenTrue>
                      <ShowWhenTrue when={hotelOffer?.Interes != undefined}>
                        {Number(hotelOffer?.Interes) / 100}%{" "}
                      </ShowWhenTrue>
                    </div>{" "}
                    / año
                  </div>
                </div>
                <div className="flex-col flex justify-center items-end w-full">
                  <div className=" text-sm text-gray-500">Tiempo restante</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className=" font-extrabold text-xl text-brickly400 flex gap-2">
                      <CountdownTimer />
                    </div>{" "}
                  </div>
                </div>
              </div>

              <ShowWhenTrue when={isKyc == undefined}>
                <div
                  className="h-20  border-b-2 border-b-brickly400/20"
                  onClick={() => (connect ? connect() : "")}
                >
                  <div className=" bg-brickly400 rounded-lg font-semibold hover:scale-[1.01] cursor-pointer transition-all py-3 text-center text-white shadow-xl flex items-center gap-3 justify-center">
                    Conecta tu cuenta
                    <ShowWhenTrue when={connecting}>
                      <SpinnerIcon className=" animate-spin-slow w-4 h-4" />
                    </ShowWhenTrue>
                  </div>
                </div>
              </ShowWhenTrue>

              <ShowWhenTrue when={!isKyc && isKyc != undefined}>
                <Link href="/user">
                  <div className="h-20  border-b-2 border-b-brickly400/20">
                    <div className=" bg-brickly400 rounded-lg font-semibold hover:scale-[1.01] cursor-pointer transition-all py-3 text-center text-white shadow-xl ">
                      Verifica tu identidad
                    </div>
                  </div>
                </Link>
              </ShowWhenTrue>

              <ShowWhenTrue when={isKyc}>
                <div className="h-20  border-b-2 border-b-brickly400/20">
                  <div className=" bg-brickly400 rounded-lg font-semibold hover:scale-[1.01] cursor-pointer transition-all py-3 text-center text-white shadow-xl ">
                    <a
                      className="w-full h-full"
                      target=" _blank"
                      href={`https://buy.stripe.com/5kA6sr2zJg7NfeM4gh?prefilled_email=${info.email}`}
                    >
                      Invertir ahora
                    </a>
                  </div>
                </div>
              </ShowWhenTrue>
            </div>

            <div className="flex-col flex p-5  gap-2 -mt-3 ">
              <div className=" text-sm text-gray-500">Recaudación total</div>
              <div className="flex flex-col gap-3">
                <div className="relative bg-gray-100 w-full h-4 rounded-lg">
                  <div
                    style={{
                      width: `${
                        hotelBlockcahainData ? `${porcentageBuilt}px` : ""
                      }`,
                    }}
                    className={`absolute  left-0 top-0 bottom-0  bg-gradient-to-r from-orange-400 to-pink-500 transition-all  ${
                      hotelBlockcahainData
                        ? `rounded-l-lg`
                        : "rounded-lg animate-pulse w-[100%]"
                    } `}
                  ></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold">
                    <div className="flex justify-end gap-2 ">
                      USD{" "}
                      {hotelBlockcahainData ? investedAmount : <Skeletons />}
                    </div>
                    <div className="flex gap-2">
                      USD {hotelBlockcahainData ? wantedAmount : <Skeletons />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col flex p-5  gap-1 ">
              <div className=" font-semibold">Solicita una reunión online</div>
              <div className="text-gray-500 text-sm ">
                Es gratis y sin obligación ━ puedes cancelarla cuando quieras
              </div>
              <a
                href="https://calendly.com/juanignacio-brick-ly/30min"
                target="_blank"
              >
                <div className=" bg-black/60 rounded-lg font-semibold hover:scale-[1.01] cursor-pointer transition-all py-3 text-center text-white mt-2">
                  Solicitar reunión
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-9xl py-5 flex   xl:flex-row flex-col xl:gap-12 md:gap-0 gap-12 ">
          <div className="md:h-96 md:text-start  w-full flex ">
            <div className="flex flex-col w-full gap-10">
              <div className=" font-semibold text-xl">Caracteristicas</div>
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex flex-col gap-5 w-full ">
                  {[
                    ["Precio minimo del token", "USD 100"],
                    ["Rentabilidad  anual", "8,32%"],
                    ["Inicio Renta", "30/09/2021"],
                    ["Rentabilidad total", "7536.24"],
                    ["Blockchain", "Polygon"],
                  ].map((item) => (
                    <div className="flex gap-2 items-end justify-end md:justify-start">
                      <div className="text-gray-500 w-full md:w-56">
                        {item[0]}
                      </div>{" "}
                      <div className=" font-semibold   justify-end flex items-end md:w-32 w-full  ">
                        {item[1]}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-5 ">
                  {[
                    ["Precio minimo del token", "USD 100"],
                    ["Rentabilidad anual", "8,32%"],
                    ["Inicio Renta", "30/09/2021"],
                    ["Rentabilidad total", "7536.24"],
                    ["Blockchain", "Polygon"],
                  ].map((item) => (
                    <div className="flex gap-2 items-end justify-end md:justify-start">
                      <div className="text-gray-500 w-full md:w-56">
                        {item[0]}
                      </div>{" "}
                      <div className=" font-semibold   justify-end flex items-end md:w-32 w-full  ">
                        {item[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Calculator interest={Number(hotelOffer?.Interes)} />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12771.544446561416!2d1.9676482302721963!3d41.269051592561986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sch!4v1708161891562!5m2!1ses-419!2sch"
          className="w-full border border-brickly400 rounded-xl shadow-lg"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
