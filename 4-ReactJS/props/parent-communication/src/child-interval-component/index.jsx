import React from 'react';



class ChildIntervalComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState((state) => {
                const newCount = state.count +1;
                this.props.onCountUpdate(newCount);
                return {
                    count: newCount
                }
            })
        },1000);
    }

    render(){
        return <p>Soy un hijo de intervalo. Mi valor actual es {this.state.count}</p>
    }
}

export default ChildIntervalComponent;