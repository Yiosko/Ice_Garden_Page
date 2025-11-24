import { useState } from "react";
import  IconoSvg from "../assets/svg/icono-ice-svg";
import "../style/App.css";
import { NavLink } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cyan-500 sticky top-0 z-50 shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1 items-center">
          <NavLink to="/" className="-m-1.5 p-1.5 flex items-center gap-0.5" end>
            <IconoSvg className="h-14 w-auto" />
            <span className="text-white font-bold text-xl">Ice Garden</span>
          </NavLink>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          <NavLink to="/Ordenar" end>
            Ordenar
          </NavLink>

          <NavLink to="/Ubicacion" end>
            Ubicacion
          </NavLink>

        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white p-2 rounded-md hover:bg-gray-800"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-sky-300 px-4 py-4 space-y-3">
          <NavLink to="/Ordenar" className="block text-white font-medium hover:text-pink-300" end>
            Ordenar
          </NavLink>

          <NavLink to="/Ubicacion" className="block text-white font-medium hover:text-pink-300" end>
            Ubicacion
          </NavLink>

          <NavLink to="/Contacto" className="block text-white font-medium hover:text-pink-300" end>
            Contacto
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
