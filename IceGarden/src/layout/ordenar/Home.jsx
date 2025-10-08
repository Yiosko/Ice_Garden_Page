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
                    toppings: [...esHelado.toppings, topping.name],
                    valorTotal: valor
                },
            }
        })
    }

    const eliminarTopping = (index) => {
        console.log(index);
        setPedido((prev) => {
            const esHelado = prev[helado];
            if(!esHelado) return prev;

            const nuevosToppings = esHelado.toppings.filter((_, i) => i !== index); // lista de toppings sin el helao

            let valor = esHelado.valorTotal;
            const toppingEliminado = esHelado.toppings[index];

            const categoria = toppings.find((cat) => 
                Object.values(cat.opciones).some((arr) => 
                    arr.some((t) => t.name === toppingEliminado )
                )
            );

            const dataToppings = categoria
            ? Object.values(categoria.opciones)
                .flat()
                .find((t) => t.name == toppingEliminado)
            : null ;

            if(dataToppings && nuevosToppings.length >= esHelado.freeTop){ // si no habia descuento
                valor -= dataToppings.precio;
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
                    <h3>Realizar Pago</h3>

                    <div id="content">

                    </div>
                </>)

                }

            </div>
        </>
    )
}

export default Home;