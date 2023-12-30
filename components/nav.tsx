"use client"; 

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

function Nav () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8">
      <div className="flex flex-row items-center p-4">
        <Link href="/" className=" w-[40vw]">
          <Image src="/navbar/Brickly.svg" height={50} width={90} alt="Dēbita" />
        </Link>
        <Link className="px-6 text-center text-[14.5px] h-12 items-center grid hover:bg-slate-400/5 font-semibold" href="/">
          Quienes somos
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
      <a href="#" className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-0">Twitter</a>
      <a href="#" className="text-gray-700 hover:bg-gray-100  block px-4 py-2 text-sm" role="menuitem"  id="menu-item-1">Instagram</a>
      <a href="#" className="text-gray-700 hover:bg-gray-100  block px-4 py-2 text-sm" role="menuitem"  id="menu-item-1">Telegram</a>
     
    </div>
  </div> : ""}
</div>
        </div>
        <Link className="px-6 text-center text-[14.5px] font-semibold h-12 items-center grid hover:bg-slate-400/5" href="/">
          Marketplace
        </Link>
        <a
          className="px-6 text-center text-[14.5px] font-semibold flex items-center gap-1 "
          href="https://paintswap.finance/marketplace/fantom/collections/0xCD2A61Da5Ef804C3D55636335F9c7482282571Dc"
          target="_blank"
          rel="noreferrer nofollow"
        >
          Contacto
        </a>
      </div>
      <Link className="px-4 text-center text-[14.5px] h-12 items-center grid hover:bg-slate-400/5 font-semibold" href="/">
        Invierte Ahora
      </Link>
      <div className="flex flex-row justify-between items-center p-4">
  
      </div>
    </nav>
  )
}

export default Nav
