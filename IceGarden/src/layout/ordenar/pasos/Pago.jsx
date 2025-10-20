import EfectivoIcon from "../../../assets/ordenar/icons/metodoPago/EfectivoIcon";
import TarjetaIcon  from "../../../assets/ordenar/icons/metodoPago/TarjetaIcon";
import WompiIcon    from "../../../assets/ordenar/icons/metodoPago/WompiIcon";
import PseIcon      from "../../../assets/ordenar/icons/metodoPago/PseIcon";

function Pago ({ pedido, eliminarHelado, setPasos, totalPedido}){
    return(<>
    
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
                        <button className="flex flex-col items-center justify-center rounded-2xl m-1 border-2 border-black">
                            <EfectivoIcon className="w-[50%] h-[50%]" />
                            Efectivo
                        </button>

                        <button className="flex flex-col items-center justify-center rounded-2xl m-1 border-2 border-black">
                            <TarjetaIcon className="w-[50%] h-[50%]" />
                            Deb/Cred
                        </button>

                        <button className="flex flex-col items-center justify-center rounded-2xl m-1 border-2 border-black">
                            <WompiIcon className="w-[50%] h-[50%]" />
                            Wompi
                        </button>

                        <button className="flex flex-col items-center justify-center rounded-2xl m-1 border-2 border-black">
                            <PseIcon className="w-[50%] h-[50%]" />
                            PSE
                        </button>
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

export default Pago;