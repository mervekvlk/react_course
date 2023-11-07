import logo from './logo.svg';
import './App.css';


function App() {








  return (
    <div className="App">

      {/* Navbar */}
      <div class="navbar">
        <a class="navbar-brand" aria-current="page" href="#">
          <img src={logo} width="200px"></img>
        </a>
        <div class="justify-content">
          <ul class="nav ml-auto">
            <li class="nav-item ">
              <a class="nav-link active " aria-current="page" href="#">Ana Sayfa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hakkımızda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Galeri</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-disabled="true">İletişim</a>
            </li>
          </ul>
        </div>
      </div>

      {/* main */}
      <div class="container ">
        <div class="row">
          {/* <!-- Kategoriler --> */}
          <div class="list-group col-3 mt-2">
            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
              Kategoriler
            </a>
            <a href="#" class="list-group-item list-group-item-action">Dış Giyim</a>
            <a href="#" class="list-group-item list-group-item-action">Üst Giyim</a>
            <a href="#" class="list-group-item list-group-item-action">Alt Giyim</a>
          </div>



          {/* <!-- Ürünler --> */}
          <div class="col-9">
            <div class="row">
              {/* <!-- İlk sıra ürünler --> */}
              <div class="col">
                <div class="card m-2">
                  <img src="" class="card-img-top" alt=""></img>
                  <div class="card-body">
                    <h5 class="card-title">Ürün 1</h5>
                    <p class="card-text">Ürün açıklaması.</p>
                    <a href="#" class="btn btn-primary">Sepete Ekle</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card m-2">
                  <img src="" class="card-img-top" alt=""></img>
                  <div class="card-body">
                    <h5 class="card-title">Ürün 2</h5>
                    <p class="card-text">Ürün açıklaması.</p>
                    <a href="#" class="btn btn-primary">Sepete Ekle</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card m-2">
                  <img src="" class="card-img-top" alt=""></img>
                  <div class="card-body">
                    <h5 class="card-title">Ürün 3</h5>
                    <p class="card-text">Ürün açıklaması.</p>
                    <a href="#" class="btn btn-primary">Sepete Ekle</a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- İkinci sıra ürünler --> */}
            <div class="row">
              <div class="col">
                <div class="card m-2">
                  <img src="" class="card-img-top" alt=""></img>
                  <div class="card-body">
                    <h5 class="card-title">Ürün 4</h5>
                    <p class="card-text">Ürün açıklaması.</p>
                    <a href="#" class="btn btn-primary">Sepete Ekle</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card m-2">
                <img src="" class="card-img-top" alt=""></img>
                <div class="card-body">
                  <h5 class="card-title">Ürün 5</h5>
                  <p class="card-text">Ürün açıklaması.</p>
                  <a href="#" class="btn btn-primary">Sepete Ekle</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card m-2">
                <img src="" class="card-img-top" alt=""></img>
                <div class="card-body">
                  <h5 class="card-title">Ürün 6</h5>
                  <p class="card-text">Ürün açıklaması.</p>
                  <a href="#" class="btn btn-primary">Sepete Ekle</a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Üçüncü sıra ürünler --> */}
          <div class="row">
            <div class="col">
              <div class="card m-2">
                <img src="" class="card-img-top" alt=""></img>
                <div class="card-body">
                  <h5 class="card-title">Ürün 7</h5>
                  <p class="card-text">Ürün açıklaması.</p>
                  <a href="#" class="btn btn-primary">Sepete Ekle</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card m-2">
                <img src="" class="card-img-top" alt=""></img>
                <div class="card-body">
                  <h5 class="card-title">Ürün 8</h5>
                  <p class="card-text">Ürün açıklaması.</p>
                  <a href="#" class="btn btn-primary">Sepete Ekle</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card m-2">
                <img src="" class="card-img-top" alt=""></img>
                <div class="card-body">
                  <h5 class="card-title">Ürün 9</h5>
                  <p class="card-text">Ürün açıklaması.</p>
                  <a href="#" class="btn btn-primary">Sepete Ekle</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>







    </div >


  );
}

export default App;
