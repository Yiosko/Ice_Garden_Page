import '../../style/App.css';
import burbujas from '../../assets/burbujas.jpg';

function Home () {
    return (
            
            <div className=' w-full  bg-white m-0 p-0'>
                <div className=' relative w-full h-auto flex items-center justify-center mt-0'>

                 <img src={burbujas} alt="Burbujas" className="w-full h-full m-0 p-auto" /> {/* IMG */}

                 <p className="absolute text-sky-600 font-extrabold text-3xl text-center"> SOMOS LA FAMILIA DE LA PATRIA HUILENSE, DE LA SANGRE OPITA</p>
                </div>
                
                <div className='bg-amber-50 p-10 text-center flex flex-col gap-5'>
                    <p>Crear momentos felices para sus clientes ofreciendo helados de yogurt naturales,
                         personalizables, en un ambiente inclusivo, creativo y respetuoso del medio ambiente.</p>
                    <img src="" alt="" />
                </div>
            </div>
            
    )
}

export default Home;