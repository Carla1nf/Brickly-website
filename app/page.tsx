
"use client"
import Form from '@/components/form';
import { Button } from '@radix-ui/themes';
import React, { useState } from 'react';

export default function Home() {
    const [formActive, setFormActive] = useState(false);
    return (
        <div>
            <div className="bg-gradient-radial font-sans w-screen bg-[radial-gradient(50.40%_43.55%_at_50.66%_46.29%,rgba(255,98,28,0.2)_10%,rgba(255,255,255,1)_100%)] h-[70vh]">
                <div className="h-[70vh] min-w-min animate-enter-div">
                    <div className="xl:ml-20 flex items-center">
                        <div className="space-y-6">
                            <div>
                                <h1 className=" text-7xl font-bold">Invierte en tu </h1>
                                <h1 className="font-extrabold text-transparent  text-7xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">hotel favorito</h1>
                            </div>
                            <p className="text-xl text-gray-600">desde 100 USD y recibe retornos  en tiempo real</p>
                            <div className="flex space-x-4">
                                <Button size='3' color='tomato' variant='soft' className="bg-black font-semibold rounded-lg text-white h-12  cursor-pointer transition-all" >
                                    <a onClick={() => setFormActive(true)} href="#registrarse">Pre-registrarse</a>
                                </Button>
                                <Button size='3' color='tomato' variant='soft' className="bg-black font-semibold rounded-lg transition-all text-white h-12  cursor-pointer">

                                    <span>Descubre como invertir</span>
                                </Button>
                            </div>
                        </div>

                        <div className="flex space-x-4 md:ml-60 relative">
                            <div className='rounded-full bg-gradient-to-br relative from-orange-400/40 to-pink-400/40  h-96 w-96 '>
                                
                          
                                <div className='w-44 rounded-xl flex gap-5 items-center justify-center animate-bounce-1 delay-500 bg-white shadow-2xl border-black absolute top-36 -left-10 h-16'>
                                    <div className='bg-orange-400 h-11 w-12 rounded '></div>
                                    <div className='flex flex-col'>
                                        <div className='font-bold text-xl'>+50</div>
                                        <div className='text-gray-500'>hotelessss</div>
                                    </div>
                                </div>

                                <div className='w-44 rounded-xl flex gap-5 items-center justify-center   shadow-2xl bg-white border-black absolute bottom-6 -right-10 h-16 animate-bounce-1'>
                                    <div className='bg-pink-500 h-11 w-12 rounded'></div>
                                    <div className='flex flex-col'>
                                        <div className='font-bold text-xl'>+50</div>
                                        <div className='text-gray-500'>hotelessss</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
            <div className='flex flex-col max-w-7xl mx-auto xl:ml-20 gap-10'>
                <div className='font-semibold text-3xl'>Plataforma #1 de tokenización hotelera</div>
                <div className='flex items-center gap-10'>
                   {[["Internacional", "world", "bg-orange-50"], ["Seguridad", "secure", "bg-red-50"],["Flexibilidad", "shield", "bg-violet-50"] , ["Solidez", "home", "bg-pink-50"]].map((item) => {
                    return (
                        <div className='h-72 w-64 bg-gradient-to-tr flex flex-col gap-3'>
                        <div className={`p-4 h-20 w-20 rounded-full shadow-lg ${item[2]}`}>
                        <img  src={`/home/icons/${item[1]}.svg`} height="200" width="100" />
                        </div>
                        <div className='p-2 font-bold text-lg'>{item[0]}</div>
                        <div className='p-2 text-gray-400 text-sm font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

                    </div>

                    )
                   })}
                  

         
                </div>

            </div>
           
  

            <div className='grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 mt-20 items-center lg:gap-16 xl:ml-12'  id='registrarse'>
                <div className='p-8 relative '>
                    <img height="400" width="440" className='shadow rounded-xl ' src='/Prueba.png' />
                    <div className='bg-neutral-500/60 absolute bottom-14 left-16 h-20 w-[370px] rounded-xl backdrop-blur-md flex text-white '>
                        <div className='flex flex-col p-3'> <div className='text-gray-100'>Inversión minima</div> <div className="font-bold flex items-end h-20 content-end gap-2 "> <img width="24" src='/tokens/usdt.svg' /> 100 USDT</div> </div>

                        <div className='flex flex-col p-3 ml-20'> <div className='text-gray-100'>Empieza en</div> <div className="font-bold flex items-end h-20 content-end gap-2 ">29d 12h 30m</div> </div>
                    </div>
                </div>

                <div className='flex flex-col gap-6 max-w-[460px] justify-self-start'>
                   {formActive ? 
                   <>
                   <img onClick={() => setFormActive(false)} src='/universal/back.svg' className=' cursor-pointer absolute -mt-10' width='23'/>
                    <Form />
                   </>
                   : 
                   <>
                    <div className='font-bold  text-3xl'>Castelldefels Hotel - Hab. 10</div>
                    <div className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className='flex gap-4 items-end'> <div className='text-green-500 font-bold text-2xl '>8,32%</div> <div className='text-gray-500'>Retorno anual estimado</div> </div>
                    <div className='flex gap-5 animate-enter-div'>
                        <div className='bg-orange-200 h-12 w-12 rounded-full'></div>
                        <div className='flex flex-col'>
                            <div className='text-gray-500'>Monto a recaudar</div>
                            <div className='text-black font-bold text-lg -mt-1'>U$D10,000</div>
                            <div className="mt-3 w-[340px] bg-gray-200 rounded-full dark:bg-gray-700">
                           <div className=" bg-gradient-to-r from-orange-400 to-pink-500 text-xs font-medium text-blue-100 text-center leading-none rounded-full w-[200px] h-2"></div>
                          </div>
                        </div>

                    </div>
                    <div className='flex mt-3 gap-3'>
                        <Button onClick={() => setFormActive(true)} size='3' color='tomato' variant='soft' className="bg-black font-semibold rounded-lg text-white h-10  cursor-pointer transition-all w-40" >Pre-registrate </Button>

                        <Button  size='3' color='tomato' variant='soft' className="bg-black font-semibold rounded-lg text-white h-10  cursor-pointer transition-all w-40" >Mas información</Button>
                    </div>
                   </>
                   }
                   

                


                </div>

            </div>

           <div className='flex flex-col p-5 xl:ml-16  mt-16 gap-10'>
          <div className=' font-semibold text-3xl'>Beneficios de tokenización</div>
          <div className='-mt-8 text-gray-500'>No es necesario ser un profesional para invertir como uno</div>
          <div className='flex flex-col gap-10'>
          <div className='flex gap-3'>
          <div className='w-[600px] bg-gradient-to-tr rounded-lg  h-[400px]'>
            <div className='flex flex-col  justify-center h-[400px] p-3 gap-3'>
           {[1,2,3].map((item) => {
            return(
                <div className='p-1 font-bold text-xl flex flex-col w-[400px] gap-2 '>
                <div className='flex items-center gap-4'>
                    
                <div className='p-3 h-12 w-12 rounded-full bg-orange-50 shadow-lg'>
                 <img src='/home/icons/chart.svg' height="200" width="100"/>
                    </div>
                    <div className='font-semibold'>Tokenización de activos</div>
                    </div>
                <div className='text-sm text-gray-500 p-1 font-normal'>Lorem ipsum dolor sit amet consectetur adipiscing elit, consequat potenti etiam at </div>

            </div>
            )
           })}
          

            </div>
          </div>
          <div className='w-[450px] relative bg-gradient-to-tr rounded-lg h-[450px] -mt-16'>
            <img className='absolute shadow-2xl '  src='/Prueba.png' width="350"/>
            <img className='absolute shadow-2xl z-10 -bottom-10 -right-20'  src='/Prueba.png' width="350"/>

          </div>

          </div>
          
          
            
            

          </div>
           </div>
            

            <div className='flex flex-col p-5 xl:ml-16  mt-10 gap-10'>
                <div className=' font-semibold text-3xl ml-1'>Nuestras alianzas</div>
                <div className="flex"> 
   {[["Hotelier Services", "España"], ["Start Fellowship", "Suiza"]].map((alianza, index) => {
    return(
      <div className={`w-[350px] cursor-pointer relative flex flex-col ml-5 rounded-md h-80  hover:bg-slate-300/20`}>
        <div className=" w-20 text-center text-sm  grid items-center absolute right-10 bg-black rounded mt-5 text-white h-8">{alianza[1]}</div>
      <img height="90" width="90" className="p-4"  src={`${!index ? "/home/Hotelier.svg" : "/home/Start.svg"}`} />
      <div className="p-4 font-bold text-xl -mt-3">{alianza[0]}</div>
      <div className="p-4 font-semibold text-sm text-gray-400 -mt-3">Lorem ipsum dolor sit amet consectetur adipiscing elit, consequat potenti etiam at suspendisse blandit donec aptent, lectus venenatis bibendum facilisis accumsan euismod. Scelerisque penatibus potenti per mauris volutpat nam nullam</div>
  
      </div>
    )
   })}
   </div>

            </div>
        </div>
    )
}