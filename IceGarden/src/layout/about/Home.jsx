import '../../style/App.css';
import papa from '../../assets/Icepapa.jpg';

function Home () {
    return (
            
            <div className='bg-blue-50 p-5 rounded-3xl shadow-black m-5 '>
                <div className=' bg-cyan-500 rounded-3xl flex justify-center items-center shadow-lg p-10 mb-5 '>
                 <p className="absolute text-sky-600 font-extrabold text-3xl text-center"> SOMOS LA FAMILIA DE LA PATRIA HUILENSE, DE LA SANGRE OPITA</p>
                </div>  
                
                <section className=' bg-amber-100 rounded-3xl shadow-lg p-5 mb-0 flex flex-col '>
                    <p>Crear momentos felices para sus clientes ofreciendo helados de yogurt naturales,
                        personalizables, en un ambiente inclusivo, creativo y respetuoso del medio ambiente.</p>
                    
                    <div className=' bg-amber-200 w-120 h-140 mx-auto md:flex-row  rounded-lg shadow-lg'>
                    <img src={papa} alt="Icepapa" className='w-96 h-auto mx-auto my-10 md:flex-row rounded-lg shadow-lg'/>
                    </div>
                </section>
                

            </div>
            
    )
}

export default Home;