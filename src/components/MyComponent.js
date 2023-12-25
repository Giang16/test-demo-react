// class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Giang',
        address: 'Thanh Hoa'
    }

    handleClick = (event) => {
        console.log("Click me my botton")
        console.log("My name is", this.state.name)

        this.setState({
            name: "Eric"
        })

        this.setState({
            address: 'HN'
        })
    }
    handleOnMoverOver(event) {
        console.log(event.pageX)
    }

    //JSX
    render() {
        return (
            <div>
                I'm {this.state.name} and live in {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMoverOver}>Click me</button>
            </div>
        )
    }
}

export default MyComponent