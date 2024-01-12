import { PrimeReactProvider } from 'primereact/api';

//import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
//import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';

import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

import { Router } from './routes';

function App() {
  return (
    <PrimeReactProvider>
      <Router />
    </PrimeReactProvider>
  );
}

export default App;
