import React, { useState } from "react";

function Blog() {
    const [baslik, setBaslik] = useState('');
    const [icerik, setIcerik] = useState('');

    const [bloglar, setBloglar] = useState([]);

    const blogEkle = () => {
        const newblog = {
            baslik: baslik,
            icerik: icerik,
        }

        setBloglar([...bloglar, newblog]);

        setBaslik('');
        setIcerik('');
    }

    const blogSil = (index) => {
        setBloglar(bloglar.filter((_, i) => i !== index));
    }

    const blogDuzenle = (index) => {
        const yenibloglar = [...bloglar];

        const yeniblog = yenibloglar.filter((_, i) => i === index);
        const guncel = yenibloglar.filter((yeniblog, i) => i !== index);

        setBloglar(guncel);

        setBaslik(yeniblog[0].baslik);
        setIcerik(yeniblog[0].icerik);
    }

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Blog</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Ana Sayfa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hakkımda</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Bloglar
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">İlk Gün</a>
                                <a className="dropdown-item" href="#">İkinci Gün</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Deneme</a>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </nav>

            <div className="row">
                <div className="col-md-5">
                    <div>
                        <h2>Blog Ekle</h2>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">Başlık</span>
                            </div>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                                value={baslik} onChange={(e) => { setBaslik(e.target.value) }} />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">İçerik Ekle</span>
                            </div>
                            <textarea className="form-control" aria-label="With textarea"
                                value={icerik} onChange={(e) => { setIcerik(e.target.value) }}></textarea>
                        </div>
                        <button type="button" className="btn btn-info" onClick={blogEkle}>Ekle</button>
                    </div>
                </div>

                <div className="col-md-7"  style={{ marginTop:'50px'}}>
                    {bloglar.map((item, index) => (
                        <div className="card mb-3" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{item.baslik}</h5>
                                <p className="card-text">{item.icerik}</p>
                                <button className="btn btn-primary" onClick={() => blogSil(index)}>Sil</button>
                                <button className="btn btn-danger" onClick={() => blogDuzenle(index)}>Düzenle</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
