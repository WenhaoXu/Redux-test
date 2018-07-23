import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class footer extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {showTodoList, status} = this.props
        return (
            <Router>
                <div>
                    <ul id="filters">
                        <li>
                            <Link to='/'> <a href="#" data-filter="all" className={status == " all" ? " selected" : ""}
                                             onClick={() => showTodoList("all")}>All</a></Link>
                        </li>
                        <li>
                            <Link to='/active'> <a href="#" data-filter="active"
                                                   className={status == " active" ? "selected" : ""}
                                                   onClick={() => showTodoList("active")}>Active</a></Link>
                        </li>
                        <li>
                            <Link to='/complete'> <a href="#" data-filter="complete"
                                                     className={status == " complete" ? "selected" : ""}
                                                     onClick={() => showTodoList("complete")}>Complete</a></Link>
                        </li>
                    </ul>
                </div>

            </Router>
        )
    }

}
