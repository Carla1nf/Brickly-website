"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { Web3Auth } from "@web3auth/modal";
import Web3 from "web3";
import { ShowWhenTrue } from "./conditionals";
import { UseLenguage, useManageLenguage } from "@/context/CheckoutIndex";
import { translateText } from "@/lib/translate";
import {
  useConnectContext,
  useConnection,
  useIsConnecting,
} from "@/context/connection";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [barActive, setBarActive] = useState(false);
  const [_web3Auth, _setWeb3Auth] = useState<any>();
  const setNewLenguage = useManageLenguage();
  const activeLenguage = UseLenguage();
  const connect = useConnectContext();
  const info = useConnection() as any;
  const connecting = useIsConnecting();

  const bricklyTelegram = "https://t.me/bricklytelegram";
  const bricklyTwitter = "https://twitter.com/BricklyApp";
  const bricklyInstagram = "https://www.instagram.com/brickly.app/";
  const equipo = "https://brickly.gitbook.io/brick-ly/team/meet-the-team";
  const contacto = "https://brickly.gitbook.io/brickly-info/team/contacto";

  const handleNewLenguage = (len: string) => {
    if (setNewLenguage) {
      setNewLenguage(len);
    }
  };

  const connectToBlockchain = async () => {
    if (connect) {
      connect();
    }
  };

  return (
    <nav className="flex items-center justify-between  px-8">
      <div className="flex md:hidden p-4 items-center w-full ">
        <Link href="/" className=" w-[40vw] justify-self-start ">
          <Image
            src="/navbar/Brickly.svg"
            height={50}
            width={90}
            alt="Brickly"
          />
        </Link>
        <div className="px-4 relative font-bold group w-full jusitify-end text-gray-600 flex gap-2 w-22 rounded-lg">
          <img
            src={`/navbar/${activeLenguage}.png`}
            width={23}
            className="rounded-full"
          />
          <div className="w-6">{activeLenguage}</div>
          <div className="absolute group-hover:flex   hidden right-0 z-10 mt-6 w-40 p-3 flex-col gap-4 bg-neutral-50 shadow-lg rounded-lg">
            {[
              ["ES", "Español"],
              ["EN", "English"],
            ].map((item) => {
              return (
                <div
                  onClick={() => {
                    handleNewLenguage(item[0]);
                  }}
                  className="cursor-pointer text-sm flex gap-3 hover:text-gray-900 hover:scale-[1.01]"
                >
                  <div className="text-black">{item[0]}</div>
                  <div className="text-gray-500">{item[1]}</div>
                  <ShowWhenTrue when={activeLenguage == item[0]}>
                    <div>
                      <img
                        src="navbar/tick.svg"
                        width={20}
                        className="flex items-center opacity-60"
                      />
                    </div>
                  </ShowWhenTrue>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-full justify-end flex">
          <img
            src="/navbar/Bar.svg"
            width="30"
            className="cursor-pointer"
            onClick={() => setBarActive(true)}
          />
        </div>
        <ShowWhenTrue when={barActive}>
          <div className="flex flex-col py-5 px-5  fixed top-0 right-0 bottom-0 left-0 bg-neutral-50 z-10">
            <div className="flex justify-end">
              <img
                src="/universal/back.svg"
                width="30"
                className="cursor-pointer justify-self-start"
                onClick={() => setBarActive(false)}
              />
              <div className="w-full px-10 flex justify-end animate-enter-div">
                <Image
                  src="/navbar/Brickly.svg"
                  height={50}
                  width={90}
                  alt="Dēbita"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-5">
              <a
                onClick={() => setBarActive(false)}
                className="rounded-xl  bg-gray-50 px-4 text-center animate-enter-token text-[14.5px] h-12 items-center grid hover:bg-slate-400/10 font-semibold opacity-0 fill-mode-forwards delay"
                href="#registrarse"
              >
                {translateText({ text: "Pre-registrate" })}
              </a>

              <Link
                onClick={() => setBarActive(false)}
                className="rounded-xl  bg-gray-50 px-4 text-center animate-enter-token text-[14.5px] h-12 items-center grid hover:bg-slate-400/10 font-semibold opacity-0 fill-mode-forwards delay"
                target="_blank"
                href={equipo}
              >
                {translateText({ text: "Equipo" })}
              </Link>

              <Link
                onClick={() => setBarActive(false)}
                className="rounded-xl  bg-gray-50 px-4 text-center animate-enter-token text-[14.5px] h-12 items-center grid hover:bg-slate-400/10 font-semibold opacity-0 fill-mode-forwards delay"
                href={contacto}
                target="_blank"
              >
                {translateText({ text: "Contacto" })}
              </Link>

              <Link
                onClick={() => setBarActive(false)}
                className="rounded-xl  bg-gray-50 px-4 text-center animate-enter-token text-[14.5px] h-12 items-center grid hover:bg-slate-400/10 font-semibold opacity-0 fill-mode-forwards delay"
                href={bricklyTwitter}
                target="_blank"
              >
                Twitter
              </Link>
              <Link
                onClick={() => setBarActive(false)}
                className="rounded-xl  bg-gray-50 px-4 text-center animate-enter-token text-[14.5px] h-12 items-center grid hover:bg-slate-400/10 font-semibold opacity-0 fill-mode-forwards delay-75"
                href={bricklyInstagram}
                target="_blank"
              >
                Instagram
              </Link>
              <Link
                onClick={() => setBarActive(false)}
                className="rounded-xl  bg-gray-50 px-4 text-center animate-enter-token text-[14.5px] h-12 items-center grid hover:bg-slate-400/10 font-semibold opacity-0 fill-mode-forwards delay-100"
                href={bricklyTelegram}
                target="_blank"
              >
                Telegram
              </Link>
            </div>
          </div>
        </ShowWhenTrue>
      </div>
      <div className="flex-row items-center  p-4 md:flex hidden">
        <Link href="/" className=" w-[40vw]">
          <Image
            src="/navbar/Brickly.svg"
            height={50}
            width={90}
            alt="Dēbita"
          />
        </Link>
      </div>
      <div className="flex-row px-4 items-center md:flex hidden">
        <Link
          className="px-3 text-center text-[14.5px] h-12 items-center grid hover:text-brickly500 rounded-lg font-semibold transition-all "
          href="marketplace"
        >
          {translateText({ text: "Invertir" })}
        </Link>

        <Link
          className="px-3 text-center text-[14.5px] h-12 items-center grid hover:text-brickly500 rounded-lg font-semibold transition-all "
          target="_blank"
          href={equipo}
        >
          {translateText({ text: "Equipo" })}
        </Link>
        <div className="px-3 text-center text-[14.5px] h-12 items-center grid font-semibold  transition-all  rounded-lg">
          <div className="relative inline-block text-left group">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer gap-1 hover:text-brickly500"
            >
              {translateText({ text: "Comunidad" })}
            </div>

            <ShowWhenTrue when={isOpen}>
              <div
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-neutral-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <div className="flex w-full hover:bg-gray-100 items-center px-3">
                    <img src="/universal/twitter.svg" width="20" />
                    <a
                      href={bricklyTwitter}
                      target="_blank"
                      className="text-gray-700 block hover:text-brickly500  px-4 py-2 text-sm"
                      role="menuitem"
                      id="menu-item-0"
                    >
                      Twitter
                    </a>
                  </div>
                  <div className="flex w-full hover:bg-gray-100 items-center px-3">
                    <img src="/universal/instagram.svg" width="20" />
                    <a
                      href={bricklyInstagram}
                      target="_blank"
                      className="text-gray-700 hover:text-brickly500  block px-4 py-2 text-sm"
                      role="menuitem"
                      id="menu-item-1"
                    >
                      Instagram
                    </a>
                  </div>
                  <div className="flex w-full hover:bg-gray-100 items-center px-3">
                    <img src="/universal/telegram.svg" width="20" />
                    <a
                      href={bricklyTelegram}
                      target="_blank"
                      className="text-gray-700 hover:text-brickly500  block px-4 py-2 text-sm"
                      role="menuitem"
                      id="menu-item-1"
                    >
                      Telegram
                    </a>
                  </div>
                  <div className="flex w-full hover:bg-gray-100 items-center px-3">
                    <img src="/universal/linkedin.svg" width="20" />
                    <a
                      href={
                        "https://www.linkedin.com/company/bricklyrealestate/"
                      }
                      target="_blank"
                      className="text-gray-700 hover:text-brickly500 block px-4 py-2 text-sm"
                      role="menuitem"
                      id="menu-item-1"
                    >
                      Likendin
                    </a>
                  </div>
                </div>
              </div>
            </ShowWhenTrue>
          </div>
        </div>

        <Link
          className="px-3 text-center text-[14.5px] h-12 items-center grid hover:text-brickly500 rounded-lg font-semibold transition-all "
          href={contacto}
          target="_blank"
        >
          {translateText({ text: "Contacto" })}
        </Link>

        <ShowWhenTrue when={info != ""}>
          <Link
            className="px-3 text-center text-[14.5px] h-12 items-center grid hover:text-brickly500 rounded-lg font-semibold transition-all "
            href="dashboard"
          >
            Panel
          </Link>
        </ShowWhenTrue>

        <ShowWhenTrue when={info != ""}>
          <Link
            className="px-3 text-center text-[14.5px] h-12 items-center grid hover:text-brickly500 rounded-lg font-semibold transition-all "
            href="withdraw"
          >
            Retirar
          </Link>
        </ShowWhenTrue>

        <div className="px-4 relative font-bold group text-gray-600 flex gap-2 w-22 rounded-lg">
          <img
            src={`/navbar/${activeLenguage}.png`}
            width={23}
            className="rounded-full"
          />
          <div className="w-6">{activeLenguage}</div>
          <div className="absolute group-hover:flex hidden right-0 z-10 mt-6 w-40 p-3 flex-col gap-4 bg-neutral-50 shadow-lg rounded-lg">
            {[
              ["ES", "Español"],
              ["EN", "English"],
            ].map((item) => {
              return (
                <div
                  onClick={() => {
                    handleNewLenguage(item[0]);
                  }}
                  className="cursor-pointer text-sm flex gap-3 hover:text-gray-900 hover:scale-[1.01]"
                >
                  <div className="text-black">{item[0]}</div>
                  <div className="text-gray-500">{item[1]}</div>
                  <ShowWhenTrue when={activeLenguage == item[0]}>
                    <div>
                      <img
                        src="navbar/tick.svg"
                        width={20}
                        className="flex items-center opacity-60"
                      />
                    </div>
                  </ShowWhenTrue>
                </div>
              );
            })}
          </div>
        </div>

        <ShowWhenTrue when={info != ""}>
          <Link href="user">
            <div className="flex items-center gap-2 px-5 hover:bg-gray-100 py-2 rounded">
              <img
                className="w-8 h-8 rounded-full "
                src={`${info?.profileImage}`}
              />
              <div className="px-3 w-auto">{info?.name} </div>
            </div>
          </Link>
        </ShowWhenTrue>

        <ShowWhenTrue when={info == ""}>
          <a
            onClick={() => connectToBlockchain()}
            className="md:flex hidden px-6"
          >
            <Button
              content={`${translateText({ text: "Conectarse" })}`}
              loading={connecting}
            ></Button>
          </a>
        </ShowWhenTrue>
      </div>
    </nav>
  );
}

export default Nav;
