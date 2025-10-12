import '../../style/App.css';
import { useState } from 'react'; //Guardar


function Home () {
    const [ stateMotivo, setStateMotivo] = useState(''); //Almacenar
    return (
        <>
            <div className='min-h-screen flex flex-col md:flex-row'>
                <div className="flex-1 flex justify-center items-center bg-white">
                    <form className="flex flex-col gap-4 bg-pink-100 p-6 rounded-xl shadow-lg w-full max-w-md">
                        <div className="flex flex-col">
                            <label>Nombre</label>
                            <input type="text" className="border p-2 rounded-lg" />
                        </div>

                        <div className="flex flex-col">
                            <label>Apellidos</label>
                            <input type="text" className="border p-2 rounded-lg" />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-semibold"></label>
                            <select
                                value={stateMotivo}
                                onChange={(eventoSeleccionado) => setStateMotivo(eventoSeleccionado.target.value)}
                                className="border p-2 rounded-lg"
                            >
                                <option value="">Seleccione una opción</option>
                                <option value="1">Vacante</option>
                                <option value="2">Franquicia</option>
                            </select>
                        </div>

                        {stateMotivo === "1" && (
                            <div className="flex flex-col gap-4 mt-4">
                                
                                <div className="flex flex-col">
                                    <label>Edad</label>
                                    <input type="num" className="border p-2 rounded-lg" />
                                </div>
 
                                <div className="flex flex-col">
                                    <label>Experiencia</label>
                                    <select
                                        onChange={(evento) => setStateMotivo(evento.target.value)}
                                        className="border p-2 rounded-lg"
                                    >
                                        <option value="">Seleccione una opción</option>
                                        <option value="1">Si</option>
                                        <option value="2">No</option>
                                    </select>                                       
                                </div>

                                <div className="flex flex-col">
                                    <label>Telefono</label>
                                    <input type="tel" className="border p-2 rounded-lg" />
                                </div>

                                <div className="flex flex-col">
                                    <label>Correo</label>
                                    <input type="text" className="border p-2 rounded-lg" />
                                </div>

                                <div className="flex flex-col">
                                    <label>Hoja de Vida</label>
                                    <input type="file" className="border p-2 rounded-lg" />                                                                           
                                </div>

                            </div>
                        )}

                        {stateMotivo === "2" && (
                        <div className="flex flex-col gap-4 mt-4">
                        </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home;