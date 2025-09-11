import "../style/App.css";
import { NavLink }                                       from "react-router";
import IconoSvg                                          from "../assets/svg/icono-ice-svg";
import { FontAwesomeIcon }                               from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";




function Footer () {
    return (
        <footer className="bg-cyan-500 z-50">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <div className="flex items-center flex-col">
                        <IconoSvg className="h-40 w-auto"/>
                        <p>Ice garden el mejor yogurt de todo el Huila</p>

                        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                            <li>
                                <NavLink 
                                    to="/about" 
                                    className="transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    end
                                >
                                    Sobre Nosotros
                                </NavLink>
                            </li>

                            <li>
                                <NavLink 
                                    to="/familia"
                                    className="transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    end
                                >
                                    Familia Ice Garden
                                </NavLink>
                            </li>
                        </ul>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <a 
                                    href="https://web.facebook.com/icegardenstore"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75"
                                >
                                
                                <span className="sr-only">Facebook</span>
                                
                                <FontAwesomeIcon icon={faFacebook} size="2x"/>
                                </a>
                            </li>

                            <li>
                               <a 
                                    href="https://www.instagram.com/icegardenstore/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75"
                                >

                                <span className="sr-only">Instagram</span>

                                <FontAwesomeIcon icon={faInstagram} size="2x" />

                               </a> 
                            </li>

                            <li>
                                <a 
                                    href="https://www.tiktok.com/@icegarden"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75"
                                >

                                <span className="sr-only">TikTok</span>

                                <FontAwesomeIcon icon={faTiktok} size="2x" />

                                </a>
                            </li>

                            <li>
                                <a 
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75"
                                >

                                <span className="sr-only">Whatsapp</span>

                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />

                                </a>
                            </li>

                        </ul>

                        <p className="mt-40 text-center">Copyright &copy; 2025 Ice Garden. All rights reserved | Yiosko </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;