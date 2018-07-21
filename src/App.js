import React, { Component } from 'react';
import './todo.css';
import Header from './containers/headerContainer';
import Items from './containers/ListItemContainer';
import  Footer from'./containers/footerContainer';
class App extends Component {
    constructor(props) {
        super(props);
    }




  render() {

        const {}=this.props
    return (
        <div className="container">
            <div>
                <h2>Jquery To Do List</h2>
                <p>
                    <em>Simple Todo List with adding and filter by diff status.</em>
                </p>
            </div>
            <Header/>
            <Items/>
            <Footer/>
            {/*func={this.generateUUID} addfunc={this.addItems}*/}
            {/*Header 的属性type={this.state.todoList}*/}
            {/*{this.filterByStatus(this.state.todoList, this.state.statusOfList).map((x) => <Item key={x.id} id={x.id} name={x.name} value={x.value}  comple={x.complete}  changeName={(id,content)=>this.changeName(id,content)}  />)}*/}
            {/*<Footer status={this.state.statusOfList} change={this.changeStatus}/>*/}
        </div>
    );
  }
}

export default App;
