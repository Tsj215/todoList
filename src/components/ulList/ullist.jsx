import React, {Component} from "react";

import './ullist.css'

export default class UlList extends Component {

    deleteList = (event) => {
        console.log(event.target.id)
        const deleteList = this.props.delete
        deleteList(event.target.id)
    }

    render() {
        const {list} = this.props

        return (
            <div className="comments container">
                <ul className="list-group">
                    {
                        list.map((item,index) => (
                            <li key={index}  className="list-group-item">
                                {item}<span id={index} onClick={this.deleteList} className="pull-right">删除</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
