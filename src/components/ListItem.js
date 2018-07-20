import React, {Component} from 'react';


export default class ListItem extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        document.addEventListener("keydown",this.handleEnterKey);
    }
    componentWillUmount(){
        document.removeEventListener("keydown",this.handleEenterKey);
    }
    handleEnterKey = (e) => {
        if(e.keyCode === 13){
            e.target.contentEditable="false";
        }
    }

    render() {
        const {todo, editItem, checkItem} = this.props;
        return (
            <ol>
                {todo.map(x => <li id={x.id} className={x.name} onDoubleClick={() => editItem(x.id)}>
                    <input name="done-todo" type="checkbox" checked={x.name===""?false:true} className="done-todo" onClick={() => checkItem(x.id)}/>
                    <span contentEditable={x.contentEditable}> {x.value}</span></li>)}
            </ol>
        )
    }
}

