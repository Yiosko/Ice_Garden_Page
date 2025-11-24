import { useNavigate } from 'react-router';
import '../../style/App.css';
import articImg        from '../../assets/artics-img.png';
import SolSvg          from '../../assets/svg/sol-svg';
import TortugaSvg      from '../../assets/svg/tortuga-svg'
import PlumaSvg        from '../../assets/svg/pluma-svg';
import PalmeraSvg      from '../../assets/svg/palmera-svg';
import GardenImg       from '../../assets/garden-img.png'
import GardenCrunch    from '../../assets/crunch-img.png'
import FlorSvg         from '../../assets/svg/flor-svg';


function Home() {

  const navegar = useNavigate();

  return (
    <>
      {/* one section */}
      <div className="min-h-screen flex flex-col md:flex-row" style={{ backgroundColor: '#F7E8E4' }}>
        <div className="flex items-center relative h-full md:basis-3/5 ">
          <img
            src={articImg}
            alt="Helado Artic Ice Garden"
            className="w-full h-auto object-contain opacity-50"
          />
          <div className='flex flex-col w-full justify-center absolute z-10'>
            <h2 className='text-3xl md:text-6x1 font-play text-black'>SIGUE TUS INSTINTOS</h2>
            <p className='text-3xl md:text-6xl font-BBH text-black'>
              HAZ PARTE DE NUESTRA HISTORIA
            </p>

          </div>
        </div>

        <div className="flex-1 flex flex-col items-center min-h-screen bg-[#F7E8E4] justify-center p-6 relative">
          <div className='absolute top-0 left-0 z-0 md:block'>
            <SolSvg className="w-[60vw] md:w-80 h-auto " />
          </div>
          <div className='absolute bottom-0 right-0 z-0'>
            <PalmeraSvg className='w-xs md:w-xl h-auto' />
          </div>
          <h2 className='text-6xl text-[#CD7259] font-beba p-4 z-10'>ORDENA TU PEDIDO AQUí</h2>
          <button
            onClick={() => navegar('/Ordenar')}
            className='text-[#CD7259]  text-4xl px-6 py-2 rounded-lg font-beba shadow-md hover:bg-gray-300 hover:text-[#874836] transition z-10' style={{backgroundColor: '#ffff'}}>
            ORDENAR
          </button>
        </div>
      </div>

      {/* two section */}

      <div className='min-h-screen flex flex-col md:flex-row'>

        <div className='relative flex flex-1 flex-col items-center bg-[#F7E8E4] justify-center p-8'>
          <div className='z-10'>
            <h2 className='text-5xl md:text-6xl font-beba text-black'>
              "SOMOS FAMILIA DE LA PATRIA HUILENSE, LA SANGRE OPITA"
            </h2>
            <p className='text-4xl md:text-5xl font-beba md:text-[#CD7259] md:bg-transparent md:mt-16'>
              LLEVAMOS MAS DE DIEZ AÑOS DANDO LA MEJOR EXPERIENCIA AL PALADAR DE NUESTRA GENTE
            </p>
          </div>
          <div className="z-8 absolute top-0 left-0">
            <TortugaSvg className="w-xs md:w-xl h-auto " />
          </div>
          <div className='z-8 absolute bottom-0 right-0'>
            <PlumaSvg className="w-3xs md:w-xs h-auto opacity-80 md:opacity-100" />
          </div>
        </div>

        <div className='relative md:basis-3/6  items-center justify-center bg-[#F7E8E4]'>
          <img 
            src={GardenImg}
            alt="Garden helado imagen"
            className='max-h-[90vh] object-contain absolute bottom-0 right-0'
          />
        </div>

      </div>
      
        <div className='relative w-full bg-[#F7E8E4] h-full flex flex-row items-center'>
          <img src={ GardenCrunch } alt="Crunch" className='h-full w-[40%] md:h-[70%] max-w-full opacity-90 m-1 md:m-6' />

          <div className='z-10'>
            <h2 className='text-xs md:text-5xl top-0 text-black font-BBH mb-4 md:mt-36 z-10'>
              HELADO 100% SALUDABLE
            </h2>
            <p className='text-xs md:mt-36 text-black md:text-3xl font-play'>
              EXISTE EL HELADO Y LUEGO ESTA EL HELADO DE YOGURT DE <b className='text-[#CD7259]'>ICE GARDEN</b>,
              NO HAY UNA RECETA ESCRITA. <b className='text-[#CD7259]'>NO TE CIERRES A NUEVAS EXPERIENCIAS</b>.
            </p>
          </div>

          <div className='flex justify-end z-8 w-full absolute top-0 right-0 md:h-[80%]'>
            <FlorSvg className="w-[20%] md:w-xs md:opacity-100" />
          </div>
        </div>
    </>
  );
}

export default Home;
