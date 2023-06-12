
import './App.css';
import CatNav from './components/CatNav/CatNav';
import MainCon from './components/MainCon/MainCon';
import SideCon from './components/SideCon/SideCon';
import TopNav from './components/TopNav/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <MainCon/>
    </div>
  );
}

export default App;
