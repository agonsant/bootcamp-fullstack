import React from 'react';
import ChildComponent from '../child-component';
import ChildIntervalComponent from '../child-interval-component';


class ParentComponent extends React.Component{

    constructor(){
        super();
        this.state={
            childInfo:'',
            childIntervalCount: 0
        }
    }


    render(){
        return (
            <div>
                <h1>Hello Parent Component!</h1>
                <p>Informacion del hijo: {this.state.childInfo}</p>
                <p>Informacion del hijo intervalo: {this.state.childIntervalCount}</p>
                <ChildComponent onClick={(inputValue) => this.setState({ childInfo: inputValue})} parentValue='Esta informacion viene del padre'></ChildComponent>
                <ChildIntervalComponent onCountUpdate={(newCount) => this.setState({childIntervalCount: newCount})}></ChildIntervalComponent>
            </div>
        )
    }
}


export default ParentComponent;