import React from "react";
import s from './test.module.css';

export class Test extends React.Component<any, any>{

    buttonHandle = () =>{
        console.log('render')
    }

    render() {
        console.log('Test Page')
        return(
            <>
            test
                <button onClick={this.buttonHandle}>
                    press
                </button>
            </>
        )
    }
}