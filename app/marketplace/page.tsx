"use client";
import CustomButton from "@/components/ui/Button";
import { useEffect, useRef, useState } from "react";
import { GetData, getHotelData } from "@/services/api";
import { ShowWhenFalse, ShowWhenTrue } from "@/components/conditionals";
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
import Calculator from "@/components/calculator";
import { useHotelBlockchainData, useKYC } from "@/context/conne";
import { translateText } from "@/lib/translate";

export default function InvestPage() {
  const [hotelOffer, setHotelOffer] = useState<GetData>();
  const [galeriaAbierta, setGaleriaAbierta] = useState<boolean>(false);
  const [indexFoto, setIndexFoto] = useState<number>(1);
  const imagesLinks = [
    "https://hotel-1-fotos.s3.amazonaws.com/Foto1-min.png",
    "https://hotel-1-fotos.s3.amazonaws.com/Paisaje2-min.png",
    "https://hotel-1-fotos.s3.amazonaws.com/Base-min.png",
    "https://hotel-1-fotos.s3.amazonaws.com/Example1-min.png",
    "https://hotel-1-fotos.s3.amazonaws.com/Foto3.png",
    "https://hotel-1-fotos.s3.amazonaws.com/Foto2.png",
    "https://hotel-1-fotos.s3.amazonaws.com/Hotel4.png",
  ];
  const info = useConnection() as any;

  const connecting = useIsConnecting();
  const connect = useConnectContext();
  const isKyc = useKYC();
  const hotelBlockcahainData = useHotelBlockchainData() as any;

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

  useEffect(() => {
    hotelData();
  }, []);

  return (
    <>
      <ShowWhenTrue when={false}>
        <div className="absolute bg-black/40 top-0 left-0 right-0 bottom-0 z-10">
          <div className="w-full flex items-center justify-center h-screen fixed top-0">
            <div className="bg-white xl:w-[1100px] overflow-hidden w-[80%] h-auto  rounded animate-enter-token shadow-lg">
              <div className="px-3">
                <img
                  src="/universal/back.svg"
                  width={25}
                  className="py-3  cursor-pointer hover:scale-[0.95]"
                  onClick={() => setGaleriaAbierta(false)}
                />
              </div>

              <div className="flex gap-5 w-full h-[550px] flex-col px-3">
                <div className=" font-medium text-neutral-900 text-xl px-3">
                  Galeria de fotos - Castelldefels Hotel
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-center  relative">
                    {imagesLinks.map((item, index) => {
                      return (
                        <img
                          onClick={() => setIndexFoto(index)}
                          src={item}
                          className={`${
                            indexFoto == index
                              ? "shadow-xl rounded-xl border-4 border-brickly400/40 absolute md:top-2  top-12  z-10  transition-all duration-300 w-[600px] md:h-[450px] h-[300px]"
                              : `${
                                  index + 1 == indexFoto
                                    ? "shadow-xl rounded-xl border-4 border-brickly400/40 opacity-80 -rotate-3 absolute -ml-[50%] top-20 hover:scale-[1.04]  transition-all duration-300 cursor-pointer w-[500px] h-[300px]"
                                    : `${
                                        index - 1 == indexFoto
                                          ? "shadow-xl rounded-xl border-4 border-brickly400/40 opacity-80 rotate-3 absolute top-20 ml-[50%] hover:scale-[1.04]  transition-all duration-300 cursor-pointer w-[500px] h-[300px]"
                                          : " hidden"
                                      }`
                                }`
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full h-20">
                <img
                  src="/universal/back.svg"
                  width={25}
                  onClick={() =>
                    setIndexFoto(
                      indexFoto == 0 ? imagesLinks.length - 1 : indexFoto - 1
                    )
                  }
                  className="py-3 cursor-pointer hover:scale-[1.2] transition-all fill-white"
                />
                <img
                  src="/universal/back.svg"
                  width={25}
                  onClick={() =>
                    setIndexFoto(
                      indexFoto == imagesLinks.length - 1 ? 0 : indexFoto + 1
                    )
                  }
                  className="py-3 cursor-pointer hover:scale-[1.2]  transition-all rotate-180"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </ShowWhenTrue>
      <div className="flex flex-col xl:-ml-10 -mt-10 md:px-20 px-12">
        <div className="max-w-9xl py-5   animate-enter-div">
          <div className="flex flex-col lg:flex-row justify-between md:items-start text-center  space-y-4 lg:space-y-0 lg:space-x-8">
            <div>
              <h1 className="text-3xl  font-semibold text-gray-900">
                {translateText({
                  text: "Castelldefels, Barcelona Hotel - 1º Habitación",
                })}
              </h1>
              <div className="mt-1 text-base text-gray-600 flex md:justify-start justify-center gap-2">
                secured by Hotelier Services{" "}
                <img src="/home/Hotelier.svg" className="w-5" />{" "}
              </div>
            </div>
            <div className="flex space-x-5 h-12">
              <CustomButton
                content={"Mas información"}
                link="https://brickly.gitbook.io/brick-ly/"
              />
              <CustomButton
                content={"Estructura legal"}
                link="https://brickly.gitbook.io/brick-ly/guia-de-usuario/legal-structure"
              />
            </div>
          </div>
        </div>

        <div className="items-center py-5 flex gap-5  animate-enter-div">
          <img
            onClick={() => setGaleriaAbierta(true)}
            src="https://hotel-1-fotos.s3.amazonaws.com/Foto1-min.png"
            className="rounded-xl w-[600px] md:h-auto h-96 xl:w-[790px] shadow-xl hover:scale-[0.98] transition-all"
          />

          <div className="md:flex hidden flex-col gap-5 ">
            <img
              onClick={() => setGaleriaAbierta(true)}
              src="https://hotel-1-fotos.s3.amazonaws.com/Foto2.png"
              style={{ width: "420px" }}
              className="rounded-xl h-[250px] shadow-xl hover:scale-[0.98] transition-all"
            />
            <img
              onClick={() => setGaleriaAbierta(true)}
              src="https://hotel-1-fotos.s3.amazonaws.com/Foto3.png"
              style={{ width: "420px" }}
              className="rounded-xl h-[250px] shadow-xl hover:scale-[0.98] transition-all"
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
                  <div className="text-black font-semibold">
                    {translateText({ text: item[0] as string })}
                  </div>
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
              <div className=" font-semibold text-xl">
                {translateText({ text: "Sobre este hotel" })}
              </div>
              <div className="xl:w-[780px]">
                {translateText({
                  text: `Ubicado a pocos pasos de las doradas playas de Castelldefels, Hotel Castelldefels se erige como un refugio de serenidad en medio de la energía vibrante de esta encantadora localidad costera. Nuestras habitaciones, meticulosamente diseñadas, reflejan un estilo moderno y acogedor, brindando un espacio donde puedes relajarte.`,
                })}
              </div>
            </div>

            <div className="flex gap-5 p-5 h-full w-full bg-brickly50/70 rounded-xl border-2 border-brickly100 ">
              <div className="flex w-full flex-col gap-5">
                <div className="text-neutral-700 font-semibold">
                  {translateText({ text: "Dueño del hotel" })}
                </div>
                <div className="flex gap-3 md:flex-row flex-col">
                  <div className="flex gap-2">
                    <img src="/home/Hotelier.svg" width="60" />
                    <div className="flex flex-col justify-center ">
                      <div className=" font-semibold ">CI</div>
                      <div className="text-sm text-neutral-500 min-w-min">
                        Castelldefels investment LLC
                      </div>
                    </div>
                  </div>
                  <div className="justify-self-end md:w-1/2 flex  md:justify-end gap-5 items-center">
                    <a href="https://hotelierservices.com/" target="_blank">
                      <div className="bg-black h-10 w-32 bg-brickly400/30 rounded flex justify-center text-brickly700 font-semibold items-center text-sm">
                        Web
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
                    {translateText({ text: "Interes estimado" })}
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
                  <div className=" text-sm text-gray-500">
                    {translateText({ text: "Tiempo restante" })}
                  </div>
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
                    {translateText({ text: "Conecta tu cuenta" })}

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
                      {translateText({ text: "Verifica tu identidad" })}
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
                      href={`https://buy.stripe.com/test_bIY8A25ZbgUO8co8ww`}
                    >
                      {translateText({ text: "Invertir ahora" })}
                    </a>
                  </div>
                </div>
              </ShowWhenTrue>
            </div>

            <div className="flex-col flex p-5  gap-2 -mt-3 ">
              <div className=" text-sm text-gray-500">
                {translateText({ text: "Recaudación total" })}
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative bg-gray-100 w-full h-4 rounded-lg">
                  <div
                    style={{
                      width: `${
                        hotelBlockcahainData ? `${porcentageBuilt}%` : ""
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
                    <div
                      style={{
                        width: `${
                          hotelBlockcahainData ? `${porcentageBuilt}%` : ""
                        }`,
                      }}
                      className="flex justify-end gap-2 "
                    >
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
              <div className=" font-semibold">
                {translateText({ text: "Solicita una reunión online" })}
              </div>
              <div className="text-gray-500 text-sm ">
                {translateText({
                  text: "Es gratis y sin obligación ━ puedes cancelarla cuando quieras",
                })}
              </div>
              <a
                href="https://calendly.com/gonzalo-80/30min?back=1&month=2024-04"
                target="_blank"
              >
                <div className=" bg-black/60 rounded-lg font-semibold hover:scale-[1.01] cursor-pointer transition-all py-3 text-center text-white mt-2">
                  {translateText({ text: "Solicitar reunión" })}
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-9xl py-5 flex   xl:flex-row flex-col xl:gap-12 md:gap-0 gap-12 ">
          <div className="md:h-96 md:text-start  w-full flex ">
            <div className="flex flex-col w-full gap-10">
              <div className=" font-semibold text-xl">
                {translateText({ text: "Caracteristicas" })}
              </div>
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex flex-col gap-5 w-full ">
                  {[
                    ["Inversión minima", "USD 100"],
                    ["Rentabilidad anual", "8,32%"],
                    ["Inicio Renta", "15/04/2024"],
                    ["Fin Renta", "04/2029"],
                    ["Blockchain", "Polygon"],
                  ].map((item) => (
                    <div className="flex gap-2 items-end justify-end md:justify-start">
                      <div className="text-gray-500 w-full md:w-56">
                        {translateText({ text: item[0] })}
                      </div>{" "}
                      <div className=" font-semibold   justify-end flex items-end md:w-32 w-full  ">
                        {item[1]}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-5 ">
                  {[
                    ["Dueño del hotel", "Cast. Inv. LLC"],
                    ["(%) Total estimado", "41,6%"],
                    ["Periodo total", "60 meses"],
                    ["Rentabilidad total", "16640 USD"],
                    ["Comisión Brickly", "2%"],
                  ].map((item) => (
                    <div className="flex gap-2 items-end justify-end md:justify-start">
                      <div className="text-gray-500 w-full md:min-w-56">
                        {translateText({ text: item[0] })}
                      </div>{" "}
                      <div className=" font-semibold   justify-end flex items-end md:min-w-32 w-full  ">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5602.924494730809!2d1.9661319764492595!3d41.266023874970905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a482a107090b37%3A0xddd6243ef740bed!2sAv.%20dels%20Banys%2C%2027%2C%2008860%20Castelldefels%2C%20Barcelona%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sch!4v1708350155699!5m2!1ses-419!2sch"
          className="w-full border border-brickly400 rounded-xl shadow-lg"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
