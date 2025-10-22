function Toppings ({ pedido, helado, toppings,  categoria, setCategoria, subCategoria, setSubCat, agregarToppings, eliminarTopping, setPasos, HeladoIconP }){
    return (<>
                <div className='flex overflow-x-auto overflow-y-hidden row mx-auto items-center w-full max-w-7xl h-[14vh] pt-4 rounded-2xl mb-3'>
                    <div className="w-full max-w-7xl h-[14vh] rounded-2xl bg-white absolute opacity-50 -z-10">
                    </div>
                    <div className='flex w-20 justify-center h-[10vh] bg-rose-400 m-2 rounded-2xl'>
                        {
                            <HeladoIconP className="h-[10vh]" />
                        }
                    </div>

                    {
                        pedido[helado]?.toppings.map((ice, idx) => (
                            <div className='relative' key={idx}>
                                <div className='flex w-20 justify-center items-center h-[10vh] bg-rose-400 m-2 rounded-2xl'>
                                        {ice.icon ? <ice.icon className="h-[8vh]"/> : ice.name.toLocaleUpperCase()}
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
                    <div className='h-[32rem] w-[90vw] md:w-96 bg-amber-100'>
                        <div className='h-full flex flex-col relative'>
                            <span className='bg-cyan-400 w-full'>
                                {pedido[helado]?.tamaño.toLocaleUpperCase()}
                            </span>
                                {
                                    pedido[helado]?.toppings.map((ice, idx) => (
                                        <span key={idx}
                                                className='bg-cyan-400 w-full'>
                                            {ice.name.toLocaleUpperCase()}
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
                                    <div className='grid grid-cols-2 place-items-center sm:grid-cols-3 md:grid-cols-4 gap-3'>
                                        {(toppings.find(cat => cat.categoria === categoria)?.opciones[subCategoria] || [])
                                        .map((topping, idx) => {
                                            const Icono = topping.icon;
                                            return (
                                            <button
                                                key={idx}
                                                className="flex flex-col relative justify-between items-center bg-emerald-400 m-1 px-3 py-2 rounded-lg w-[50%] md:w-[70%] hover:bg-emerald-500"
                                                onClick={() => agregarToppings(topping)}
                                            >
                                                {Icono && <Icono className="w-[70%] h-[70%]" />}
                                                <div className="w-full h-full inset-0 absolute opacity-0 hover:opacity-100">
                                                    <p className="font-bold absolute left-2 top-2">{topping.name.toLocaleUpperCase()}</p>
                                                </div>
                                                <p className="text-sm">${topping.precio}</p>
                                            </button>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button className='bg-cyan-500 rounded-2xl w-[35vw] h-[5vh] m-2 font-beba'
                            onClick={() => setPasos(1)}>
                        Ordenar Otro
                    </button>
                    <button className='bg-emerald-600 rounded-2xl w-[35vw] h-[5vh] m-2 font-beba'
                            onClick={() => setPasos(3)}>
                        Continuar Pago
                    </button>
    </>)
}

export default Toppings;