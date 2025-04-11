import React, { Component } from "react"

export default class StateExample extends Component {
    constructor() {
        super()
        this.state = {
            num: 1
        }
    }
    render() {
        return (
            <>
                <h1>State Example of Class Component</h1>
                <h2>Number : {this.state.num}</h2>
                <button onClick={() => this.state.num > 1 ? this.setState({ num: this.state.num - 1 }) : ""}>Decrement</button>
                <button onClick={() => this.setState({ num: this.state.num + 1 })}>Increment</button>
            </>
        )
    }
}

/*
import React, { Component } from "react"

export default class StateExample extends Component {
    constructor() {
        super()
        this.state = {
            num: 1
        }
    }
    decrement() {
        if (this.state.num > 1)
            this.setState({ num: this.state.num - 1 })
    }
    increment() {
        this.setState({ num: this.state.num + 1 })
    }
    render() {
        return (
            <>
                <h1>State Example of Class Component</h1>
                <h2>Number : {this.state.num}</h2>
                <button onClick={() => this.decrement()}>Decrement</button>
                <button onClick={() => this.increment()}>Increment</button>
            </>
        )
    }
}
*/