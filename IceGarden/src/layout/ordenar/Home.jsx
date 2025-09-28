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
                    toppings: [],
                    valorTotal: opcion.precio
                },
            })
        )

        setContador((prev)=> prev + 1)
        setHelado(idHelado)
        setPasos(2)
    }

    const agregarToppings = (topping) => {

    }

    return (
        <>
            <div className="min-h-screen bg-white">
                { pasos === 1 && ( <>
                    <div className='flex row justify-between max-w-5xl mx-auto p-9'>
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

                    <div className='flex flex-col items-center w-7xl mx-auto p-6 bg-amber-200'>
                        <h2 className='text-2xl font-bold mb-3'>
                            Opciones de {vista}
                        </h2>
                        <div className='flex row justify-between w-6xl'>
                            {
                            recipientes.find((cat) => (cat.categoria === vista))
                            ?.opciones.map((opcion, idx) => (
                                <div key={idx} className='h-96 min-w-60 card p-3'>
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
                    <button className='bg-cyan-500'
                            onClick={() => setPasos(1)}>
                        Regresar
                    </button>
                    <h2 className='bg-cyan-400'>Agregar Toppings</h2>

                    <div className='flex flex-col items-center md:flex-row md:max-w-7xl md:justify-between mx-auto p-6 bg-amber-600'>
                        <div className='h-[32rem] w-96 bg-amber-100'>
                            
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
                </>)

                }

            </div>
        </>
    )
}

export default Home;