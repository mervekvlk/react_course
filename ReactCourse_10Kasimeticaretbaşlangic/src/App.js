
import './App.css';
import Navi from './Navi';
import Kategoriler from './Kategoriler';
import Urunler from './Urunler';

function App() {
  return (
    <div className="App">
      <Navi/>
      <div className='row'>
        <Kategoriler />
        <Urunler/>
      </div>

    </div>
  );
}

export default App;
