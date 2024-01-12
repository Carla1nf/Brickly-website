import Event from "@/components/Event";
import Stat from "@/components/Stat";
import InvestmentRow from "@/components/InvestmentDashboard";

export default function PanelPage() {
  return (
    <>
      <div className="flex flex-col items-center md:pr-5 gap-8">
        <div className="flex md:flex-row flex-col w-10/12 md:w-full md:gap-6 gap-2">
          <Stat value={"2.00"} title={"Renta generada"} extra="USD" />
          <Stat value={"178.00"} title={"Ganancia historica"} extra="USD" />
          <Stat value={"1,302.00"} title={"Inversión total"} extra="USD" />
        </div>

        <div className="flex gap-8 w-full">
          <div className="bg-neutral-50 shadow p-5 flex gap-5 flex-col rounded w-2/3 h-80">
            <div className="font-semibold">Tus inversiones</div>
            <div className="flex font-semibold text-gray-400 text-sm border-b border-gray-200 pb-2">
              <div className="w-1/3">Hotel</div>
              <div className="w-1/3">Invertido</div>
              <div className="w-1/3">Proceso</div>
            </div>
            <InvestmentRow id={0} />
          </div>
          <div className="bg-neutral-50 shadow p-5 flex flex-col rounded w-[32%] gap-6">
            <div className="font-semibold">Eventos</div>
            <div className="flex flex-col justify-center items-center">
              <Event
                extra="USD 30.34"
                tiempo="22 DEC, 10:23 PM"
                tipo="Reclamo"
              />
              <div className="ml-6 w-full h-5 border-l-2 border-neutral-200"></div>
              <Event
                extra="Castelldefels Hotel"
                tiempo="22 NOV, 09:56 PM"
                tipo="Inicio"
              />
              <div className="ml-6 w-full h-5 border-l-2 border-neutral-200"></div>
              <Event
                extra="Castelldefels Hotel"
                tiempo="09 OCT, 09:56 PM"
                tipo="Preparación"
              />
              <div className="ml-6 w-full h-5 border-l-2 border-neutral-200"></div>
              <Event
                extra="Order #239220"
                tiempo="01 OCT, 11:20 AM"
                tipo="Exito"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
