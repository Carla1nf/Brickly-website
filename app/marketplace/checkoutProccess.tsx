"use client";
import { useEffect, useRef, useState } from "react";
import ConfirmedCheckout from "./confirmado";
import { ShowWhenTrue } from "@/components/conditionals";

export default function AmountCheckout() {
  const [index, setIndex] = useState(0);
  const [refCode, setRefCode] = useState("");
  const [appliedRef, setAppliedRef] = useState<boolean>(false);
  const [amountToInvest, setAmountToInvest] = useState(0);

  const newAmountRef = useRef<HTMLInputElement>(null);
  const newRefCode = useRef<HTMLInputElement>(null);

  const handleRef = (isUp: boolean) => {
    if (newAmountRef && newAmountRef.current) {
      if (isUp) {
        newAmountRef.current.value = (amountToInvest + 100).toString();
        setAmountToInvest(amountToInvest + 100);
        return "";
      }
      const amountToAdd = amountToInvest > 100 ? amountToInvest - 100 : 0;
      newAmountRef.current.value = amountToAdd.toString();
      setAmountToInvest(amountToAdd);
      return "";
    }
  };

  useEffect(() => {
    if (newAmountRef && newAmountRef.current) {
      newAmountRef.current.value = amountToInvest.toString();
    }
  }, [index]);

  const handleRefCode = (code: string) => {
    if (code == "") {
      setRefCode("");
      setAppliedRef(false);
      if (newRefCode && newRefCode.current) {
        newRefCode.current.value = "";
      }
    }
    setRefCode(code.length == 5 ? code : "");
  };

  const isRefCodeValid = refCode != "";

  return (
    <>
      <ShowWhenTrue when={index == 0}>
        <div className="flex md:flex-row flex-col md:absolute justify-center h-auto md:h-[100vh] md:top-20 w-screen left-0 select-none -mt-10 md:mt-0 ">
          <div className="w-full p-8 px-12 gap-8 flex flex-col items-center border-r-2 border-neutral-200/70">
            <div className="text-2xl w-10/12 font-semibold border-b-2 border-neutral-200/80 py-3">
              Monto de inversión
            </div>
            <div className="flex w-10/12 gap-3">
              <div
                className="h-30 bg-brickly500 w-10 rounded flex items-center justify-center cursor-pointer active:scale-105"
                onClick={() => handleRef(false)}
              >
                <img src="/hotel-page/minus.svg" width={25} />
              </div>
              <div className=" w-full">
                <input
                  placeholder="Monto"
                  type="number"
                  className="text-center text-5xl font-bold rounded w-full py-10"
                  min={100}
                  ref={newAmountRef}
                  onChange={(e) => setAmountToInvest(Number(e.target.value))}
                />
              </div>
              <div
                className="h-30 bg-brickly500 w-10 rounded flex items-center justify-center cursor-pointer active:scale-105"
                onClick={() => handleRef(true)}
              >
                <img src="/hotel-page/plus.svg" width={25} />
              </div>{" "}
            </div>

            <div className="w-10/12 text-gray-400 text-sm">
              Sus datos personales se utilizarán para procesar su pedido y
              respaldar su experiencia a lo largo de este sitio web.
            </div>
            <div
              onClick={() => (amountToInvest >= 100 ? setIndex(index + 1) : "")}
              className={`w-10/12 cursor-pointer hover:scale-[1.01] bg-brickly500 h-10 rounded flex items-center justify-center font-semibold text-white ${
                amountToInvest >= 100 ? "" : "cursor-not-allowed opacity-65"
              }`}
            >
              Siguiente
            </div>
          </div>
          <div className="w-full flex flex-col p-8 px-12 items-center  gap-5 bg-neutral-50/80">
            <div className="text-2xl font-semibold w-10/12  border-b-2 border-neutral-200/80 py-3">
              Proyección de tu inversión
            </div>
            <div className="w-10/12 border-b-2 border-neutral-200/80 pb-5">
              <ul
                role="list"
                className="-my-6 divide-y  w-full divide-gray-200"
              >
                <li className="flex py-6">
                  <div className="h-24 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src="/hotel-page/Example1.png"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex md:flex-row  flex-col justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">Casteldefells - Hab. 1</a>
                        </h3>
                        <p className="md:ml-4">
                          USD {amountToInvest.toFixed(2)}
                        </p>
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
                  USD {amountToInvest.toFixed(2)}
                </div>
              </div>

              <div className="flex w-full">
                <div className="w-full">Ganancia proyectada (5 años)</div>
                <div className="w-full text-sm flex justify-end font-semibold">
                  USD {(amountToInvest * 0.4).toFixed(2)}
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
                USD {(amountToInvest * 1.4).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </ShowWhenTrue>

      <ShowWhenTrue when={index == 1}>
        <div className="flex md:flex-row flex-col md:absolute justify-center md:h-[100vh] md:mt-0 -mt-10 top-20 w-screen left-0  animate-enter-token">
          <div className="w-full p-8 px-12 gap-8 flex flex-col items-center border-r-2 border-neutral-200/70">
            <div className="text-2xl items-center flex gap-4 w-10/12 font-semibold border-b-2 border-neutral-200/80 py-3">
              <div
                className="text-sm flex gap-2 opacity-70 cursor-pointer"
                onClick={() => setIndex(index - 1)}
              >
                <img src="/universal/back.svg" width={20} />
                Volver
              </div>{" "}
              Metodo de pago
            </div>
            <div className="flex flex-col w-10/12 gap-3">
              <span className="font-semibold text-lg">Pagar con:</span>
              <div className="flex md:flex-row flex-col gap-6">
                <div className="flex items-center space-x-2">
                  <input
                    className="accent-brickly500"
                    id="card"
                    name="paymentMethod"
                    type="radio"
                  />
                  <label className="text-sm" htmlFor="card">
                    Tarjeta
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    className="accent-brickly500"
                    id="bank"
                    name="paymentMethod"
                    type="radio"
                  />
                  <label className="text-sm" htmlFor="bank">
                    Criptomonedas
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    className="accent-brickly500"
                    id="transfer"
                    name="paymentMethod"
                    type="radio"
                  />
                  <label className="text-sm" htmlFor="transfer">
                    Transferencia
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-10/12 gap-5">
              <div className="flex flex-col gap-2">
                <div className="font-semibold">Nombre del titular</div>
                <input
                  className="border shadow px-3 py-2 rounded-lg"
                  placeholder="Nombre completo"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-semibold">Numero de Tarjeta</div>
                <input
                  className="border shadow px-3 py-2 rounded-lg"
                  placeholder="0000 0000 0000 0000"
                />
              </div>

              <div className="flex gap-16">
                <div className="flex flex-col gap-2 w-full">
                  <div className="font-semibold">Fecha de expiración</div>
                  <input
                    className="border shadow px-3  py-2 rounded-lg"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="font-semibold">CVV</div>
                  <input
                    className="border shadow px-3 py-2 rounded-lg"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
            <div
              onClick={() => setIndex(index + 1)}
              className="w-10/12 cursor-pointer hover:scale-[1.01] bg-brickly500 h-10 rounded flex items-center justify-center font-semibold text-white"
            >
              Pagar USD{amountToInvest * 1.02}
            </div>
            <div className="w-10/12 text-gray-400 text-sm">
              Sus datos personales se utilizarán para procesar su pedido y
              respaldar su experiencia a lo largo de este sitio web.
            </div>
          </div>
          <div className="w-full flex flex-col p-8 px-12 items-center  gap-5 bg-neutral-50/80">
            <div className="text-2xl font-semibold w-10/12  border-b-2 border-neutral-200/80 py-3">
              Resumen de orden
            </div>
            <div className="w-10/12 border-b-2 border-neutral-200/80 pb-5">
              <ul
                role="list"
                className="-my-6 divide-y  w-full divide-gray-200"
              >
                <li className="flex py-6">
                  <div className="h-24 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src="/hotel-page/Example1.png"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex md:flex-row flex-col justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">Casteldefells - Hab. 1</a>
                        </h3>
                        <p className="md:ml-4">${amountToInvest.toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Casteldefells Hotel
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-10/12 flex items-center gap-8 border-b-2 border-neutral-200/80 pb-5">
              <input
                ref={newRefCode}
                className="border rounded shadow w-full px-3 py-2"
                placeholder="Código de referidos"
                disabled={appliedRef}
                onChange={(e) => handleRefCode(e.target.value)}
              />
              <div
                onClick={() => {
                  isRefCodeValid && !appliedRef
                    ? setAppliedRef(true)
                    : handleRefCode("");
                }}
                className={`w-auto px-4 ${
                  isRefCodeValid
                    ? "bg-neutral-900 cursor-pointer"
                    : "bg-neutral-400 cursor-not-allowed"
                } text-white flex items-center justify-center h-full rounded`}
              >
                {appliedRef ? "Deshacer" : "Aplicar"}
              </div>
            </div>

            <div className="w-10/12 flex flex-col justify-center items-center border-b-2 border-neutral-200/80 pb-5">
              <div className="flex w-full">
                <div className="w-full">Subtotal</div>
                <div className="w-full flex text-sm justify-end font-semibold">
                  USD {amountToInvest.toFixed(2)}
                </div>
              </div>

              <div className="flex w-full">
                <div className="w-full">Brickly fee</div>
                <div className="w-full text-sm flex justify-end font-semibold">
                  USD {(amountToInvest * 0.02).toFixed(2)}
                </div>
              </div>
            </div>

            <div className="flex w-10/12">
              <div className="w-full flex flex-col">
                <div>Total</div>
                <div className="text-sm text-gray-400">
                  Incluye ${amountToInvest * 0.02} en comisiones
                </div>
              </div>
              <div className="w-full text-2xl flex justify-end font-semibold">
                USD {amountToInvest * 1.02}
              </div>
            </div>
          </div>
        </div>
      </ShowWhenTrue>
      <ShowWhenTrue when={index == 2}>
        <ConfirmedCheckout />
      </ShowWhenTrue>
    </>
  );
}
