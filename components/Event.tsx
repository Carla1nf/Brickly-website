"use client";

import { translateText } from "@/lib/translate";
import { ReactNode } from "react";

const Event = ({
  extra,
  tiempo,
  tipo,
}: {
  extra?: string;
  tiempo: string;
  tipo: string;
}) => {
  const title =
    tipo == "Exito"
      ? "Compra exitosa"
      : tipo == "Inicio"
      ? "Apertura de reservas"
      : tipo == "Reclamo"
      ? "Rentas reclamadas"
      : tipo == "Proceso"
      ? "Procesando pago"
      : "Hotel en preparación";

  const getSymbol = () => {
    return (
      <>
        {tipo == "Exito" ? (
          <div className="bg-green-500 h-7 w-7 rounded-full shadow flex items-center justify-center scale-75">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
              alt="check"
            />
          </div>
        ) : tipo == "Inicio" ? (
          <img src="/events/apertura.svg" height={22} width={22} />
        ) : tipo == "Reclamo" ? (
          <img src="/events/card.svg" height={22} width={22} />
        ) : (
          <img src="/events/herramientas.svg" height={22} width={22} />
        )}
      </>
    );
  };

  return (
    <>
      {/* desktop - left align design */}
      <div className="flex gap-3 w-full py-2">
        {getSymbol()}
        <div className="flex flex-col">
          <div className="font-semibold text-sm flex items-center gap-4">
            {translateText({ text: title })}
            <p className="text-gray-400 text-[13px] ">
              <a
                href={extra}
                target="_blank"
                className="text-black font-light underline"
              >
                Check payment
              </a>
            </p>
          </div>
          <div className="text-[12px] text-gray-400 font-semibold">
            {tiempo}
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
