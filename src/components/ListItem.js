import React, {Component} from 'react';


export default class ListItem extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const {todo, editItem, checkItem} = this.props;
        return (
            <div>
                {todo.map(x => <li id={x.id} className={x.name} onDoubleClick={() => editItem(x.id)}>
                    <input name="done-todo" type="checkbox" checked={x.name===""?false:true} className="done-todo" onClick={() => checkItem(x.id)}/>
                    <span contentEditable={x.contentEditable}> {x.value}</span></li>)}
            </div>
        )
    }
}

