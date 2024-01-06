"use client"; 

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import Button from "./ui/Button";

function Nav () {
  const [isOpen, setIsOpen] = useState(false);
  const [barActive, setBarActive] = useState(false);

  const bricklyTelegram = "https://t.me/bricklytelegram";
  const bricklyTwitter = "https://twitter.com/BricklyApp";
  const bricklyInstagram = "https://www.instagram.com/brickly.app/";
  const equipo = "https://brickly.gitbook.io/brick-ly/team/meet-the-team";
  const contacto = "https://brickly.gitbook.io/brickly-info/team/contacto";

  return (
    <nav className="flex items-center justify-between px-8">
      <div className="flex md:hidden p-4 items-center w-full ">
      <Link href="/" className=" w-[40vw] justify-self-start ">
          <Image src="/navbar/Brickly.svg" height={50} width={90} alt="Dēbita" />
        </Link>

        <div className=" w-full justify-end flex">
          <img src="/navbar/Bar.svg" width="30" className="cursor-pointer" onClick={() => setBarActive(true)}/>
        </div>
        {barActive ? 
      <div className="flex flex-col py-5 px-5  fixed top-0 right-0 bottom-0 left-0 bg-white z-10"> 
      <div className="flex justify-end">
        <img src="/universal/back.svg" width="30" className="cursor-pointer justify-self-start" onClick={() => setBarActive(false)}/>
        <div className="w-full px-10 flex justify-end animate-enter-div"> 
        <Image src="/navbar/Brickly.svg" height={50} width={90} alt="Dēbita" />
        </div>

        </div>

        <div className="mt-10 flex flex-col gap-5">
           <a onClick={() => setBarActive(false)} className="rounded-xl  bg-gray-50 px-4 text-center animate-enter-token text-[14.5px] h-12 items-center grid hover:bg-slate-400/10 font-semibold opacity-0 fill-mode-forwards delay" href="#registrarse">Pre-registrate</a> 
           <Link onClick={() => setBarActive(false)} className="rounded-xl  bg-gray-50 px-4 text-center animate-enter-token text-[14.5px] h-12 items-center grid hover:bg-slate-400/10 font-semibold opacity-0 fill-mode-forwards delay" target="_blank" href={equipo}>Equipo</Link> 
           <Link onClick={() => setBarActive(false)} className="rounded-xl  bg-gray-50 px-4 text-center animate-enter-token text-[14.5px] h-12 items-center grid hover:bg-slate-400/10 font-semibold opacity-0 fill-mode-forwards delay" href={contacto} target="_blank">Contacto</Link> 
           <Link onClick={() => setBarActive(false)} className="rounded-xl  bg-gray-50 px-4 text-center animate-enter-token text-[14.5px] h-12 items-center grid hover:bg-slate-400/10 font-semibold opacity-0 fill-mode-forwards delay" href={bricklyTwitter} target="_blank">Twitter</Link> 
           <Link onClick={() => setBarActive(false)} className="rounded-xl  bg-gray-50 px-4 text-center animate-enter-token text-[14.5px] h-12 items-center grid hover:bg-slate-400/10 font-semibold opacity-0 fill-mode-forwards delay-75" href={bricklyInstagram} target="_blank">Instagram</Link> 
           <Link onClick={() => setBarActive(false)} className="rounded-xl  bg-gray-50 px-4 text-center animate-enter-token text-[14.5px] h-12 items-center grid hover:bg-slate-400/10 font-semibold opacity-0 fill-mode-forwards delay-100" href={bricklyTelegram} target="_blank">Telegram</Link>
          </div>
      </div> : ""  
      }

      </div>
      <div className=" flex-row items-center p-4 md:flex hidden">
        <Link href="/" className=" w-[40vw]">
          <Image src="/navbar/Brickly.svg" height={50} width={90} alt="Dēbita" />
        </Link>
        <Link className="px-6 text-center text-[14.5px] h-12 items-center grid hover:bg-slate-400/5 font-semibold" target="_blank" href={equipo}>
          Equipo
        </Link>
        <div className="px-6 text-center text-[14.5px] h-12 items-center grid font-semibold  hover:bg-slate-400/5" >
        <div className="relative inline-block text-left">
  <div onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer gap-1">

      Comunidad
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
  </div>

 {isOpen ?
  <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
    <div className="py-1" role="none">
      <a href={bricklyTwitter} target="_blank" className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-0">Twitter</a>
      <a href={bricklyInstagram} target="_blank" className="text-gray-700 hover:bg-gray-100  block px-4 py-2 text-sm" role="menuitem"  id="menu-item-1">Instagram</a>
      <a href={bricklyTelegram} target="_blank" className="text-gray-700 hover:bg-gray-100  block px-4 py-2 text-sm" role="menuitem"  id="menu-item-1">Telegram</a>
     
    </div>
  </div> : ""}
</div>
        </div>
     
        <Link className="px-4 text-center text-[14.5px] h-12 items-center grid hover:bg-slate-400/5 font-semibold" href={contacto} target="_blank">
          Contacto
        </Link>
      </div>
    <a href="#registrarse" className="md:flex hidden"> 
    <Button content={" Pre-registrate"}  className="bg-black/30 rounded-xl">
   
   </Button>
    </a>
      <div className="flex flex-row justify-between items-center p-4">
  
      </div>
    </nav>
  )
}

export default Nav
