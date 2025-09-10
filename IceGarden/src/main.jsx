import { StrictMode }                        from 'react';
import { createRoot }                        from 'react-dom/client';
import { BrowserRouter, Routes, Route }      from 'react-router';
import                                            './index.css';

import App                                   from './pages/App.jsx';
import Ubicacion                             from './pages/Ubicacion.jsx';
import Ordenar                               from './pages/Ordenar.jsx';
import About                                 from './pages/About.jsx';
import Familia                                from './pages/Familia.jsx';

import store                                 from './store/index.js';
import { Provider }                          from 'react-redux';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        
        <Routes>

          <Route  path='/'        element={ <App /> } />
          <Route path='ordenar'  element={ <Ordenar /> } />
          <Route path='ubicacion' element={ <Ubicacion /> } />

          {/* Footer */}
          <Route path='about' element={ <About/> } />
          <Route path='familia' element={ <Familia/> } />

        </Routes>
        
      </Provider>
    </StrictMode>
  </BrowserRouter>
)
