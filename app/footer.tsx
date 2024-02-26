"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jBAbj6EYiMe
 */
import Link from "next/link";
import { translateText } from "@/lib/translate";

const bricklyTwitter = "https://twitter.com/BricklyApp";
const bricklyInstagram = "https://www.instagram.com/brickly.app/";
const equipo = "https://brickly.gitbook.io/brickly-info/team/meet-the-team";
const bricklyLinkedin = "https://www.linkedin.com/company/bricklyrealestate/";
const servicios =
  "https://brickly.gitbook.io/brickly-info/guia-de-usuario/evaluacion-de-inmuebles";

export default function Component() {
  return (
    <footer className="w-full ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 ">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 justify-center ">
            <Link href={bricklyTwitter} target="_blank">
              <img src="/universal/twitter.svg" width="25" />
            </Link>
            <Link href={bricklyInstagram} target="_blank">
              <img src="/universal/instagram.svg" width="25" />
            </Link>
            <Link href={bricklyLinkedin} target="_blank">
              <img src="/universal/linkedin.svg" width="25" />
            </Link>

            <Link href={"https://t.me/bricklytelegram"} target="_blank">
              <img src="/universal/Telegram.svg" width="25" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            {translateText({ text: "Contáctanos" })}
          </h3>
          <div className="flex items-center space-x-2 justify-center ">
            <MailIcon className="h-6 w-6" />
            <span>hola@brick-ly.com</span>
          </div>
          <div className="flex items-center space-x-2 justify-center ">
            <img src="/universal/Whatsapp.svg" width="25" />
            <span>+54 9 2473-415198</span>
          </div>

          <a
            className="flex items-center space-x-2 justify-center"
            href="https://www.google.com/maps/place/Rosenbergstrasse+51,+9000+St.+Gallen/@47.4227104,9.3679353,18.09z/data=!4m6!3m5!1s0x479b1e4a768c8833:0x24c7dd9ff0115a45!8m2!3d47.4234977!4d9.3685944!16s%2Fg%2F11c4wjgnl0?entry=ttu"
            target="_blank"
          >
            <img src="/universal/Maps.svg" width="25" />
            <span>Rosenbergstrasse 51, St.Gallen </span>
          </a>
        </div>
        <div className="space-y-4 flex flex-col">
          <h3 className="text-lg font-semibold">
            {" "}
            {translateText({ text: "Mas información" })}
          </h3>
          <Link
            className="text-base hover:underline"
            href={equipo}
            target="_blank"
          >
            {translateText({ text: "Nosotros" })}
          </Link>
          <Link
            className="text-base hover:underline"
            href={servicios}
            target="_blank"
          >
            {translateText({ text: "Servicios" })}
          </Link>
        </div>
        <div className="space-y-4 flex flex-col">
          <h3 className="text-lg font-semibold">Legal</h3>
          <Link
            className="text-base hover:underline"
            href="https://brickly.gitbook.io/brickly-info/politicas/politicas-de-privacidad"
            target="_blank"
          >
            {translateText({ text: "Política de privacidad" })}
          </Link>
          <Link
            className="text-base hover:underline"
            href="https://brickly.gitbook.io/brickly-info/politicas/terminos-y-condiciones"
            target="_blank"
          >
            {translateText({ text: "Términos & condiciones" })}
          </Link>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700/10 pt-8 text-center">
        <p className="text-sm">&copy; 2024 Brickly</p>
      </div>
    </footer>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
