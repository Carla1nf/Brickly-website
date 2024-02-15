"use client";
import Event from "@/components/Event";
import Stat from "@/components/Stat";
import InvestmentRow from "@/components/InvestmentDashboard";
import { useEffect, useState } from "react";
import { useKYCData } from "@/hooks/useKYCData";
import {
  useAddressContext,
  useConnectContext,
  useConnection,
  useIsConnecting,
} from "@/context/connection";
import { useUserDataPerHouseId } from "@/hooks/useUserData";
import { ShowWhenTrue } from "@/components/conditionals";
import { Address } from "web3";
import { SpinnerIcon } from "@/components/icons";
import ConnectYourWallet from "@/components/connectWallet";
import axios from "axios";

export default function PanelPage() {
  const userAddress = useAddressContext();
  const info = useConnection() as any;
  const [rentaSinReclamar, setRentaSinReclamar] = useState<any>(0);
  const [rentaReclamanda, setRentaReclamada] = useState<any>(0);
  const [inversionTotal, setInversionTotal] = useState<any>(0);
  const [allPaymentsUser, setAllPaymentsUser] = useState<any>([]);

  const getData = async () => {
    if (userAddress == "") {
      return null;
    }
    let paymentsUser = [] as any;
    const { data } = await axios.get("/api/getproducts");
    data.map((item: any, index: number) => {
      if (info.email == item.billing_details.email) {
        console.log(item);
        paymentsUser.push(item);
      }
    });
    setAllPaymentsUser(paymentsUser);
  };

  useEffect(() => {
    getData();
  }, [userAddress]);

  const GetInfo = async () => {
    const info = (await useUserDataPerHouseId(1, 1, userAddress)) as any;
    if (info) {
      setInversionTotal(Number(info[0]?.result));
      setRentaSinReclamar(Number(info[1]?.result));
      setRentaReclamada(Number(info[2]?.result));
    }
  };
  console.log(1);
  GetInfo();

  return (
    <>
      <ShowWhenTrue when={userAddress != ""}>
        <div className="flex flex-col items-center md:pr-5 gap-8">
          <div className="flex md:flex-row flex-col w-10/12 md:w-full md:gap-6 gap-2">
            <Stat
              value={`${rentaSinReclamar.toFixed(2)}`}
              title={"Renta generada"}
              extra="USD"
            />
            <Stat
              value={`${rentaReclamanda.toFixed(2)}`}
              title={"Ganancia reclamada"}
              extra="USD"
            />
            <Stat
              value={`${inversionTotal.toFixed(2)}`}
              title={"Inversión total"}
              extra="USD"
            />
          </div>

          <div className="flex md:flex-row flex-col gap-8 w-full px-6 sm:px-12 md:px-0">
            <div className="bg-neutral-50 shadow p-5 flex gap-5 flex-col rounded md:w-2/3 lg:h-80">
              <div className="font-semibold">Tus inversiones</div>
              <div className=" font-semibold text-gray-400 text-sm border-b hidden md:flex border-gray-200 pb-2">
                <div className="w-1/3">Hotel</div>
                <div className="w-1/3">Invertido</div>
                <div className="w-1/3">Proceso</div>
              </div>
              <InvestmentRow houseID={1} />
              <ShowWhenTrue when={allPaymentsUser.length == 0}>
                <div className="text-center text-gray-400 mt-5">
                  Sin inversiones
                </div>
              </ShowWhenTrue>

              <ShowWhenTrue
                when={allPaymentsUser.length > 0 && inversionTotal == 0}
              >
                <div className="text-center text-gray-400 mt-5">
                  Tus inversiones estan siendo procesadas...
                </div>
              </ShowWhenTrue>
            </div>
            <div className="bg-neutral-50 shadow p-5 flex flex-col rounded lg:w-[32%] gap-6">
              <div className="font-semibold">Eventos</div>
              <div className="flex flex-col justify-center items-center">
                <ShowWhenTrue when={allPaymentsUser.length == 0}>
                  <div className="text-center text-gray-400 mt-5">
                    Sin eventos
                  </div>
                </ShowWhenTrue>

                <ShowWhenTrue when={allPaymentsUser.length > 0}>
                  {allPaymentsUser.map((item: any) => {
                    console.log(item);
                    return (
                      <Event
                        extra={item.receipt_url}
                        tiempo={`${(Number(item.amount) / 100).toFixed(2)} USD`}
                        tipo={`${
                          item.description == "Confirmado" ? "Exito" : "Proceso"
                        }`}
                      />
                    );
                  })}
                </ShowWhenTrue>
              </div>
            </div>
          </div>
        </div>
      </ShowWhenTrue>

      <ConnectYourWallet />
    </>
  );
}
