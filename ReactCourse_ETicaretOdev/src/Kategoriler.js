
import React from "react";
import {
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
} from 'reactstrap';


function Kategoriler({kategoriler}) {
    return (
        <div>
            <ListGroup>
                <ListGroupItemHeading>
                    Kategoriler
                </ListGroupItemHeading>
                {kategoriler.map((item, id) =>
                    <ListGroupItem
                        key= {id}
                        href="#"
                        tag="a"
                    >
                        {item.ad}
                    </ListGroupItem>
                )}

            </ListGroup>
        </div>
    );
}

export default Kategoriler;
