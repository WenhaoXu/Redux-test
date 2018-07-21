import React, {Component} from 'react';
import axios from "axios/index";


export default class ListItem extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        document.addEventListener("keydown",this.handleEnterKey);
        let URL="https://5b5193a16ecd1b0014aa3519.mockapi.io/Api/StateDate";
        axios.get(URL)
            .then(res => {
                const data=res.data
                const formatt = this.props.formatt;
                formatt(data);
            });
    }
    componentWillUmount(){
        document.removeEventListener("keydown",this.handleEenterKey);
    }
    handleEnterKey = (e) => {
        if(e.keyCode === 13){
            e.target.contentEditable="false";
            const post = this.props.post;
            post(e.target.value,e.target.id);
        }
    }

    render() {
        const {todo, editItem, checkItem,format,post} = this.props;
        return (
            <ol>
                {todo.map(x => <li id={x.id} className={x.name} onDoubleClick={() => editItem(x.id)}>
                    <input name="done-todo" type="checkbox" checked={x.name===""?false:true} className="done-todo" onClick={() => checkItem(x.id)}/>
                    <span contentEditable={x.contentEditable}> {x.value}</span></li>)}
            </ol>
        )
    }
}

