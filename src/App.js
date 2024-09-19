 
import './App.css';
import { Fragment } from 'react'; 
import Home from './pages/home'; 
import Layout from './layout';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment> 
      <Routes>
        <Route path="/" element={<Layout />}>
             <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
