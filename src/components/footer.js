import React, {Component} from 'react';


export default class footer extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {showTodoList, status} = this.props
        return (
            <div>
                <ul id="filters">
                    <li>
                        <a href="#" data-filter="all" className={status == " all" ? " selected" : ""}
                           onClick={() => showTodoList("all")}>All</a>
                    </li>
                    <li>
                        <a href="#" data-filter="active" className={status == " active" ? "selected" : ""}
                           onClick={() => showTodoList("active")}>Active</a>
                    </li>
                    <li>
                        <a href="#" data-filter="complete" className={status == " complete" ? "selected" : ""}
                           onClick={() => showTodoList("complete")}>Complete</a>
                    </li>
                </ul>
            </div>

        )
    }

}
