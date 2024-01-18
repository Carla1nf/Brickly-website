"use client";
import { useState } from "react";

export default function DetailsBeforeCheckout() {
  return (
    <div className="flex absolute justify-center h-[100vh] top-20 w-screen left-0  ">
      <div className="w-full p-8 px-12 gap-8 flex flex-col items-center border-r-2 border-neutral-200/70">
        <div className="text-2xl w-10/12 font-semibold border-b-2 border-neutral-200/80 py-3">
          Metodo de pago
        </div>
        <div className="flex flex-col w-10/12 gap-3">
          <span className="font-semibold text-lg">Pagar con:</span>
          <div className="flex gap-6">
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
        <div className="w-10/12 cursor-pointer hover:scale-[1.01] bg-brickly500 h-10 rounded flex items-center justify-center font-semibold text-white">
          Pagar USD102
        </div>
        <div className="w-10/12 text-gray-400 text-sm">
          Sus datos personales se utilizarán para procesar su pedido y respaldar
          su experiencia a lo largo de este sitio web.
        </div>
      </div>
      <div className="w-full flex flex-col p-8 px-12 items-center  gap-5 bg-neutral-50/80">
        <div className="text-2xl font-semibold w-10/12  border-b-2 border-neutral-200/80 py-3">
          Resumen de orden
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
                    <p className="ml-4">$100.00</p>
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
            className="border rounded shadow w-full px-3 py-2"
            placeholder="Código de referidos"
          />
          <div className="w-24 bg-neutral-400 text-white flex items-center justify-center h-full rounded">
            Aplicar
          </div>
        </div>

        <div className="w-10/12 flex flex-col justify-center items-center border-b-2 border-neutral-200/80 pb-5">
          <div className="flex w-full">
            <div className="w-full">Subtotal</div>
            <div className="w-full flex text-sm justify-end font-semibold">
              USD 100.00
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-full">Brickly fee</div>
            <div className="w-full text-sm flex justify-end font-semibold">
              USD 2.00
            </div>
          </div>
        </div>

        <div className="flex w-10/12">
          <div className="w-full flex flex-col">
            <div>Total</div>
            <div className="text-sm text-gray-400">
              Incluye $2.24 en impuestos
            </div>
          </div>
          <div className="w-full text-2xl flex justify-end font-semibold">
            USD 102
          </div>
        </div>
      </div>
    </div>
  );
}
