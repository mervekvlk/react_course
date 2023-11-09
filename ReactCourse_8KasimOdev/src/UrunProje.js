import React, { useState } from "react";

function UrunProje() {

    const [fiyat,setFiyat]= useState(0);
    const [aciklama,setAciklama]= useState('');
    const [ad, setAd]= useState('');

    const[urunler,setUrunler]=useState([]);

    const urunEkle=() => {
        const yeniurun = {
            ad: ad,
            aciklama:aciklama,
            fiyat:fiyat,
        };

        setUrunler([...urunler, yeniurun]);

        setAd('');
        setFiyat(0);
        setAciklama('');
    }

    const urunSil=(index) => {
        const yeniurunler=[...urunler];
        yeniurunler.splice(index,1);
        setUrunler(yeniurunler);
    }

    const urunGuncelle=(index) => {
        const yeniurunler=[...urunler];

        const urun=yeniurunler.filter((urun,i) => i===index);
        const guncel=yeniurunler.filter((urun,i) => i!==index);

        setUrunler(guncel);

        setAd(urun[0].ad);
        setFiyat(urun[0].fiyat);
        setAciklama(urun[0].aciklama);
        
    }


    return (
        <div className="row">
            <label>Ad</label>
            <input type="text" value={ad} onChange={(e) => {setAd(e.target.value)}}/>

            <label>Açıklama</label>
            <input type="text" value={aciklama} onChange={(e) => {setAciklama(e.target.value)}}/>

            <label>Fiyat</label>
            <input type="text" value={fiyat} onChange={(e)=> {setFiyat(e.target.value)}}/>

            <button onClick={urunEkle}>Ekle</button>


            <ul>
            {urunler.map((item, index) => (
                <li className="list-group-item" key={index}>{item.ad} {item.fiyat} {item.aciklama}
                    <button className="btn btn-danger" onClick={()=>urunSil(index)}>Sil</button>
                    <button className="btn btn-success" onClick={()=>urunGuncelle(index)}>Güncelle</button>
                </li>

            ))}
            </ul>

            

        </div >
    );

}

export default UrunProje;