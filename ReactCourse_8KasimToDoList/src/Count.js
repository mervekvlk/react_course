import React, { useState } from "react";

function Count(){ 
    const [sayac, setSayac]=useState(0);

    const artir= () => {
        if (sayac!==10){
        setSayac(sayac+1);
        }
    }

    const azalt=() => {
        if(sayac!==0){
        setSayac(sayac-1);
        }
    }


    return(
        <div>
            <h2> Count: {sayac}</h2>
            <button className="btn btn-info " onClick={artir}>Artır</button>
            <button className="btn btn-danger" onClick={azalt}>Azalt</button>
        </div>
    );

}

export default Count;