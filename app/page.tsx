"use client";
import CustomButton from "@/components/ui/Button";
import CountdownTimer from "@/components/ui/CountDown";
import { translateText } from "@/lib/translate";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React, { useEffect } from "react";
import Form from "@/components/form";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-radial font-sans w-screen bg-[radial-gradient(50.40%_43.55%_at_50.66%_46.29%,rgba(255,98,28,0.2)_10%,rgba(255,255,255,1)_100%)] md:h-[70vh] h-auto">
        <div className="md:h-[70vh] animate-enter-div ">
          <div className="xl:ml-16 flex-col md:flex md:flex-row  items-center">
            <div className="space-y-5 grid items-center text-center sm:text-start justify-center md:justify-start md:items-start w-full">
              <div>
                <div className="sm:text-5xl min-[350px]:text-5xl text-4xl font-semibold">
                  {translateText({ text: "Diversifica tu portafolio" })}
                </div>
                <div className="font-semibold h-14 text-transparent sm:text-5xl min-[350px]:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 ">
                  {translateText({ text: "invirtiendo en hoteles" })}
                </div>
                <p className="sm:text-lg mt-3 md:w-[90%] text-xs font-light text-gray-600 ">
                  {translateText({
                    text: "Brickly es la forma más rentable y facil de invertir en propiedad de renta turistica.",
                  })}
                </p>
              </div>

              <div className="flex sm:flex-row flex-col sm:space-x-4 sm:gap-0 md:items-start items-center gap-5 max-w-92">
                <Link href={"marketplace"} shallow>
                  <CustomButton content={`Inverti ahora`} />
                </Link>

                <Button
                  size="3"
                  color="tomato"
                  variant="soft"
                  className="bg-black/0 font-semibold rounded-lg transition-all text-black h-10 cursor-pointer"
                >
                  <Link href="https://brickly.gitbook.io/brick-ly/guia-de-usuario/como-usar-la-web">
                    {translateText({
                      text: "Descubre cómo arrancar",
                    })}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex lg:w-full lg:px-16 min-[1320px]:px-52 min-[1100px]:px-32 space-x-4 relative scale-[0.85] lg:scale-[1]   justify-center  lg:justify-end">
              <div className="rounded-full shadow-2xl bg-gradient-to-br relative from-orange-400/40 to-pink-400/40  h-96 w-96">
                <div className="h-96 w-96 rounded-full py-10 overflow-hidden">
                  <img
                    src="https://hotel-1-fotos.s3.amazonaws.com/Test-min.png"
                    className="scale-[1.1]"
                  />
                </div>

                <div className="w-44 rounded flex gap-3 items-center justify-center animate-bounce-1 delay-500 bg-white shadow-2xl border-black absolute top-36 -left-10 h-16">
                  <div className="bg-orange-400 h-11 w-12 rounded grid items-center justify-center">
                    <img src="/home/icons/room.svg" className="w-[35px]" />
                  </div>
                  <div className="flex flex-col">
                    <div className=" font-semibold text-xl">+15</div>
                    <div className="text-gray-500 -mt-1 w-24">
                      {translateText({
                        text: "Habitaciones",
                      })}{" "}
                    </div>
                  </div>
                </div>

                <div className="w-48 rounded flex gap-3 items-center justify-center   shadow-2xl bg-white border-black absolute bottom-6 -right-10 h-16 animate-bounce-1">
                  <div className="bg-pink-500 h-11 w-12 rounded grid items-center justify-center">
                    <img src="/home/icons/office.svg" className="w-[35px]" />
                  </div>
                  <div className="flex flex-col">
                    <div className=" font-semibold text-xl">+4.1M</div>
                    <div className="text-gray-500 -mt-1 w-[115px]">
                      {translateText({
                        text: "Valor en activos",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  mx-auto px-20 gap-10">
        <div className="font-semibold sm:text-3xl min-[350px]:text-2xl text-xl text-center sm:text-start ">
          {translateText({
            text: "Plataforma #1 de tokenización hotelera",
          })}
        </div>
        <div className="flex sm:flex-row flex-col sm:text-start text-center items-center w-full justify-between">
          {[
            [
              `${translateText({
                text: "Internacional",
              })}`,
              "world",
              "bg-orange-50",
              `${translateText({
                text: "Inversión sin fronteras. Opera con hoteles en todo el mundo desde cualquier parte. Accedé a un mercado hotelero global.",
              })}`,
            ],
            [
              `${translateText({
                text: "Seguridad",
              })}`,
              "secure",
              "bg-green-50",
              `${translateText({
                text: "Contamos con un equipo legal especializado y un sistema de blockchain para garantizar la transparencia de tus operaciones.",
              })}`,
            ],
            [
              `${translateText({
                text: "Rapidez",
              })}`,
              "shield",
              "bg-violet-50",
              `${translateText({
                text: "Mayor accesibilidad, sin burocracia, ni complicaciones. En no más de un minuto, ya puedes convertirte en un inversor global de hoteles.",
              })}`,
            ],
            [
              `${translateText({
                text: "Solidez",
              })}`,
              "home",
              "bg-pink-50",
              `${translateText({
                text: "Garantizamos solidez jurídica y eficacia en cada inversión por medio de un sistema de tokenización respaldado por una LLC en EE. UU.",
              })}`,
            ],
          ].map((item) => {
            return (
              <div className="h-72 w-64 bg-gradient-to-tr flex flex-col items-center sm:items-start gap-3">
                <div
                  className={`p-4 h-20 w-20 rounded-full shadow-lg ${item[2]}`}
                >
                  <img
                    src={`/home/icons/${item[1]}.svg`}
                    height="200"
                    width="100"
                  />
                </div>
                <div className="p-2  font-semibold text-lg">{item[0]}</div>
                <div className="p-2 text-gray-400 text-sm font-normal">
                  {item[3]}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 mt-20 items-center gap-16  "
        id="registrarse"
      >
        <div className="md:p-8 justify-self-center relative ">
          <img
            className="shadow-2xl max-h-[400px] h-[90vw] rounded w-[90vw] max-w-[440px]"
            src="https://hotel-1-fotos.s3.amazonaws.com/Base-min.png"
          />
          <div className="bg-neutral-500/60 absolute md:bottom-14 md:left-16 bottom-0 right-0  left-0 sm:h-20  lg:w-[32vw] md:max-w-[370px] rounded backdrop-blur-md flex flex-row  text-white ">
            <div className="flex flex-col p-3 sm:scale-100 scale-[0.90]">
              {" "}
              <div className="text-gray-100">
                {translateText({
                  text: "Inversión minima",
                })}
              </div>{" "}
              <div className=" font-semibold flex items-end sm:h-20 content-end gap-2 ">
                100 U$D
              </div>{" "}
            </div>

            <div
              className="flex ml-10  flex-col p-3 xl:ml-15
                        6 sm:ml-10 gap-1 sm:gap-3 sm:scale-100 scale-[0.90]"
            >
              {" "}
              <div className="text-gray-100">
                {" "}
                {translateText({
                  text: "Termina en",
                })}
              </div>{" "}
              <div className=" font-semibold flex items-end sm:content-end  text-sm ">
                <CountdownTimer />{" "}
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 max-w-[460px] lg:justify-self-start text-center items-center  lg:items-start justify-self-center lg:text-start">
          <>
            <div className=" font-semibold  sm:text-3xl min-[350px]:text-2xl text-xl">
              {translateText({
                text: "Barcelona Castelldefels - Hotel",
              })}
            </div>
            <div className="text-gray-400 sm:text-base text-sm w-[85vw] sm:w-auto">
              {translateText({
                text: "¡Suscríbete para información exclusiva sobre inversiones con Brickly y asegura tu lugar en la primera ronda al pre-registrarte!",
              })}
            </div>
            <div className="flex gap-4 items-end">
              {" "}
              <div className="text-green-500  font-semibold text-2xl ">
                8,32%
              </div>{" "}
              <div className="text-gray-500">
                {translateText({
                  text: "Retorno anual estimado",
                })}
              </div>{" "}
            </div>
            <div className="flex gap-5 animate-enter-div">
              <div className="bg-green-600 h-12 w-12 rounded-full"></div>
              <div className="flex flex-col">
                <div className="text-gray-500">
                  {translateText({
                    text: "Monto a recaudar",
                  })}
                </div>
                <div className="text-black  font-semibold text-lg -mt-1">
                  200,000 U$D
                </div>
                <div className="mt-3 sm:w-[340px] bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className=" bg-gradient-to-r from-orange-400 to-pink-500 text-xs font-medium text-blue-100 text-center leading-none rounded-full w-[0%] h-2"></div>
                </div>
              </div>
            </div>
            <div className="sm:flex-row flex-col flex mt-3 gap-3">
              <a href="marketplace">
                <Button
                  size="3"
                  color="tomato"
                  variant="soft"
                  className="bg-black  hover:bg-black/90 font-semibold rounded-lg text-white h-10  cursor-pointer transition-all w-40"
                >
                  {translateText({
                    text: "Inverti ahora",
                  })}{" "}
                </Button>
              </a>

              <Link
                href="https://brickly.gitbook.io/brick-ly/guia-de-usuario/evaluacion-de-inmuebles"
                target="_blank"
              >
                <Button
                  size="3"
                  color="tomato"
                  variant="soft"
                  className="bg-black/0  font-semibold rounded-lg text-black h-10 cursor-pointer transition-all w-52"
                >
                  {translateText({
                    text: "Mas información",
                  })}{" "}
                </Button>
              </Link>
            </div>
          </>
        </div>
      </div>

      <div className="flex flex-col xl:p-5 xl:ml-16 items-center lg:items-start  mt-16 gap-10 text-center sm:text-start">
        <div className=" font-semibold sm:text-3xl min-[350px]:text-2xl text-xl  ">
          {translateText({
            text: "Beneficios de tokenización",
          })}{" "}
        </div>
        <div className="-mt-8 text-gray-500 text-sm sm:text-base">
          {translateText({
            text: "No es necesario ser un profesional para invertir como uno",
          })}{" "}
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex lg:flex-row flex-col items-center justify-between w-full">
            <div className="xl:w-[600px] w-[550px] bg-gradient-to-tr rounded-lg h-[400px]">
              <div className="flex flex-col items-center lg:items-start h-[400px] p-3 gap-3">
                {[
                  [
                    `${translateText({
                      text: "Acceso Global:",
                    })}`,
                    `${translateText({
                      text: "Diversifica tu cartera con proyectos exclusivos conectando con destinos únicos y rentables en todo el mundo.",
                    })}`,
                  ],
                  [
                    `${translateText({
                      text: "Seguridad Jurídica:",
                    })}`,
                    `${translateText({
                      text: "Confiabilidad y seguridad jurídica respaldada con transparencia.",
                    })}`,
                  ],
                  [
                    `${translateText({
                      text: "Rendimiento Sostenible:",
                    })}`,
                    `${translateText({
                      text: "Carteras duraderas para maximizar tu éxito financiero a largo plazo.",
                    })}`,
                  ],
                ].map((item) => {
                  return (
                    <div className="p-1  font-semibold text-xl flex flex-col w-[400px] gap-2 ">
                      <div className="flex items-center  justify-center lg:justify-start gap-4">
                        <div className="bg-green-600 h-7 w-7 rounded-full shadow flex items-center justify-center -ml-2 z-10 animate-enter-div">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
                            alt="check"
                          />
                        </div>
                        <div className="font-semibold">{item[0]}</div>
                      </div>
                      <div className="text-sm text-gray-500 p-1 font-normal">
                        {item[1]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-[450px] items-center justify-center flex relative bg-gradient-to-tr rounded-lg h-[450px] -mt-16  md:-mt-36">
              <img
                className=" shadow-2xl lg:absolute"
                src="https://hotel-1-fotos.s3.amazonaws.com/Prueba-1-min.png"
                width="350"
              />
              <img
                className="absolute shadow-2xl z-10 -bottom-10 -right-20 lg:block hidden rounded"
                src="https://hotel-1-fotos.s3.amazonaws.com/Example1-min.png"
                width="350"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:p-5 xl:ml-16  mt-10 gap-10">
        <div className="font-semibold text-3xl ml-1 text-center sm:text-start">
          {translateText({ text: "Nuestras alianzas" })}
        </div>
        <div className="flex sm:flex-row flex-col items-center sm:items-start">
          {[
            [
              "Hotelier Services",
              `${translateText({ text: "España" })}
              `,
              `${translateText({
                text: "Con proyectos significativos en Argentina y España, junto con más de 20 años de experiencia en gestión hotelera nacional e internacional, Hotelier Services destaca en el análisis y viabilidad económica centrado en el desarrollo, comercialización y gestión de proyectos hoteleros y condo hoteles.",
              })}`,
              "https://hotelierservices.com/",
            ],
          ].map((alianza, index) => {
            return (
              <a href={`${alianza[3]}`} target="_blank">
                <div
                  className={`sm:w-[350px] cursor-pointer relative flex flex-col ml-5 rounded-md sm:h-80  hover:bg-slate-300/20`}
                >
                  <div className=" w-20 text-center text-sm  grid items-center absolute right-10 bg-black rounded mt-5 text-white h-8">
                    {alianza[1]}
                  </div>
                  <img
                    height="90"
                    width="90"
                    className="p-4"
                    src={`${!index ? "/home/Hotelier.svg" : "/home/Start.svg"}`}
                  />
                  <div className="p-4  font-semibold text-xl -mt-3">
                    {alianza[0]}
                  </div>
                  <div className="p-4 font-semibold text-sm text-gray-400 -mt-3">
                    {alianza[2]}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col sm:p-5 xl:ml-16  mt-16 gap-10">
        <div className="flex flex-col">
          <div className="font-semibold text-3xl ml-1 text-center sm:text-start">
            {translateText({ text: "Suscríbete" })}
          </div>
          <div className="font-normal text-gray-500 md:w-[85vw] md:px-0 px-2 sm:w-auto md:text-start text-center">
            {translateText({
              text: "¡Obtén información exclusiva sobre inversiones con Brickly y asegura tu lugar en la primera ronda!",
            })}
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}
