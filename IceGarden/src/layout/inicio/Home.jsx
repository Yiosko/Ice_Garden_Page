import '../../style/App.css';
import articImg        from '../../assets/artics-img.png';
import SolSvg          from '../../assets/svg/sol-svg';
import TortugaSvg      from '../../assets/svg/tortuga-svg'
import PlumaSvg        from '../../assets/svg/pluma-svg';
import PalmeraSvg      from '../../assets/svg/palmera-svg';
import GardenImg       from '../../assets/garden-img.png'

function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row" style={{ backgroundColor: '#db72c4' }}>
        <div className="relative md:basis-3/5">
          <img
            src={articImg}
            alt="Helado Artic Ice Garden"
            className="w-full h-auto object-contain"
          />
          <div className='absolute top-8 md:top-28 left-6'>
            <h2 className='text-6xl md:text-2x1 font-bold text-gray-600'>SIGUE TUS INSTINTOS</h2>
            <p className='text-7xl md:text-2x1 font-extrabold'>
              HAZ PARTE DE NUESTRA HISTORIA
            </p>

          </div>
        </div>

        <div className="flex-1 flex flex-col items-center min-h-screen bg-[#db72c4] justify-center p-6 relative">
          <div className='absolute top-0 left-0 z-0 hidden md:block'>
            <SolSvg className="max-w-full h-auto" />
          </div>
          <div className='absolute bottom-0 right-0 z-0 hidden md:block'>
            <PalmeraSvg className='max-w-full h-auto' />
          </div>
          <h2 className='text-4xl md:text-3x1 font-bold p-4 z-10'>ORDENAR TU PEDIDO AQUI</h2>
          <button className='text-[#db72c4] px-6 py-2 rounded-lg font-bold shadow-md hover:bg-gray-200 transition z-10' style={{backgroundColor: '#ffff'}}>
            ORDENAR
          </button>
        </div>
      </div>

      {/* Second section */}

      <div className='min-h-screen flex flex-col md:flex-row'>

        <div className='relative flex flex-1 flex-col items-center bg-[#b26db5] justify-center p-8'>
          <div className='z-10'>
            <h2 className='text-2xl md:text-3xl font-extrabold mb-4 text-gray-700'>
              SOMOS FAMILIA DE LA PATRIA HUILENSE, LA SANGRE OPITA
            </h2>
            <p className='text-lg mt-20 md:text-3xl bg-white font-semibold text-gray-900 md:text-white md:bg-transparent md:mt-36'>
              LLEVAMOS MAS DE DIEZ AÑOS DANDO LA MEJOR EXPERIENCIA AL PALADAR DE NUESTRA GENTE
            </p>
          </div>
          <div className="absolute top-0 left-0 z-0 hidden md:block">
            <TortugaSvg />
          </div>
          <div className='absolute bottom-0 right-0 hidden md:block'>
            <PlumaSvg />
          </div>
        </div>

        <div className='relative md:basis-3/6 items-center justify-center bg-[#b26db5]'>
          <img 
            src={GardenImg}
            alt="Garden helado imagen"
            className='max-h-[90vh] object-contain absolute bottom-0 right-0'
          />
        </div>

      </div>
    </>
  );
}

export default Home;
