"use client"

import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useState } from "react";

export default function Form () {
     const [email, setEmail] = useState("");
     const [name, setName] = useState("");   
     const [lastname, setLastname] = useState("");
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [success, setIsSuccess] = useState(false);
    
     const handleSubmit = async () => {
     setIsSubmitting(true);
     // post with axios
     console.group("sending Data")
     const data = await axios.post("https://a3yvs010od.execute-api.us-east-1.amazonaws.com/dev/store-data", {
         email: email,
         name: name,
         lastname: lastname,
     });
     await new Promise(r => setTimeout(r, 1000));
     setEmail("");
     setName("");
     setLastname("");
     setIsSubmitting(false);
     setIsSuccess(true);
     }


    return (
        <>
        <div className="font-bold text-2xl">Pre-Registrarse</div>
        <div className="font-normal text-gray-500 w-[85vw] sm:w-auto">¡Suscríbete para información exclusiva sobre inversiones con Brickly y asegura tu lugar en la primera ronda al pre-registrarte!</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" type="email" className=" px-4 py-4 sm:w-96  w-64 rounded-xl bg-gray-100 animate-enter-token delay-100 fill-mode-forwards opacity-0"/>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" className=" px-4 py-4 rounded-xl bg-gray-100 animate-enter-token delay-200 fill-mode-forwards opacity-0"/>
            <input value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Apellido" className=" px-4 py-4 rounded-xl bg-gray-100 animate-enter-token delay-300 fill-mode-forwards opacity-0"/>
            {success ? 
                <Button className="bg-green-400 font-semibold rounded-lg text-white h-10  cursor-pointer transition-all" color="tomato" variant='soft' size='3' disabled={isSubmitting}>¡Revisa tu e-mail! </Button> : 
                <Button type="button" className={`bg-black font-semibold rounded-lg text-white h-10  cursor-pointer transition-all ${isSubmitting ? "opacity-50" : ""}`} onClick={() => handleSubmit()} >Pre-registrarse {isSubmitting ?  <img src="universal/spinner.svg" width="25" className=" animate-spin"/>  : ""} </Button>
              }
          

        </form>
        
        </>
    )
}