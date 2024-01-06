import Button from "@/components/ui/Button";

export default function Home() {
    return (
        <div className="flex flex-col xl:-ml-10 -mt-10">
            <div className="max-w-9xl py-5 px-20 animate-enter-div">
      <div className="flex flex-col lg:flex-row justify-between items-start  space-y-4 lg:space-y-0 lg:space-x-8 ">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Castelldefels Hotel - Habitación 1</h1>
          <div className="mt-1 text-base text-gray-600 flex gap-2">secured by Hotelier Services <img src="/home/Hotelier.svg" className="w-5"/> </div>
        </div>
        <div className="flex space-x-5 px-10">
        <Button content={"Compartir"}/>
        <Button content={"Estructura legal"} />
         </div>
      </div>
    </div>

    <div className="max-w-9xl py-5 px-20 flex gap-5  animate-enter-div">
      <img src="/hotel-page/Base.png" className="rounded-xl w-[600px] xl:w-[790px]"/>

      <div className="flex flex-col gap-5">
      <img src="/hotel-page/Example1.png" width="4200" className="rounded-xl h-[250px]"/>
      <img src="/hotel-page/Example1.png" width="4200" className="rounded-xl h-[250px]"/>

      </div>
    </div>

    <div className="max-w-9xl py-5 px-20 flex gap-5 relative">
     <div className="flex flex-col gap-10">
       <div className="xl:w-[790px] border h-24 rounded-xl border-brickly100 flex">
       {[1,2,3,4,5].map((item) => (
         (
            <div className="flex-col flex p-5 gap-2 px-8">
         <div>Area</div>
         <div className="flex gap-1"> <img src="/home/icons/building.svg" width="20"/> 200m“ </div>
       </div>
        )
       ))}
       </div>
       <div className="flex flex-col gap-5">
        <div className="font-bold text-xl">About this hotel</div>
        <div className="xl:w-[780px]">HolaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

       </div>
     </div>
     <div className="h-96 flex flex-col  rounded-xl border border-brickly400/50 w-full  ">
        <div className="flex-col flex p-5  gap-5 ">
           <div className="flex-col flex ">
             <div className=" text-sm text-gray-500">Inversión minima</div>
             <div className="flex items-center gap-2 text-sm text-gray-500"> <div className=" font-extrabold text-2xl text-brickly400">100u$d </div> / persona</div>
           </div>
                  <div className="h-20  border-b-2 border-b-brickly400/20">
                  <div className=" bg-brickly400 rounded-lg font-semibold hover:scale-[1.01] cursor-pointer transition-all py-3 text-center text-white ">Invertir ahora</div>
                  </div> 
        
        </div>
        <div className="flex-col flex p-5  gap-1 ">
            <div className="font-bold ">Solicita una reunión online</div>
            <div className="text-gray-500 text-sm ">Es gratis y sin obligación ━ puedes cancelarla cuando quieras</div>
            <div className=" bg-black/60 rounded-lg font-semibold hover:scale-[1.01] cursor-pointer transition-all py-3 text-center text-white mt-2">Solicitar reunión</div>
        </div>


       
     </div>
    </div>

        </div>
    )
}