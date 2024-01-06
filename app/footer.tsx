/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jBAbj6EYiMe
 */
import Link from "next/link"

const bricklyTwitter = "https://twitter.com/BricklyApp";
const bricklyInstagram = "https://www.instagram.com/brickly.app/";
const equipo = "https://brickly.gitbook.io/brickly-info/team/meet-the-team";
const bricklyLinkedin = "https://www.linkedin.com/company/bricklyrealestate/";
const servicios = "https://brickly.gitbook.io/brickly-info/guia-de-usuario/evaluacion-de-inmuebles";

export default function Component() {
  return (
    <footer className="w-full ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 ">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 justify-center ">
 
            <Link href={bricklyTwitter} target="_blank">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href={bricklyInstagram} target="_blank">
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link href={bricklyLinkedin} target="_blank">
              <LinkedinIcon className="h-6 w-6" />
            </Link>

            <Link href={"https://t.me/bricklytelegram"} target="_blank">
              <img src="/universal/Telegram.svg" width="25" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contáctanos</h3>
          <div className="flex items-center space-x-2 justify-center ">
            <MailIcon className="h-6 w-6" />
            <span>hola@brick-ly.com</span>
          </div>
          <div className="flex items-center space-x-2 justify-center ">
            <img src="/universal/Whatsapp.svg" width="25" />
            <span>+54 9 2473-415198</span>
          </div>
        </div>
        <div className="space-y-4 flex flex-col">
          <h3 className="text-lg font-semibold">Links</h3>
          <Link className="text-base hover:underline" href={equipo} target="_blank">
            Nosotros
          </Link>
          <Link className="text-base hover:underline" href={servicios} target="_blank">
            Servicios
          </Link>

     
        </div>
        <div className="space-y-4 flex flex-col">
          <h3 className="text-lg font-semibold">Legal</h3>
          <Link className="text-base hover:underline" href="https://brickly.gitbook.io/brickly-info/politicas/politicas-de-privacidad" target="_blank">
           Política de privacidad
          </Link>
          <Link className="text-base hover:underline" href="https://brickly.gitbook.io/brickly-info/politicas/terminos-y-condiciones" target="_blank">
           Términos & condiciones
          </Link>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700/10 pt-8 text-center">
        <p className="text-sm">&copy; 2024 Brickly</p>
      </div>
    
    </footer>
  )
}






function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
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
  )
}


function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
