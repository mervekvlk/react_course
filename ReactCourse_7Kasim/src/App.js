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
        <div class="justify-content-end">
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Ana Sayfa</a>
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
      <div class="row g-0 text-center">
        <div class="col-sm-6 col-md-8">
        <div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Kategoriler</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>

        </div>
        <div class="col-6 col-md-4"></div>
      </div>

    </div>
  );
}

export default App;
