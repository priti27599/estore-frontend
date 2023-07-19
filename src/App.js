
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CatNav from './components/CatNav/CatNav';
import MainCon from './components/MainCon/MainCon';
import SideCon from './components/SideCon/SideCon';
import TopNav from './components/TopNav/TopNav';
import LandingPage from './components';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path='/productDetails' Component={ProductDetails} />
        <Route path='/cart' Component={Cart}/>
      </Routes>
    </div>
  );
}

export default App;
