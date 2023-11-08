import React, { useState } from "react";

function AddDelete() {

    const [isim, setIsim] = useState('');
    const [soyisim, setSoyisim] = useState('');

    const [kullanicilar, setKullanicilar] = useState([]);

    const kullaniciEkle = () => {
        const yeniKullanici = {
            ad: isim,
            soyad: soyisim,
        };

        setKullanicilar([...kullanicilar, yeniKullanici]);

        setIsim('');
        setSoyisim('');
    }

    const kullaniciSil = (index) => {
        const yeniKullanicilar = [...kullanicilar];
        yeniKullanicilar.splice(index, 1);
        setKullanicilar(yeniKullanicilar);
    }


    return (
        <div className="row">
            <div className="col-md-4"></div>

            <div class="card col-md-4">
                <div class="card-header">
                    <label className="me-4" htmlFor=""  >Ad</label>
                    <input type="text" value={isim} onChange={(e) => { setIsim(e.target.value) }} />
                </div>
                <div class="card-header">
                    <label className="me-2" htmlFor="">Soyad</label>
                    <input type="text" value={soyisim} onChange={(e) => { setSoyisim(e.target.value) }} />
                </div>
                <div class="card-body">
                    <ul>
                        {kullanicilar.map((kullaniciitem, index) => (
                            <li className="list-group-item" key={index}>{kullaniciitem.ad} {kullaniciitem.soyad} <button className="btn btn-danger" onClick={kullaniciSil}>Sil</button></li>

                        ))}
                    </ul>
                    <button className='btn btn-primary' onClick={kullaniciEkle}>Ekle</button>
                </div>

                <div className="col-md-4"></div>

            </div>










        </div>
    );

}

export default AddDelete;