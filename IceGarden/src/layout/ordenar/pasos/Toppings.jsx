function Toppings ({ pedido, helado, toppings,  categoria, setCategoria, subCategoria, setSubCat, agregarToppings, eliminarTopping, setPasos, HeladoIconP }){
    return (<>
                <div className='flex row mx-auto items-center w-full max-w-7xl h-[14vh] pt-4 rounded-2xl mb-3'>
                    <div className="w-full max-w-7xl h-[14vh] rounded-2xl bg-white absolute opacity-50 -z-10">
                    </div>
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

                <div className='flex relative flex-col items-center md:flex-row md:max-w-7xl md:justify-between mx-auto p-6'>
                    <div className="absolute inset-0 bg-white rounded-2xl p-6 opacity-50 -z-10">

                    </div>
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

                        <div className='h-[32rem] items-center w-full md:w-[67%] bg-amber-100'>
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

export default Toppings;