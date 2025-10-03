import { useState } from 'react';
import { recipientes, toppings } from '../../utils/herramientas';

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

    const HeladoIconP = pedido[helado]?.icon;

    return (
        <>
            <div className="min-h-screen bg-white">
                { pasos === 1 && ( <>
                    <div className='flex row justify-between max-w-5xl mx-auto p-4'>
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

                    <div className='flex row mx-auto items-center w-full max-w-7xl h-[14vh] bg-amber-800 rounded-2xl mb-3'>
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

                    <div className='flex flex-col items-center max-w-7xl mx-auto p-6 bg-amber-200'>
                        <h2 className='text-2xl font-bold mb-3'>
                            Opciones de {vista}
                        </h2>
                        <div className='flex flex-col w-4 md:flex-row justify-between items-center md:w-6xl'>
                            {
                            recipientes.find((cat) => (cat.categoria === vista))
                            ?.opciones.map((opcion, idx) => (
                                <div key={idx} className='h-64 md:h-96 min-w-60 card p-3'>
                                    <div className='card-inner'>
                                        <div className='card-front bg-cover bg-center blur-md inset-0' style={{ backgroundImage: `url(${opcion.img})` }}>

                                            <div className=" blur-md scale-110" ></div>

                                            <p className='z-10'>{opcion.tamaño.toLocaleUpperCase()}</p>

                                        </div>
                                        <div className='flex flex-col card-back'  style={{
                                                                                            backgroundImage: `url(${opcion.img})`,
                                                                                            backgroundSize: 'cover',
                                                                                            backgroundPosition: 'center'
                                                                                        }}>
                                            <span className=''>
                                                {opcion.tamaño} - Maximo toppings {opcion.topMax}
                                            </span>
                                            <span className=''>
                                                {opcion.descripcion}
                                            </span>

                                            <span>
                                            ${opcion.precio}
                                            </span>
                                            <button className='bg-emerald-400'
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
                </>)}

                { pasos === 2 && helado && (<>
                    <h2 className='bg-cyan-400'>Agregar Toppings</h2>

                    <div className='flex row mx-auto items-center w-full max-w-7xl h-[14vh] bg-amber-800 rounded-2xl mb-3'>
                        <div className='flex w-20 justify-center h-[10vh] bg-rose-400 m-2 rounded-2xl'>
                            {
                                <HeladoIconP className="h-[10vh]" />
                            }
                        </div>

                        {
                            pedido[helado]?.toppings.map((ice, idx) => (
                                <div className='relative'>
                                    <div    key={idx}
                                            className='flex w-20 justify-center h-[10vh] bg-rose-400 m-2 rounded-2xl'>
                                            {ice}
                                    </div>
                                    <button className='bg-black absolute rounded-2xl w-6 h-6 right-0 top-0'
                                                        onClick={() => {eliminarTopping(idx)}}>
                                                    ❌
                                    </button>
                                </div>
                            ))
                        }
                    </div>

                    <div className='flex flex-col items-center md:flex-row md:max-w-7xl md:justify-between mx-auto p-6 bg-amber-600'>
                        <div className='h-[32rem] w-96 bg-amber-100'>
                            <div className='h-full flex flex-col relative'>
                                <span className='bg-cyan-400 w-full'>
                                    {pedido[helado]?.tamaño.toLocaleUpperCase()}
                                </span>
                                    {
                                        pedido[helado]?.toppings.map((ice, idx) => (
                                            <span key={idx}
                                                  className='bg-cyan-400 w-full'>
                                                {ice.toLocaleUpperCase()}
                                            </span>
                                        ))

                                    }
                                <span className='bg-cyan-300 w-full absolute bottom-0'>
                                    {pedido[helado]?.valorTotal}
                                </span>
                            </div>
                        </div>

                        <div className='h-[32rem] items-center w-full md:w-[67%] bg-amber-200'>
                            <div className='flex w-full items-center flex-col'>
                                <div className='flex w-full flex-col'>

                                    <div className='flex justify-evenly'>
                                        {
                                            // devuelve un array con los resultados de la funcion callback
                                            toppings.map((cat) => (
                                                <button key={cat.categoria}
                                                        className={`bg-cyan-500 w-full p-1 ${categoria === cat.categoria ? 'opacity-100' : 'opacity-50'}`}
                                                        onClick={() => setCategoria(cat.categoria)}
                                                >
                                                    {cat.categoria.toLocaleUpperCase()}
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div className="flex justify-evenly">
                                    {   
                                        //Object.keys : devuelve las llaves de las propiedades en un array ['frutas', 'dulces'...]
                                        Object.keys(
                                        toppings.find((cat) => cat.categoria === categoria)?.opciones || {}
                                        ).map((subcat, idx) => (
                                        <button
                                            key={idx}
                                            className={`bg-cyan-500 w-full p-1 ${subcat === subCategoria
                                                ? "opacity-100"
                                                : "opacity-50"
                                            }`}
                                            onClick={() => {setSubCat(subcat)}}
                                        >
                                            {subcat.toLocaleUpperCase()}
                                        </button>
                                        ))
                                    }
                                    </div>
                                </div>

                                <div className='w-[90%] max-h-3/4 bg-amber-50 mt-3 p-1 rounded-2xl'>
                                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                                        {
                                            (toppings.find((cat) => cat.categoria === categoria)
                                            ?.opciones[subCategoria] || []
                                            ).map((topping, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => agregarToppings(topping)}
                                                className="bg-emerald-400 m-1 px-3 py-2 rounded-lg w-full hover:bg-emerald-500"
                                            >
                                                <div className='flex flex-col items-center'>
                                                    <span>
                                                        {topping.name.toLocaleUpperCase()}
                                                    </span>
                                                    <span>
                                                        ${topping.precio}
                                                    </span>
                                                </div>
                                            </button>
                                            ))
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button className='bg-cyan-500'
                            onClick={() => setPasos(1)}>
                        Ordenar Otro
                    </button>
                    <button className='bg-amber-600'
                            onClick={() => setPasos(3)}>
                        Continuar Pago
                    </button>
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