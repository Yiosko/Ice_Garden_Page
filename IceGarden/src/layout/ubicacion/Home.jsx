import { useState } from "react";
import Mapa from "./mapa/Mapa";

function Home () {
    const [ubicacion, setUbicacion] = useState([]);
    const [botonUbi, setBoton] = useState(1);

    return(<>
        <div className="flex flex-row bg-[#F7E8E4] justify-center items-center min-h-screen w-full">
            <div className="m-5 z-0">
                <Mapa className="w-[50vw] h-[70vh]" />
            </div>

            <div className="w-[35vw] h-[70vh] bg-white">
                <div className="m-4">
                    <h2 className="text-cyan-500 text-3xl mb-2">Ice Garden - Leparc - Sevilla</h2>
                    <span className="text-2xl text-black mr-2">Seguir:</span>
                    <button className={`bg-cyan-500 p-2 ${botonUbi === 1 ? 'opacity-50' : 'opacity-100'}`}
                            onClick={()=> {
                                    setUbicacion([2.937407, -75.291950]);
                                    setBoton(1);
                            }}
                    >
                        Ubicacion
                    </button>
                </div>
                <div className="m-4">
                    <h2 className="text-cyan-500 text-3xl mb-2">Ice Garden - San Pedro Plaza</h2>
                    <span className="text-2xl text-black mr-2">Seguir:</span>
                    <button className={`bg-cyan-500 p-2 ${botonUbi === 2 ? 'opacity-50' : 'opacity-100'}`}
                            onClick={()=> {
                                    setUbicacion([2.937407, -75.291950]);
                                    setBoton(2);
                            }}
                    >
                        Ubicacion
                    </button>
                </div>
                <div className="m-4">
                    <h2 className="text-cyan-500 text-3xl mb-2">Ice Garden - Rivera</h2>
                    <span className="text-2xl text-black mr-2">Seguir:</span>
                    <button className={`bg-cyan-500 p-2 ${botonUbi === 3 ? 'opacity-50' : 'opacity-100'}`}
                            onClick={()=> {
                                    setUbicacion([2.937407, -75.291950]);
                                    setBoton(3);
                            }}
                    >
                        Ubicacion
                    </button>
                </div>
                <div className="m-4">
                    <h2 className="text-cyan-500 text-3xl mb-2">Ice Garden - Garzón</h2>
                    <span className="text-2xl text-black mr-2">Seguir:</span>
                    <button className={`bg-cyan-500 p-2 ${botonUbi === 4 ? 'opacity-50' : 'opacity-100'}`}
                            onClick={()=> {
                                    setUbicacion([2.937407, -75.291950]);
                                    setBoton(4);
                            }}
                    >
                        Ubicacion
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default Home;