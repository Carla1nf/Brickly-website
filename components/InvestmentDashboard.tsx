"use client";
import { useState } from "react";

const InvestmentRow = ({ id }: { id: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col relative hover:bg-neutral-100 cursor-pointer px-2 ">
      <div className="flex items-center h-12 " onClick={() => setOpen(!open)}>
        <div className="w-1/3 flex items-center gap-2">
          <img src="/home/Hotelier.svg" height="30" width="30" />
          Castelldefels hotel
        </div>
        <div className="w-1/3 flex items-center font-semibold text-sm">
          USD 1,302
        </div>
        <div className="w-1/3 flex flex-col justify-center ">
          <div className="text-brickly500 font-bold">63%</div>
          <div className="bg-neutral-200 h-1 w-1/2 rounded-xl relative">
            <div className=" bg-gradient-to-r from-brickly400 to-pink-500 w-1/2 absolute h-1 rounded-l"></div>
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-5 flex items-center justify-center"
        >
          <img src="/universal/Down.svg" width="20" />
        </div>
      </div>
      {open ? (
        <div className="bg-neutral-100 h-36 rounded-b-xl  animate-row-data origin-top">
          <div className="flex  p-5 gap-8 justify-item animate-opacity-1">
            <div className="flex flex-col w-full gap-2">
              <div className=" font-bold">
                Habitacion 1 - Castelldefels hotel
              </div>
              <div className="flex gap-5">
                <div className="flex-col flex gap-3  text-sm">
                  {[1, 2].map((item, index) => {
                    return (
                      <div className="flex gap-2 items-center">
                        <div className="text-gray-500 text-sm">Estado:</div>
                        {index == 0 ? (
                          <div className="text-green-600 font-bold">
                            Activo{" "}
                          </div>
                        ) : (
                          <div className="font-semibold text-gray-500">
                            USD 80.97{" "}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex-col flex gap-3  text-sm">
                  {[1, 2].map((item, index) => {
                    return (
                      <div className="flex gap-2 items-center">
                        <div className="text-gray-500 text-sm">
                          Finalización
                        </div>
                        {index == 0 ? (
                          <div className="text-gray-500 font-bold">
                            11/02/2028{" "}
                          </div>
                        ) : (
                          <div className="font-semibold text-gray-500">
                            USD 80.97{" "}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-end w-full">
              <div className="text-gray-500 text-sm flex gap-1">
                Rentas disponibles: <div className="font-bold">USD 2.03</div>
              </div>
              <div className="bg-brickly500 w-56 h-8 text-sm rounded text-white font-bold justify-center items-center flex cursor-pointer">
                Reclamar rentas
              </div>
              <div className="flex gap-2 text-sm">
                <div className=" font-bold underline">Mas información</div>
                <div className=" font-bold underline">Mis contratos</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InvestmentRow;
