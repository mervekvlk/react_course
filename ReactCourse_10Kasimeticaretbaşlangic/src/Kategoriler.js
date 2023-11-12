
import React, { useState } from "react";
import {
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
} from 'reactstrap';


function Kategoriler() {
    return (
        <div className="col-md-3">
            <ListGroup>
                <ListGroupItemHeading>
                    Kategoriler
                </ListGroupItemHeading>
                <ListGroupItem
                    href="#"
                    tag="a"
                >
                    Dapibus ac facilisis in
                </ListGroupItem>
                <ListGroupItem
                    href="#"
                    tag="a"
                >
                    Morbi leo risus
                </ListGroupItem>
                <ListGroupItem
                    href="#"
                    tag="a"
                >
                    Porta ac consectetur ac
                </ListGroupItem>
                <ListGroupItem
                    href="#"
                    tag="a"
                >
                    Vestibulum at eros
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default Kategoriler;
