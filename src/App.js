import React, { Component } from 'react';
import './todo.css';
import Header from './containers/headerContainer';
import Items from './containers/ListItemContainer';
import  Footer from'./containers/footerContainer';
import { Button } from 'antd';
import { Input } from 'antd';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
class App extends Component {
    constructor(props) {
        super(props);
    }




  render() {

        const {}=this.props
    return (
        <Router>
        <div className="container">
            <div>
                <h2>Jquery To Do List</h2>
                <p>
                    <em>Simple Todo List with adding and filter by diff status.</em>
                </p>
            </div>
            <Header/>
            {/*<Items/>*/}

            <Route exact path="/" component={Items} />
            <Route path="/active" component={Items} />
            <Route path="/complete" component={Items} />

            <Footer/>
        </div>
        </Router>
    );
  }
}

export default App;
