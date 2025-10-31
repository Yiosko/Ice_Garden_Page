import { useState } from "react";
import Mapa from "./mapa/Mapa";
import MariposaSVG from "../../assets/ubicacion/MariposaSVG";
import PinguinoSVG from "../../assets/ubicacion/PinguinoSVG";

function Home() {
  const sucursales = [
    {
      id: 1,
      nombre: "Ice Garden - Leparc - Sevilla",
      ubicacion: [2.937407, -75.29195],
      description:
        "¡Local Ice Garden! 🗺️ <br /> Cra. 5a #21a-87<br /> Sevilla",
    },
    {
      id: 2,
      nombre: "Ice Garden - San Pedro Plaza",
      ubicacion: [2.952201, -75.28696],
      description:
        "¡Local Ice Garden! 🗺️ <br /> Cra. 8a #38-42<br /> Granjas",
    },
    {
      id: 3,
      nombre: "Ice Garden - Rivera",
      ubicacion: [2.77741, -75.257384],
      description: "¡Local Ice Garden! 🗺️ <br /> Cl. 3 #6-2<br /> Parque Central",
    },
    {
      id: 4,
      nombre: "Ice Garden - Garzón",
      ubicacion: [2.195061, -75.615907],
      description: "",
    },
  ];

  const [description, setDescription] = useState(sucursales[0].description);
  const [ubicacion, setUbicacion] = useState(sucursales[0].ubicacion);
  const [botonUbi, setBoton] = useState(sucursales[0].id);

  return (
    <div className="relative flex flex-row bg-[#F7E8E4] justify-center items-center min-h-screen w-full overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[30vw] opacity-80 z-0">
        <MariposaSVG className="w-full h-auto" />
      </div>

      <div className="absolute top-0 right-0 w-[25vw] opacity-90 z-0">
        <PinguinoSVG className="w-full h-auto" />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full z-10 relative">
        <div className="m-5">
          <Mapa
            className="w-[80vw] md:w-[50vw] h-[70vh] opacity-95 rounded-xl shadow-lg"
            ubicacion={ubicacion}
            description={description}
          />
        </div>

            <div className="relative min-w-[35vw] h-[30vh] md:h-[70vh] rounded-xl shadow-lg">
            {/* Fondo blanco translúcido fijo */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl z-0"></div>

            {/* Contenedor desplazable encima del fondo */}
            <div className="relative z-10 p-4 overflow-y-auto h-full">
                {sucursales.map((sucursal) => (
                <div key={sucursal.id} className="mb-6 border-b pb-3 border-gray-200">
                    <h2 className="text-cyan-500 text-2xl mb-1 font-semibold">
                    {sucursal.nombre}
                    </h2>
                    <div className="flex justify-center items-center">
                    <span className="text-xl text-black mr-3">Seguir:</span>
                    <button
                        className={`transition-all duration-200 rounded-md px-3 py-1 text-white font-medium ${
                        botonUbi === sucursal.id
                            ? "bg-cyan-400 opacity-70 cursor-not-allowed"
                            : "bg-cyan-600 hover:bg-cyan-500"
                        }`}
                        onClick={() => {
                        setUbicacion(sucursal.ubicacion);
                        setBoton(sucursal.id);
                        setDescription(sucursal.description);
                        }}
                    >
                        Ver ubicación
                    </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
    </div>
  );
}

export default Home;
