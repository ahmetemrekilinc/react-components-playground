import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Spinner from 'react-bootstrap/Spinner';


const scope = {Spinner};

class Addon17 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>   <Spinner animation='grow' variant='warning' />
</div>" scope={scope} ></FiddleComponent>
                <br/>Ezgi Turkokuloglu
            </div>
        );
    }
}

export default Addon17;