import { useState } from 'react';
import { recipientes, toppings } from '../../utils/herramientas';
import imgFondo from '../../assets/ordenar/fondoIce.png';

import Presentaciones from './pasos/Presentaciones';
import Toppings from './pasos/Toppings';

function Home () {
    const [pedido, setPedido]       = useState({})
    const [contador, setContador]   = useState(1);
    const [pasos, setPasos]         = useState(1);
    const [helado, setHelado]       = useState(null);
    const [vista, setVista] = useState(
        recipientes[0].categoria
    );
    const [categoria, setCategoria] = useState(
        toppings[0].categoria
    );
    const [subCategoria, setSubCat] = useState('frutas');

    const agregarHelado = (opcion) => {
        const idHelado = `helado_${contador}`;

        setPedido(
            (prev)=> ({
                ...prev,
                [idHelado]: {
                    tamaño: opcion.tamaño,
                    topMax: opcion.topMax,
                    freeTop: opcion.freeTop,
                    icon: opcion.icon,
                    toppings: [],
                    valorTotal: opcion.precio
                },
            })
        )

        console.log(pedido);
        setContador((prev)=> prev + 1)
        setHelado(idHelado)
        setPasos(2)
    }

    const agregarToppings = (topping) => {
        setPedido((prev) => {
            const esHelado = prev[helado];
            if(!esHelado) return prev;

            let valor = esHelado.valorTotal

            if(esHelado.toppings.length >= esHelado.topMax) return prev;

            if(esHelado.freeTop <= esHelado.toppings.length){
                valor += topping.precio;
            }
            return {
                ...prev,
                [helado]: {
                    ...esHelado,
                    toppings: [...esHelado.toppings, topping],
                    valorTotal: valor
                },
            }
        })
    }

    const eliminarTopping = (index) => {
        setPedido((prev) => {
            const esHelado = prev[helado];
            if(!esHelado) return prev;

            const toppingEliminado = esHelado.toppings[index];
            const nuevosToppings = esHelado.toppings.filter((_, i) => i !== index); // lista de toppings sin el helao

            let valor = esHelado.valorTotal;

            if(nuevosToppings.length >= esHelado.freeTop){ // si no habia descuento
                valor -= toppingEliminado.precio;
            }

            return {
                ...prev,
                [helado]: {
                ...esHelado,
                toppings: nuevosToppings,
                valorTotal: valor,
                }
            }

        })
    }

    const eliminarHelado = (heladoE) => {
        setPedido((prev) => {
            const nuevoPedido = {...prev};
            delete nuevoPedido[heladoE];
            return nuevoPedido;
        });

        if(helado === heladoE){
            setHelado(null);
            setPasos(1)
        }
    }

    const totalPedido = Object.values(pedido).reduce(
        (acum, items) => acum +(items.valorTotal || 0),
        0
    );

    return (
        <>
            <div className="min-h-screen relative">
                <div className='min-h-screen inset-0 -z-10 bg-white absolute' style={{ backgroundImage: `url(${imgFondo})`,
                                                                                         backgroundSize: 'cover'
                                                                                       }}>
                    {/* fondo */}
                </div>
                { pasos === 1 && ( <>
                    <Presentaciones
                            recipientes={recipientes}
                            vista={vista}
                            setVista={setVista}
                            pedido={pedido}
                            agregarHelado={agregarHelado}
                            eliminarHelado={eliminarHelado}
                            setHelado={setHelado}
                            setPasos={setPasos}
                    />
                </>)}

                { pasos === 2 && helado && (<>
                    <Toppings
                        pedido={pedido}
                        helado={helado}
                        toppings={toppings}
                        categoria={categoria}
                        setCategoria={setCategoria}
                        subCategoria={subCategoria}
                        setSubCat={setSubCat}
                        agregarToppings={agregarToppings}
                        eliminarTopping={eliminarTopping}
                        setPasos={setPasos}
                        HeladoIconP={pedido[helado]?.icon}
                    />
                </>)
                }

                {pasos === 3 && (<>


                    <div className='flex flex-col md:flex-row w-full justify-center'>
                        <div className='relative rounded-2xl w-[90vw] h-[50vh] md:w-[45vw] md:h-[80vh] m-4'>
                            <div className='absolute w-full h-full rounded-2xl bg-white opacity-50 -z-10'>
                                {/* FONDO */}
                            </div>
                            <div className='flex flex-col h-full overflow-x-hidden overflow-y-auto'>
                                {
                                    Object.keys(pedido).map((idHelado) => {
                                        const IconHelado = pedido[idHelado].icon;
                                        return (
                                            <div className='flex flex-row items-center justify-center'>
                                                <div className='flex items-center bg-white h-[12vh] w-[80%] rounded-2xl m-1'>
                                                    <span className='h-[10vh] w-[12%] ml-4 rounded-2xl bg-pink-500'>
                                                        {IconHelado ? <IconHelado className='h-full w-full' /> : pedido[idHelado].tamaño.toLocalUpperCase()}
                                                    </span>
                                                    <span className='text-4xl text-emerald-800 font-bold'>
                                                        $ {pedido[idHelado].valorTotal}
                                                    </span>
                                                </div>
                                                <button className='bg-pink-500 text-pink-200 h-[12vh] rounded-2xl w-[10%] text-4xl font-bold'
                                                        onClick={() => {eliminarHelado(idHelado)}}>
                                                    X
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='flex flex-col items-center relative rounded-2xl w-[90vw] h-[50vh] md:w-[30vw] md:h-[80vh] m-4'>
                            <div className='absolute w-full h-full rounded-2xl bg-white opacity-50 -z-10'>
                                {/* FONDO */}
                            </div>
                            <span className='flex flex-row justify-center items-center bg-green-500 border-b-emerald-600 border-b-8 rounded-2xl h-[15vh] w-[92%] mt-5'>
                                <span className='text-2xl font-bold'>
                                    TOTAL: 
                                </span>
                                <span className='text-2xl font-medium pl-2'>
                                    ${' '}{totalPedido.toLocaleString('es-CO')}
                                </span>
                            </span>

                            <span className='flex flex-col justify-center rounded-2xl bg-white text-black w-[92%] h-[55vh] mt-4'>
                                Formas de pago
                                <div className='grid grid-flow-col md:grid-flow-row grid-cols-4'>
                                    <div className="pago m-1 border-2 border-black">Debito</div>
                                    <div className="pago m-1 border-2 border-black">Credito</div>
                                    <div className="pago m-1 border-2 border-black">Wompi</div>
                                    <div className="pago m-1 border-2 border-black">PSE</div>
                                </div>
                            </span>
                        </div>

                    </div>

                    <button className='bg-pink-600 rounded-2xl w-[35vw] h-[5vh] m-2'
                            onClick={() => setPasos(1)}>
                        Regresar
                    </button>
                    <button className='bg-emerald-700 rounded-2xl w-[35vw] h-[5vh] m-2'
                            onClick={() => alert('Aun no esta habilitada')}>
                        Relizar Pago
                    </button>
                </>)

                }

            </div>
        </>
    )
}

export default Home;