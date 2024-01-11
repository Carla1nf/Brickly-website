"use client";
import { useState } from "react";
import CheckoutPage from "./checkout";

export default function DetailsBeforeCheckout() {
  const [index, setIndex] = useState(0);

  const porcentage = `${
    index == 0 ? "w-[0%]" : index == 1 ? "w-[50%]" : "w-[100%]"
  }`;
  const mlPorcentage = `${
    index == 0 ? "ml-[0%]" : index == 1 ? "ml-[50%]" : "ml-[100%]"
  }`;

  return (
    <div className="flex absolute justify-center h-[100vh] top-20 w-screen left-0  ">
      <div className="w-full border-r-2 border-neutral-300"></div>
      <div className="w-full bg-neutral-50">
        {" "}
        <button className=" bg-slate-400" onClick={() => setIndex(index + 1)}>
          Confirmar
        </button>
      </div>
    </div>
  );
}

/*

   {index == 2 ? <CheckoutPage /> : ""}
      <div className="flex flex-col relative w-10/12 bg-gray-50 shadow-xl h-40 rounded-xl">
        <div className="w-11/12 absolute bottom-0 left-[33%] lg:w-2/6 mx-auto  bg-red-300">
          <div className="bg-gray-200 dark:bg-gray-700 h-1 flex items-center justify-between">
            <div className=" bg-gray-200 h-1 w-full flex justify-between items-center relative">
              <div
                className={`absolute h-full ${porcentage} bg-brickly500`}
              ></div>
              {[1, 2, 3].map((item, _index) => {
                return (
                  <>
                    {_index >= index ? (
                      <div className="bg-white dark:bg-gray-700 h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative z-10">
                        <div className="h-3 w-3 bg-brickly600 rounded-full"></div>
                      </div>
                    ) : (
                      <div className="bg-brickly600 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2 z-10 animate-enter-div">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
                          alt="check"
                        />
                      </div>
                    )}
                  </>
                );
              })}

              <div className={`transition-all absolute ${mlPorcentage} `}>
                <div className="relative -ml-[40%] w-44 text-center bg-white dark:bg-gray-800 shadow-lg px-5 py-1 rounded mt-16 ">
                  <p className="focus:outline-none text-brickly500 dark:text-indigo-400 text-xs font-bold">
                    Paso {index + 1}:{" "}
                    {index == 0
                      ? "Monto"
                      : index == 1
                      ? "Metodo"
                      : "Confirmación"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


*/
