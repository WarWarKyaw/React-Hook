import React, { Component, PropTypes } from 'react';

class componentName extends Component {
    constructor(props) {
        super(props);
        this.state={
            x:0,
            y:0
        }

    }

    logMousePosition = e =>{
        this.setState({x: e.clientX, y: e.clientY})
    }

    componentWillMount() {
        window.addEventListener('mousemove', this.logMousePosition)

    }

    // componentDidMount() {

    // }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }

    render() {
        return (
            <div>
                X-{this.state.x}  Y-{this.state.y}
            </div>

        );
    }
}



export default componentName;