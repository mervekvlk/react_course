
import React from "react";
import {
    Col,
    Card,
    CardTitle,
    CardText,
    Button,
} from 'reactstrap';


function Urunler({urunler, sepeteEkle}) {
    return (
        <div className="col-md-9 row">
            {urunler.map((urun, id) =>
                <Col sm="3" key={id}>
                    <Card body>
                        <CardTitle tag="h5">
                            Ürün
                        </CardTitle>
                        <CardText>
                            Ürün Adı: {urun.ad}
                        </CardText>
                        <CardText>
                            Fiyatı: {urun.fiyat} TL
                        </CardText>
                        <Button onClick={()=>sepeteEkle(urun)}> 
                            Sepete Ekle
                        </Button>
                    </Card>
                </Col>
            )}


        </div>
    );
}

export default Urunler;
