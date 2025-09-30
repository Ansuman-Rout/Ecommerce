import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainContainer from './MainContainer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';


console.log(store.getState())
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <MainContainer />
     
    </Provider>
  </StrictMode>
)
