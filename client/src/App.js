import { Outlet } from 'react-router-dom';
import './App.css';
import Footerr from './components/Footerr';
import NavBar from './components/NavBar';
import { Helmet } from 'react-helmet'
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="description" content='React Application' />
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg" />
      </Helmet>
      <NavBar />
      <Outlet />
      <Footerr />
    </div>
  );
}

export default App;
