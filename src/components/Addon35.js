import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Badge from 'react-bootstrap/Badge';


class Addon17 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon1 <Badge pill variant='primary'>
                    Primary
                </Badge> </div>" scope={scope} ></FiddleComponent>
                <br/>Ezgi Turkokuloglu
            </div>
        );
    }
}

export default Addon17;