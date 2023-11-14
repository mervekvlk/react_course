
import './App.css';
import Navi from './Navi';
import Kategoriler from './Kategoriler';
import Urunler from './Urunler';
import UrunEkle from './UrunEkle';
import { useState } from 'react';

function App() {

  const [urunler, setUrunler] = useState([
    { id: 0, ad: "ürün 1", fiyat: 30 },
    { id: 1, ad: "ürün 2", fiyat: 25 },
    { id: 2, ad: "ürün 3", fiyat: 35 },
    { id: 3, ad: "ürün 4", fiyat: 20 },
    { id: 4, ad: "ürün 5", fiyat: 45 },
    { id: 5, ad: "ürün 6", fiyat: 50 },
    { id: 6, ad: "ürün 7", fiyat: 60 },
  ]);

  const [kategoriler] = useState([
    { id: 0, ad: "Teknoloji" },
    { id: 1, ad: "Giyim" },
    { id: 2, ad: "Aksesuar" },
    { id: 3, ad: "Gıda" },
  ]);

  const [seciliUrunler, setSeciliUrunler] = useState([]);
  const [toplamFiyat, setToplamFiyat] = useState(0);

  const sepeteEkle = (urun) => {
    setSeciliUrunler([...seciliUrunler, urun]);
    setToplamFiyat((prevToplamFiyat) => prevToplamFiyat + urun.fiyat);
  }

  const [yeniUrun, setYeniUrun] = useState(
    {
      id: 0,
      ad: "",
      fiyat: 0,
    }
  );

  const sepetBosalt=()=>{
    setSeciliUrunler([]);
    setToplamFiyat(0);
  }

  const [nextId, setNextId] = useState(7);

  const urunEkle = () => {
    setYeniUrun({ ...yeniUrun, id: nextId });
    setUrunler([...urunler,yeniUrun]);

    setNextId(nextId + 1);

    setYeniUrun({
      id: 0,
      ad: "",
      fiyat: 0,
    });
  }

   

  return (
    <div className="App">
      <Navi seciliUrunler={seciliUrunler} toplamFiyat={toplamFiyat} sepetBosalt={sepetBosalt} />
      <div className='row'>
        <div className="col-md-3">
          <Kategoriler kategoriler={kategoriler} />
          <br />
          <br />
          <UrunEkle yeniUrun={yeniUrun} urunEkle={urunEkle} setYeniUrun={setYeniUrun}/>
        </div>
        <div className="col-md-9">
          <Urunler urunler={urunler} sepeteEkle={sepeteEkle} />
        </div>
      </div>
    </div>

  );
}

export default App;
