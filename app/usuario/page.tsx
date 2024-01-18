export default function UsuarioPage() {
  return (
    <div className="flex gap-5">
      <div className="bg-neutral-50 shadow w-1/4 h-[500px] items-center justify-center rounded-lg flex flex-col">
        <div className=" h-96 flex  flex-col items-center gap-3 justify-center">
          <div className="h-28 w-28 rounded-full bg-black"></div>
          <div className="flex flex-col items-center">
            <div className="font-bold">Julian Perez</div>
            <div className="text-sm text-gray-500">
              julianperez123@gmail.com
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col w-full px-6 text-gray-500  gap-3">
          <div className="w-full px-4 py-3 flex gap-5 hover:bg-neutral-100 ">
            <img src="/panel/id.svg" width="20" />
            Mi perfil
          </div>
          <div className="w-full px-4 py-3 flex gap-5  border-l-4 border-brickly500  hover:bg-neutral-100 ">
            <img src="/panel/id.svg" width="20" />
            Identidad
          </div>

          <div className="w-full px-4 py-3 flex gap-5  hover:bg-neutral-100 ">
            <img src="/panel/id.svg" width="20" />
            Notificaciones
          </div>

          <div className="w-full px-4 py-3 flex gap-5  hover:bg-red-100 bg-red-100/80 font-semibold text-red-500 rounded-lg">
            <img src="/panel/exit.svg" width="20" />
            Cerrar sesión
          </div>
        </div>
      </div>
      <div className="bg-neutral-50 flex flex-col gap-5 shadow w-3/4 h-[500px] rounded-lg p-8">
        <div className="flex flex-col h-3/4 border-b-2 border-neutral-200/80 gap-5">
          <div className="font-semibold text-xl">Identidad</div>
          <div className="flex">
            <div className="flex gap-5 w-full">
              <div className="h-12 w-12 rounded-lg bg-orange-100"></div>
              <div className="flex-col flex">
                <div className="font-semibold"> Verificación de e-mail</div>
                <div className="text-sm text-gray-500">
                  {" "}
                  Requerido para abrir tu cuenta en Brickly
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end pr-5">
              <div className="h-10 w-36 bg-green-100 flex items-center justify-center rounded font-semibold text-green-700">
                Completado
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex gap-5 w-full">
              <div className="h-12 w-12 rounded-lg bg-pink-100"></div>
              <div className="flex-col flex">
                <div className="font-semibold"> Verificación identidad</div>
                <div className="text-sm text-gray-500">
                  {" "}
                  Cumplimiento regulatorio{" "}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end pr-5">
              <div className="h-10 w-36 bg-black/80 flex items-center justify-center rounded text-white font-semibold">
                Verificarte
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-400">
          Los datos requeridos se utilizarán únicamente para garantizar la
          seguridad y el cumplimiento de las leyes y regulaciones.{" "}
        </div>
      </div>
    </div>
  );
}
