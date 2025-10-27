import '../../style/App.css';
import papa from '../../assets/Icepapa.jpg';

function Home() {
  return (
    <div className="bg-blue-50 p-5 rounded-3xl shadow-black m-5">
      
      <div className="bg-cyan-500 rounded-3xl flex justify-center items-center shadow-lg p-10 mb-5">
        <p className="text-sky-600 font-extrabold text-3xl text-center">
          SOMOS LA FAMILIA DE LA PATRIA HUILENSE, DE LA SANGRE OPITA
        </p>
      </div>

      
      <section className="bg-[#F7E8E4] rounded-3xl shadow-lg p-10 flex flex-col md:flex-row items-center justify-center gap-10">
        
        
        <div className="md:w-1/2 flex flex-col justify-center text-center">
          <h2 className="text-[#CD7259] text-2xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Crear momentos felices para sus clientes ofreciendo helados de yogurt naturales,
            personalizables, en un ambiente inclusivo, creativo y respetuoso del medio ambiente.
          </p>
        </div>

      
        <div className="md:w-1/2 flex justify-center">
          <img
            src={papa}
            alt="Icepapa"
            className="w-96 h-auto rounded-3xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
