"use client";
import { ShowWhenTrue } from "@/components/conditionals";
import { SpinnerIcon } from "@/components/icons";
import { useState } from "react";

export default function ConfirmedCheckout() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 6000);

  return (
    <>
      <ShowWhenTrue when={loading}>
        <div className="flex flex-col w-full h-full items-center justify-center pr-6">
          <div className="text-2xl text-gray-400 font-bold ">
            {" "}
            Estamos procesando tu compra...
          </div>
          <div className="text-gray-400">por favor no recargues la página</div>
          <SpinnerIcon className="w-6 animate-spin mt-5" />
        </div>
      </ShowWhenTrue>
      <ShowWhenTrue when={!loading}>
        <div className="bg-white p-6 mx-auto rounded-lg flex gap-10 flex-col items-center animate-enter-token">
          <div className="text-sm font-semibold mb-2 text-gray-400">
            Gracias por tu inversión
          </div>
          <div className="bg-green-600 h-10 w-10 rounded-full shadow flex items-center justify-center -ml-2 z-10 animate-enter-div">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
              alt="check"
            />
          </div>
          <div className="flex flex-col  items-center">
            <div className="text-2xl md:text-start text-center font-bold mb-4">
              Orden #123RGR231567Y Confirmada
            </div>
            <div className="bg-brickly500 h-10 rounded flex items-center justify-center font-semibold text-white w-full mb-2 cursor-pointer hover:bg-brickly500/90 transition-all">
              Revisar tu orden
            </div>
            <div className="text-sm font-semibold mb-2 text-gray-600">
              Generar recibo
            </div>
          </div>
        </div>
      </ShowWhenTrue>
    </>
  );
}
