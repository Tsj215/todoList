import React, {Component} from "react";

export default class Todo extends Component {

    state = {
        inputValue: ''
    }

    myInput = (event) => {
        this.setState({inputValue: event.target.value})
        event.preventDefault()
    }

    add = (event) => {
        event.preventDefault()
        const todo = this.state.inputValue
        if (!todo) {
            return
        } else {
            this.props.add(todo)
            this.setState({inputValue: ''})
        }

    }

    render() {
        const {inputValue} = this.state

        return (
            <div className="header container">
                <div className="page-header">
                    <h1>Example page header
                        <small>Subtext for header</small>
                    </h1>
                </div>
                <form onSubmit={this.add}>
                    <div className="form-group">
                        <input type="text" className="form-control" value={inputValue} onChange={this.myInput}
                               placeholder="请输入代办事项"/>
                        <button type="submit" className="btn btn-default pull-right">发表</button>
                    </div>
                </form>
            </div>
        )
    }
}
