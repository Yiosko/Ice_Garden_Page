import { useState } from 'react';

function Home() {
  const [stateMotivo, setStateMotivo] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');

  // Permite solo letras y espacios
  const handleNameChange = (setter, value) => {
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/;
    if (soloLetras.test(value)) {
      setter(value);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 flex justify-center items-center">
        <form
          className="flex flex-col gap-4 bg-gray-100 text-black p-6 rounded-xl shadow-lg w-[85vw] md:w-[50vw] "
          onSubmit={(e) => {
            e.preventDefault();
            alert("Formulario enviado correctamente ✅");
          }}
        >
          <div className='flex row'> {/* Reestructuracion del formulario flex en fila */}
              <div className='flex flex-col w-full mr-2'>
              <label>Nombre</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => handleNameChange(setNombre, e.target.value)}
                className="w-full border p-2 rounded-lg"
                placeholder="Ejemplo: Marlon"
                required
              />
              </div>

              <div className='flex flex-col w-full ml-2'>
                <label>Apellidos</label>
                <input
                  type="text"
                  value={apellidos}
                  onChange={(e) => handleNameChange(setApellidos, e.target.value)}
                  className="w-full border p-2 rounded-lg"
                  placeholder="Ejemplo: Torres Chavarro"
                  required
                />
              </div>

          </div>

          <div className="flex flex-col">
            <label>Motivo</label>
            <select
              value={stateMotivo}
              onChange={(e) => setStateMotivo(e.target.value)}
              className="border p-2 rounded-lg"
              required
            >
              <option value="">Seleccione una opción</option>
              <option value="1">Vacante</option> {/* estado 1 ACTIVA BOTON ENVIAR */}
              <option value="2">Franquicia</option> {/* estado 2 ACTIVA BOTON ENVIAR */}
            </select>
          </div>

          {stateMotivo === "1" && (
              <div className="flex flex-col gap-4 mt-4">
              <div className='flex row w-full'> {/* Reestructuracion del formulario flex en fila */}
                <div className="flex flex-col mr-2">
                  <label>Edad</label>
                  <input
                    type="number"
                    className="border p-2 rounded-lg no-spinners [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
                              [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
                    placeholder='ej: 26'
                    min="18"
                    max="70"
                    required
                  />
                </div>

                <div className="flex flex-col ml-2 w-full">
                  <label>Experiencia</label>
                  <select className="border p-2 rounded-lg" required>
                    <option value="">Seleccione una opción</option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
            </div>

              <div className='flex flex-col md:flex-row w-full'> {/* Reestructuracion del formulario flex en fila */}
                <div className="flex flex-col md:w-[25%] md:mr-2">
                  <label>Teléfono</label>
                  <input
                    type="tel"
                    className="border p-2 rounded-lg"
                    pattern="[0-9]{10}"
                    title="Debe contener solo números (10 dígitos)"
                    placeholder="Ejemplo: 3105642598"
                    required
                  />
                </div>

                <div className="flex flex-col md:w-full md:ml-2">
                  <label>Correo</label>
                  <input
                    type="email"
                    className="border p-2 rounded-lg"
                    placeholder="Ejemplo: correo@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label>Hoja de Vida</label>
                <input
                  type="file"
                  className="border p-2 rounded-lg"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
            </div>
          )}

          {stateMotivo === "2" && (
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col">
                <label>Localidad</label>
                <input
                  type="text"
                  className="border p-2 rounded-lg"
                  pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
                  title="Solo se permiten letras y espacios"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label>Descripción</label>
                <input type="text" className="border p-2 rounded-lg" required />
              </div>

              <div className="flex flex-col">
                <label>Teléfono</label>
                <input
                  type="tel"
                  className="border p-2 rounded-lg"
                  pattern="[0-9]{10}"
                  title="Debe contener solo números (10 dígitos)"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label>Correo</label>
                <input
                  type="email"
                  className="border p-2 rounded-lg"
                  placeholder="Ejemplo: correo@gmail.com"
                  required
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className={` bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg mt-4 transition-all ${stateMotivo == 0 ? 'hidden' : 'block'}`}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
