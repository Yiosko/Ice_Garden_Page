function Presentaciones ({ recipientes, vista, setVista, pedido, agregarHelado, eliminarHelado, setHelado, setPasos }) {
    return (<>
                <div className='flex row justify-between max-w-5xl mx-auto pt-4'>
                    {
                        recipientes.map((cat) => (
                            <button key={cat.categoria}
                                    onClick={() => setVista(cat.categoria)}
                                    className={`px-4 py-2 rounded-t-2xl bg-cyan-600 text-white
                                                ${vista === cat.categoria ? 'opacity-100' : 'opacity-50'}`}>
                                {cat.categoria}
                            </button>
                        ))
                    }
                </div>

                    <div className='flex overflow-x-auto overflow-y-hidden row mx-auto items-center w-full max-w-7xl h-[14vh] rounded-2xl mb-3'>
                        <div className="w-full max-w-7xl h-[14vh] bg-white absolute opacity-50">
                            {/* fondo */}
                        </div>
                        {
                            Object.keys(pedido).map((idHelado) => {
                                const HeladoIcon = pedido[idHelado].icon;
                                return (
                                    <div className='relative'>
                                        <div key={idHelado}
                                            className='flex w-20 justify-center h-[10vh] bg-rose-400 m-2 rounded-2xl'
                                            onClick={() => {
                                                setHelado(idHelado);
                                                setPasos(2);
                                            }}>
                                            {<HeladoIcon className="h-[10vh]" />}
                                        </div>
                                        <button className='bg-black absolute rounded-2xl w-6 h-6 right-0 top-0'
                                                onClick={() => {eliminarHelado(idHelado)}}>
                                                ❌
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='flex relative flex-col items-center max-w-7xl mx-auto p-6'>
                        <div className="w-full h-full rounded-2xl absolute bg-white opacity-50">

                        </div>

                        <h2 className='text-2xl font-bold mb-3 text-cyan-300'>
                            Opciones de {vista}
                        </h2>
                        <div className='flex flex-col w-4 md:flex-row justify-between items-center md:w-6xl'>
                            {
                            recipientes.find((cat) => (cat.categoria === vista))
                            ?.opciones.map((opcion, idx) => (
                                <div key={idx} className='h-64 md:h-96 min-w-60 card'>
                                    <div className='card-inner'>
                                        
                                        <div className='card-front relative bg-cover bg-center blur-md inset-0' style={{ backgroundImage: `url(${opcion.img})` }}>
                                            <div className="h-64 md:h-96 absolute rounded-2xl min-w-60 inset-0 bg-white opacity-35" style={{borderRadius: '10px'}}></div>

                                            <p className='z-10'>{opcion.tamaño.toLocaleUpperCase()}</p>

                                        </div>
                                        <div className='flex flex-col card-back'  style={{
                                                                                            backgroundImage: `url(${opcion.img})`,
                                                                                            backgroundSize: 'cover',
                                                                                            backgroundPosition: 'center'
                                                                                        }}>
                                            <span className='text-base font-bold text-left'>
                                                <div className="text-cyan-500">{opcion.tamaño}</div> Maximo toppings <div className="text-cyan-500 inline">{opcion.topMax} </div>
                                            </span>
                                            <span className='text-sm font-bold text-justify p-4'>
                                                {opcion.descripcion}
                                            </span>

                                            <span className="text-emerald-600 font-extrabold">
                                            ${opcion.precio}
                                            </span>
                                            <button className='bg-emerald-400 text-base p-1'
                                                    onClick={() => {agregarHelado(opcion)}}>
                                                Escoger
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            ))

                            }
                        </div>
                    </div>
    </>)
}


export default Presentaciones;