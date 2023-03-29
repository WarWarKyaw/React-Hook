import React, { Component, PropTypes } from 'react';

class componentName extends Component {
    constructor(props) {
        super(props);
        this.state ={
            count :0
        }

    }

    componentWillMount() {
        clearInterval(this.interval)

    }

    componentDidMount() {
        this.interval = setInterval(this.tick , 1000)

    }


    tick =()=>{
        this.setState({
            count : this.state.count+1
        })
    }

   

    render() {
        return (
           <h1>{this.state.count}</h1>
        );
    }
}



export default componentName;