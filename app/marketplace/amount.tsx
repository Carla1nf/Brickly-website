"use client";
import { useState } from "react";

export default function AmountCheckout() {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex absolute justify-center h-[100vh] top-20 w-screen left-0 select-none  ">
      <div className="w-full p-8 px-12 gap-8 flex flex-col items-center border-r-2 border-neutral-200/70">
        <div className="text-2xl w-10/12 font-semibold border-b-2 border-neutral-200/80 py-3">
          Monto de inversión
        </div>
        <div className="flex w-10/12 gap-3">
          <div className="h-30 bg-brickly500 w-10 rounded flex items-center justify-center cursor-pointer active:scale-105">
            <img src="/hotel-page/minus.svg" width={25} />
          </div>
          <div className=" w-full">
            <input
              placeholder="Monto"
              type="number"
              className="text-center text-5xl font-bold rounded w-full py-10"
              min={100}
            />
          </div>
          <div className="h-30 bg-brickly500 w-10 rounded flex items-center justify-center cursor-pointer active:scale-105">
            <img src="/hotel-page/plus.svg" width={25} />
          </div>{" "}
        </div>

        <div className="w-10/12 text-gray-400 text-sm">
          Sus datos personales se utilizarán para procesar su pedido y respaldar
          su experiencia a lo largo de este sitio web.
        </div>
        <div className="w-10/12 cursor-pointer hover:scale-[1.01] bg-brickly500 h-10 rounded flex items-center justify-center font-semibold text-white">
          Siguiente
        </div>
      </div>
      <div className="w-full flex flex-col p-8 px-12 items-center  gap-5 bg-neutral-50/80">
        <div className="text-2xl font-semibold w-10/12  border-b-2 border-neutral-200/80 py-3">
          Proyección de tu inversión
        </div>
        <div className="w-10/12 border-b-2 border-neutral-200/80 pb-5">
          <ul role="list" className="-my-6 divide-y  w-full divide-gray-200">
            <li className="flex py-6">
              <div className="h-24 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src="/hotel-page/Example1.png"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href="#">Casteldefells - Hab. 1</a>
                    </h3>
                    <p className="ml-4">USD 100.00</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Casteldefells Hotel
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-10/12 flex flex-col justify-center items-center border-b-2 border-neutral-200/80 pb-5">
          <div className="flex w-full">
            <div className="w-full">Interes proyectado</div>
            <div className="w-full text-sm flex justify-end font-semibold">
              8.32%
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-full">Devolución capital (5 años)</div>
            <div className="w-full flex text-sm justify-end font-semibold">
              USD 100.00
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-full">Ganancia proyectada (5 años)</div>
            <div className="w-full text-sm flex justify-end font-semibold">
              USD 40.00
            </div>
          </div>
        </div>

        <div className="flex w-10/12">
          <div className="w-full flex flex-col">
            <div>Devolución Total</div>
            <div className="text-sm text-gray-400">
              Incluye $2.24 en impuestos
            </div>
          </div>
          <div className="w-full text-2xl flex justify-end font-semibold">
            USD 140
          </div>
        </div>
      </div>
    </div>
  );
}
