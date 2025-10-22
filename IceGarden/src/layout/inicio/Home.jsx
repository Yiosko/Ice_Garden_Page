import { useNavigate } from 'react-router';
import '../../style/App.css';
import articImg        from '../../assets/artics-img.png';
import SolSvg          from '../../assets/svg/sol-svg';
import TortugaSvg      from '../../assets/svg/tortuga-svg'
import PlumaSvg        from '../../assets/svg/pluma-svg';
import PalmeraSvg      from '../../assets/svg/palmera-svg';
import GardenImg       from '../../assets/garden-img.png'
import GardenCrunch    from '../../assets/crunch-img.png'


function Home() {

  const navegar = useNavigate();

  return (
    <>
      {/* one section */}
      <div className="min-h-screen flex flex-col md:flex-row" style={{ backgroundColor: '#db72c4' }}>
        <div className="relative md:basis-3/5">
          <img
            src={articImg}
            alt="Helado Artic Ice Garden"
            className="w-full h-auto object-contain"
          />
          <div className='flex flex-col w-full justify-center absolute top-8 md:top-28'>
            <h2 className='text-3xl md:text-4x1 font-BBH text-gray-600'>SIGUE TUS INSTINTOS</h2>
            <p className='text-4xl md:text-6xl font-BBH'>
              HAZ PARTE DE NUESTRA HISTORIA
            </p>

          </div>
        </div>

        <div className="flex-1 flex flex-col items-center min-h-screen bg-[#db72c4] justify-center p-6 relative">
          <div className='absolute top-0 left-0 z-0 md:block'>
            <SolSvg className="w-1/2 md:w-80 h-auto opacity-75 md:opacity-100" />
          </div>
          <div className='absolute bottom-0 right-0 z-0 opacity-75 md:opacity-100'>
            <PalmeraSvg className='w-xs md:w-xl h-auto' />
          </div>
          <h2 className='text-6xl md:text- font-beba p-4 z-10'>ORDENAR TU PEDIDO AQUí</h2>
          <button
            onClick={() => navegar('/Ordenar')}
            className='text-[#db72c4]  text-4xl px-6 py-2 rounded-lg font-beba shadow-md hover:bg-gray-300 hover:text-[#8f4d80] transition z-10' style={{backgroundColor: '#ffff'}}>
            ORDENAR
          </button>
        </div>
      </div>

      {/* two section */}

      <div className='min-h-screen flex flex-col md:flex-row'>

        <div className='relative flex flex-1 flex-col items-center bg-[#b26db5] justify-center p-8'>
          <div className='z-10'>
            <h2 className='text-2xl md:text-6xl font-beba text-gray-200'>
              SOMOS FAMILIA DE LA PATRIA HUILENSE, LA SANGRE OPITA
            </h2>
            <p className='text-lg md:text-5xl bg-white font-beba text-gray-900 md:text-[#f2de8d] md:bg-transparent md:mt-16'>
              LLEVAMOS MAS DE DIEZ AÑOS DANDO LA MEJOR EXPERIENCIA AL PALADAR DE NUESTRA GENTE
            </p>
          </div>
          <div className="z-8 absolute top-0 left-0">
            <TortugaSvg className="w-xs md:w-xl h-auto opacity-50 md:opacity-100" />
          </div>
          <div className='z-8 absolute bottom-0 right-0'>
            <PlumaSvg className="w-3xs md:w-xs h-auto opacity-50 md:opacity-100" />
          </div>
        </div>

        <div className='relative md:basis-3/6  items-center justify-center bg-[#b26db5]'>
          <img 
            src={GardenImg}
            alt="Garden helado imagen"
            className='max-h-[90vh] object-contain absolute bottom-0 right-0'
          />
        </div>

      </div>
      
        <div className='relative flex justify-center items-center'>
          <img src={ GardenCrunch } alt="Crunch" className='w-auto h-auto max-w-full border-t-8 border-t-lime-600 sm:border-none' />

          <div className='z-10 absolute'>
            <h2 className='text-2xl md:text-5xl font-BBH mb-4 md:mt-36'>
              HELADO <b className='text-[#D6FF08]'>100%</b> SALUDABLE
            </h2>
            <p className='text-1xl md:mt-36 md:text-4xl font-BBH'>
              EXISTE EL HELADO Y LUEGO ESTA EL HELADO DE YOGURT DE <b className='text-[#D6FF08]'>ICE GARDEN</b>,
              NO HAY UNA RECETA ESCRITA. <b className='text-[#D6FF08]'>NO TE CIERRES A NUEVAS EXPERIENCIAS</b>.
            </p>
          </div>
        </div>
    </>
  );
}

export default Home;
