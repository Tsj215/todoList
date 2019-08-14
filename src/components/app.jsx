import React, {Component} from "react";

import Todo from './todo/todo'
import UlList from './ulList/ullist'

export default class App extends Component {

    state = {
        list: [
            '11111',
            '11111',
            '11111'
        ]
    }

    handleAdd = (todo) => {
        const {list} = this.state
        list.unshift(todo)
        this.setState({list})
        // console.log(this.state.list)
    }

    handleDelete = (index) => {
        const {list} = this.state
        list.splice(index,1)
        this.setState({list})
    }

    render() {
        const {list} = this.state

        return (
            <div>
                <Todo add={this.handleAdd}/>
                <UlList list={list} delete={this.handleDelete}/>
            </div>
        )
    }
}
