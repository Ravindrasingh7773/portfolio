 
import './App.css';
import { Fragment } from 'react'; 
import Home from './pages/home';
import Navbar from './components/navbar';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
    </Fragment>
  );
}

export default App;
