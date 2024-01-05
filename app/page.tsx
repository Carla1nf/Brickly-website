
"use client"
import Form from '@/components/form';
import { Button } from '@radix-ui/themes';
import React, { useState } from 'react';

export default function Home() {
    const [formActive, setFormActive] = useState(false);
    return (
        <div>
            <div className="bg-gradient-radial font-sans w-screen bg-[radial-gradient(50.40%_43.55%_at_50.66%_46.29%,rgba(255,98,28,0.2)_10%,rgba(255,255,255,1)_100%)] md:h-[70vh] h-auto">
                <div className="md:h-[70vh] animate-enter-div">
                    <div className="xl:ml-20 flex-col md:flex md:flex-row items-center">
                        <div className="space-y-6 grid items-center text-center sm:text-start justify-center md:justify-start md:items-start">
                            <div>
                                <h1 className="sm:text-7xl min-[350px]:text-5xl text-4xl font-bold">Invierte en tu </h1>
                                <h1 className="font-extrabold text-transparent sm:text-7xl min-[350px]:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">hotel favorito</h1>
                            </div>
                            <p className="sm:text-xl text-xs text-gray-600 md:w-auto">desde 100 USD y recibe retornos  en tiempo real</p>
                            <div className="flex sm:flex-row flex-col sm:space-x-4 sm:gap-0 gap-5 max-w-92">
                                <Button size='3' color='tomato' variant='soft' className="bg-black font-semibold rounded-lg text-white h-10  cursor-pointer transition-all" >
                                    <a onClick={() => setFormActive(true)} href="#registrarse">Pre-registrarse</a>
                                </Button>
                                <Button size='3' color='tomato' variant='soft' className="bg-black font-semibold rounded-lg transition-all text-white h-10  cursor-pointer">

                                    <span>Descubre como invertir</span>
                                </Button>
                            </div>
                        </div>

                        <div className="flex space-x-4 xl:ml-60 lg:ml-44 md:ml-32 relative scale-[0.75] lg:scale-[0.95] xl:scale-[1] justify-center lg:justify-start">
                            <div className='rounded-full bg-gradient-to-br relative from-orange-400/40 to-pink-400/40  h-96 w-96 '>
                                
                           

                                <div className='w-44 rounded-xl flex gap-3 items-center justify-center animate-bounce-1 delay-500 bg-white shadow-2xl border-black absolute top-36 -left-10 h-16'>
                                    <div className='bg-orange-400 h-11 w-12 rounded grid items-center justify-center'>
                                        <img src='/home/icons/room.svg' className='w-[35px]' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='font-bold text-xl'>+15</div>
                                        <div className='text-gray-500 -mt-1'>Habitaciones</div>
                                    </div>
                                </div>

                                <div className='w-48 rounded-xl flex gap-3 items-center justify-center   shadow-2xl bg-white border-black absolute bottom-6 -right-10 h-16 animate-bounce-1'>
                                    <div className='bg-pink-500 h-11 w-12 rounded grid items-center justify-center'>
                                        <img src='/home/icons/office.svg' className='w-[35px]' />

                                    </div>
                                    <div className='flex flex-col'>
                                    <div className='font-bold text-xl'>+4.1M</div>
                                        <div className='text-gray-500 -mt-1'>Valor en activos</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
            <div className='flex flex-col max-w-7xl mx-auto xl:ml-20 gap-10'>
                <div className='font-semibold sm:text-3xl min-[350px]:text-2xl text-xl text-center sm:text-start '>Plataforma #1 de tokenización hotelera</div>
                <div className='flex sm:flex-row flex-col sm:text-start text-center items-center gap-10'>
                   {[["Internacional", "world", "bg-orange-50", "Inversión sin fronteras. Opera con hoteles en todo el mundo desde cualquier parte. Accedé a un mercado hotelero global."], ["Seguridad", "secure", "bg-red-50", "Contamos con un equipo legal especializado y un sistema de blockchain para garantizar la transparencia de tus operaciones."],["Rapidez", "shield", "bg-violet-50", "Mayor accesibilidad, sin burocracia, ni complicaciones. En no más de un minuto, ya puedes convertirte en un inversor global de hoteles."] , ["Solidez", "home", "bg-pink-50", "Garantizamos solidez jurídica y eficacia en cada inversión por medio de un sistema de tokenización respaldado por una LLC en EE. UU. "]].map((item) => {
                    return (
                        <div className='h-72 w-64 bg-gradient-to-tr flex flex-col items-center sm:items-start gap-3'>
                        <div className={`p-4 h-20 w-20 rounded-full shadow-lg ${item[2]}`}>
                        <img  src={`/home/icons/${item[1]}.svg`} height="200" width="100" />
                        </div>
                        <div className='p-2 font-bold text-lg'>{item[0]}</div>
                        <div className='p-2 text-gray-400 text-sm font-normal'>{item[3]}</div>

                    </div>

                    )
                   })}
                  

         
                </div>

            </div>
           
  

            <div className='grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 mt-20 items-center gap-16  '  id='registrarse'>
                <div className='sm:p-8 justify-self-center relative '>
                    <img height="400" width="440" className='shadow rounded-xl ' src='/Prueba.png' />
                    <div className='bg-neutral-500/60 absolute sm:bottom-14 sm:left-16 bottom-0  left-0 sm:h-20  lg:w-[32vw] lg:max-w-[370px] w-[100vw] max-w-[370px] rounded-xl backdrop-blur-md flex flex-row  text-white '>
                        <div className='flex flex-col p-3 sm:scale-100 scale-[0.85]'> <div className='text-gray-100'>Inversión minima</div> <div className="font-bold flex items-end sm:h-20 content-end gap-2 "> <img width="24" src='/tokens/usdt.svg' /> 100 USDT</div> </div>

                        <div className='flex flex-col p-3 xl:ml-20 sm:ml-10 gap-2 sm:scale-100 scale-[0.85]'> <div className='text-gray-100'>Empieza en</div> <div className="font-bold flex items-end sm: content-end gap-2 ">29d 12h 30m</div> </div>
                    </div>
                </div>

                <div className='flex flex-col gap-6 max-w-[460px] lg:justify-self-start text-center items-center  lg:items-start justify-self-center lg:text-start'>
                   {formActive ? 
                   <>
                   <img onClick={() => setFormActive(false)} src='/universal/back.svg' className=' cursor-pointer absolute -mt-10' width='23'/>
                    <Form />
                   </>
                   : 
                   <>
                    <div className='font-bold  sm:text-3xl min-[350px]:text-2xl text-xl'>Castelldefels Hotel - Hab. 1</div>
                    <div className='text-gray-400 sm:text-base text-sm w-[85vw] sm:w-auto'>Localizado en esta zona prestigiosa sobre la peatonal de Castelldefels y con una ubicación privilegiada a solo 120 metros del mar Mediterráneo, este hotel es una opción atractiva para aquellos que buscan invertir en el mercado hotelero en una zona turística de alta demanda.</div>
                    <div className='flex gap-4 items-end'> <div className='text-green-500 font-bold text-2xl '>8,32%</div> <div className='text-gray-500'>Retorno anual estimado</div> </div>
                    <div className='flex gap-5 animate-enter-div'>
                        <div className='bg-orange-200 h-12 w-12 rounded-full'></div>
                        <div className='flex flex-col'>
                            <div className='text-gray-500'>Monto a recaudar</div>
                            <div className='text-black font-bold text-lg -mt-1'>U$D10,000</div>
                            <div className="mt-3 sm:w-[340px] bg-gray-200 rounded-full dark:bg-gray-700">
                           <div className=" bg-gradient-to-r from-orange-400 to-pink-500 text-xs font-medium text-blue-100 text-center leading-none rounded-full w-0 h-2"></div>
                          </div>
                        </div>

                    </div>
                    <div className='sm:flex-row flex-col flex mt-3 gap-3'>
                        <Button onClick={() => setFormActive(true)} size='3' color='tomato' variant='soft' className="bg-black font-semibold rounded-lg text-white h-10  cursor-pointer transition-all w-40" >Pre-registrate </Button>

                        <Button  size='3' color='tomato' variant='soft' className="bg-black font-semibold rounded-lg text-white h-10  cursor-pointer transition-all w-40" >Mas información</Button>
                    </div>
                   </>
                   }
                   

                


                </div>

            </div>

           <div className='flex flex-col xl:p-5 xl:ml-16 items-center lg:items-start  mt-16 gap-10 text-center sm:text-start'>
          <div className=' font-semibold sm:text-3xl min-[350px]:text-2xl text-xl  '>Beneficios de tokenización</div>
          <div className='-mt-8 text-gray-500 text-sm sm:text-base'>No es necesario ser un profesional para invertir como uno</div>
          <div className='flex flex-col gap-10'>
          <div className='flex lg:flex-row flex-col items-center lg:items-start lg:gap-3 gap-16'>
          <div className='xl:w-[600px] w-[550px] bg-gradient-to-tr rounded-lg  h-[400px]'>
            <div className='flex flex-col items-center lg:items-start h-[400px] p-3 gap-3'>
           {[["Acceso Global:", "Diversifica tu cartera con proyectos exclusivos conectando con destinos únicos y rentables en todo el mundo."],["Seguridad Jurídica:", "Confiabilidad y seguridad jurídica respaldada con transparencia."],["Rendimiento Sostenible:", "Carteras duraderas para maximizar tu éxito financiero a largo plazo."]].map((item) => {
            return(
                <div className='p-1 font-bold text-xl flex flex-col w-[400px] gap-2 '>
                <div className='flex items-center  justify-center lg:justify-start gap-4'>
                    
                <div className='p-3 h-12 w-12 rounded-full bg-orange-50 shadow-lg'>
                 <img src='/home/icons/chart.svg' height="200" width="100"/>
                    </div>
                    <div className='font-semibold'>{item[0]}</div>
                    </div>
                <div className='text-sm text-gray-500 p-1 font-normal'>{item[1]}</div>

            </div>
            )
           })}
          

            </div>
          </div>
          <div className='w-[450px] items-center justify-center flex relative bg-gradient-to-tr rounded-lg h-[450px] -mt-16'>
            <img className=' shadow-2xl lg:absolute'  src='/Prueba.png' width="350"/>
            <img className='absolute shadow-2xl z-10 -bottom-10 -right-20 lg:block hidden'  src='/Prueba.png' width="350"/>

          </div>

          </div>
          
          
            
            

          </div>
           </div>
            

            <div className='flex flex-col sm:p-5 xl:ml-16  mt-10 gap-10'>
                <div className='font-semibold text-3xl ml-1 text-center sm:text-start'>Nuestras alianzas</div>
                <div className="flex sm:flex-row flex-col items-center sm:items-start"> 
   {[["Hotelier Services", "España", "Con proyectos significativos en Argentina y España, junto con más de 20 años de experiencia en gestión hotelera nacional e internacional, Hotelier Services destaca en el análisis y viabilidad económica centrado en el desarrollo, comercialización y gestión de proyectos hoteleros y condo hoteles. "], ["Start Fellowship", "Suiza", "Impulsa y capacita a la próxima generación de empresarios para que todos tengan la oportunidad de estar en el lugar adecuado en el momento adecuado. A través de eventos anuales facilita conexiones entre jóvenes empresarios, inversores líderes y mentores globales."]].map((alianza, index) => {
    return(
      <div className={`sm:w-[350px] cursor-pointer relative flex flex-col ml-5 rounded-md sm:h-80  hover:bg-slate-300/20`}>
        <div className=" w-20 text-center text-sm  grid items-center absolute right-10 bg-black rounded mt-5 text-white h-8">{alianza[1]}</div>
      <img height="90" width="90" className="p-4"  src={`${!index ? "/home/Hotelier.svg" : "/home/Start.svg"}`} />
      <div className="p-4 font-bold text-xl -mt-3">{alianza[0]}</div>
      <div className="p-4 font-semibold text-sm text-gray-400 -mt-3">{alianza[2]}</div>
  
      </div>
    )
   })}
   </div>

            </div>
        </div>
    )
}