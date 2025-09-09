import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import { Provider } from 'react-redux';
import { store } from './redux';
import ScrollToTop from './shared/hooks/ScrollToTop';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop />
      <Layout />
    </Provider>
  </BrowserRouter>
);
