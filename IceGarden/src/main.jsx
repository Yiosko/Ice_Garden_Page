import { StrictMode }                        from 'react';
import { createRoot }                        from 'react-dom/client';
import { BrowserRouter, Routes, Route }      from 'react-router-dom';
import                                            './index.css';

import App                                   from './pages/App.jsx';
import Ubicacion                             from './pages/Ubicacion.jsx';
import Ordenar                               from './pages/Ordenar.jsx';
import About                                 from './pages/About.jsx';
import Familia                               from './pages/Familia.jsx';
import Contanto                              from './pages/Contacto.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
        
        <Routes>

          <Route  path='/'        element={ <App /> } />
          <Route path='ordenar'  element={ <Ordenar /> } />
          <Route path='ubicacion' element={ <Ubicacion /> } />
          <Route path='contacto' element={ <Contanto /> } />

          {/* Footer */}
          <Route path='about' element={ <About/> } />
          <Route path='familia' element={ <Familia/> } />

        </Routes>
        
    </StrictMode>
  </BrowserRouter>
)
