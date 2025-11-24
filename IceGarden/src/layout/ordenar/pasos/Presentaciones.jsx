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

                    <div className='flex relative overflow-x-auto overflow-y-hidden row mx-auto items-center w-full max-w-7xl md:h-[14vh] rounded-2xl mb-3'>
                        <div className="w-full max-w-7xl h-[14vh] bg-white absolute opacity-50 inset-0">
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
                        <div className="rounded-2xl absolute bg-white opacity-50 inset-0"></div>

                        <h2 className='text-3xl font-beba md:mb-3 text-emerald-700 z-10'>
                            Opciones de {vista}
                        </h2>
                        <div className='flex flex-col w-4 md:flex-row justify-between items-center md:w-6xl'>
                            {
                            recipientes.find((cat) => (cat.categoria === vista))
                            ?.opciones.map((opcion, idx) => (
                                <div key={idx} className='h-56 md:h-96 min-w-56 card m-2 md:m-0'>
                                    <div className='card-inner'>
                                        
                                        <div className='card-front relative bg-cover bg-center blur-md' style={{ backgroundImage: `url(${opcion.img})` }}>

                                            <p className='z-10 text-4xl font-beba text-cyan-600'>{opcion.tamaño.toLocaleUpperCase()}</p>

                                        </div>
                                        <div className='flex flex-col card-back'  style={{
                                                                                            backgroundImage: `url(${opcion.img})`,
                                                                                            backgroundSize: 'cover',
                                                                                            backgroundPosition: 'center'
                                                                                        }}>
                                        <div className="h-64 md:h-96 absolute rounded-2xl min-w-60 inset-0 bg-white opacity-50 -z-0" style={{borderRadius: '10px'}}></div>
                                            <span className='text-base font-bold text-left z-10'>
                                                <div className="font-beba text-cyan-700">{opcion.tamaño}</div><span className="font-beba text-green-800">Maximo toppings </span><div className="font-beba text-cyan-700 inline">{opcion.topMax} </div>
                                            </span>
                                            <span className='text-sm font-beba text-cyan-900 text-justify p-4  z-10'>
                                                {opcion.descripcion}
                                            </span>

                                            <span className="text-emerald-600 font-extrabold z-10">
                                            ${opcion.precio}
                                            </span>
                                            <button className='bg-emerald-400 text-base p-1 z-10'
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