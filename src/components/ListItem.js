import React, {Component} from 'react';



export default class ListItem extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     uuid: props.id,
        //     name: props.name,
        //     value: props.value,
        //     completeStatus:props.comple,
        //     // todoList:props.todoList
        // }
    }

    // checkItem = (event) => {
    //     let checked=  event.target.parentNode.className
    //
    //     if(checked==""){
    //         event.target.parentNode.className="checked"
    //         // this.props.todoList.find(item=>item.id==this.state.uuid).name="checked"
    //         this.props.changeName(this.state.uuid,"checked")
    //     }
    //     else{
    //         // this.state.todoList.find(item=>item.id==this.state.uuid).name=""
    //         event.target.parentNode.className=""
    //         this.props.changeName(this.state.uuid,"")
    //         // event.target.complete=false
    //     }
    // }
    //
    // componentDidMount(){
    //     document.addEventListener("keydown",this.handleEnterKey);
    // }
    // componentWillUmount(){
    //     document.removeEventListener("keydown",this.handleEenterKey);
    // }
    // handleEnterKey = (e) => {
    //     if(e.keyCode === 13){
    //         e.target.contentEditable="false";
    //     }
    // }
    //
    // editItem = (event) => {
    //     event.target.contentEditable="true";
    //
    //
    // }

    render() {
          const{todo,editItem,checkItem}=this.props;
        return (
            <div>
                {todo.map(x=><li id={x.id} className={x.name} onDoubleClick={()=>editItem (x.id)} >
                    <input name="done-todo" type="checkbox" className="done-todo" onClick={()=>checkItem (x.id) }/>
                   <span  contentEditable={x.contentEditable} > {x.value}</span></li>)}
            </div>
        )
    }
}

