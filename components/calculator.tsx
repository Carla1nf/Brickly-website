"use client";

import { useRef, useState } from "react";

export default function Calculator({ interest }: { interest: number }) {
  const [investment, setInvestment] = useState<number>(0);
  const anualInterest = interest ? (interest / 10000) * investment : 0;
  const investmentRef = useRef<HTMLInputElement>(null);

  return (
    <div className="border-2 border-brickly100 w-full rounded-xl h-[300px] p-5 flex flex-col gap-5">
      {" "}
      <div className=" text-sm text-gray-500">Calculadora retorno</div>
      <div className="flex flex-col gap-4 font-semibold">
        Inversión USD:
        <input
          className="border px-4 py-1 bg-brickly100/50 font-semibold text-lg border-brickly100 rounded"
          placeholder="USD"
          min={0}
          ref={investmentRef}
          defaultValue={0}
          type="number"
          onChange={(e) => {
            setInvestment(Number(e.target.value));
          }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-end items-center">
          <div className="text-sm w-full">Ganancia total (5 años)</div>
          <div className="text-lg text-green-900  font-semibold px-2 w-full justify-end flex">
            USD {(anualInterest * 5).toFixed(2)}
          </div>
        </div>

        <div className="flex justify-end items-center">
          <div className="text-sm w-full">Ganancia anual</div>
          <div className="text-lg text-green-900  font-semibold px-2 w-full justify-end flex">
            USD {anualInterest.toFixed(2)}
          </div>
        </div>

        <div className="flex justify-end items-center">
          <div className="text-sm w-full">Monto final</div>
          <div className="text-base text-green-900  font-semibold px-2 w-full justify-end flex">
            USD {(anualInterest * 5 + investment).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
