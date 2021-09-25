import React from 'react';


class ChildComponent extends React.Component{

    constructor(){
        super();
        this.inputRef = React.createRef();
    }

    createArrayInputDOM(){ // Lista de referencias
        const domInputList = [];
        for(let i=0; i<8; i++){
            const currentRef = React.createRef();
            this.inputRefList.push(currentRef);
            domInputList.push(<input ref={currentRef}></input>)
        }
        return domInputList;
    }

    render(){
        
        return (
            <div>
                <p>Prop Value: {this.props.parentValue}</p>
                <input ref={this.inputRef} placeholder='Envia datos al padre'></input>
                {/* {this.createArrayInputDOM()} */}
                <button onClick={() => this.props.onClick(this.inputRef.current?.value)}> Send info to parent</button>
            </div>
        )
    }
}


export default ChildComponent;