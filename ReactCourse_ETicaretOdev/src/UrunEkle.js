import React from 'react';
import {
    InputGroup,
    InputGroupText,
    Input,
    Button,
} from 'reactstrap';



function UrunEkle({yeniUrun, urunEkle, setYeniUrun}) {


    return (
        <div>
            <InputGroup>
                <InputGroupText>
                    Ürün Adı :
                </InputGroupText>
                <Input 
                    value={yeniUrun.ad}
                    onChange={(e)=> setYeniUrun({...yeniUrun, ad:e.target.value})}/>
            
                <InputGroupText>
                    Ürün Fiyatı :
                </InputGroupText>
                <Input 
                    value={yeniUrun.fiyat}
                    onChange={(e)=> setYeniUrun({...yeniUrun, fiyat: parseFloat(e.target.value)})}/>
            </InputGroup>
            <br />
            <div>
                <Button
                    color="success"
                    onClick={()=>{urunEkle()}}
                >
                    Ürün Ekle
                </Button>
            </div>


        </div>
    );
}

export default UrunEkle;