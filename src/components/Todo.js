import {Component} from "react";

export default class Todo extends Component{
    render() {
        return (
            <div className={"container w-100 d-flex align-items-center p-3 bg-white rounded"}>
                <a>{this.props.todo}</a>
            </div>
        );
    }
}