import React, { Component } from 'react';



export default class  header extends Component{
    constructor(props) {
        super(props);
        this.inputText=React.createRef();
        // this.state = {
        //     todoList:props.type,
        //     // getUuid:props.generateUUID()
        //
        // };
    }


    input=()=>{
        const inputvalue=   this.inputText.current.value;
        const addItem=this.props.addItem;
        addItem(inputvalue)
    }



    render(){
        const {addItem} =this.props;
        return(
            <div>
                <input id="input-text" className="input-text" type="text" name="ListItem"  ref={this.inputText}/>
                <div id="button" onClick={this.input}>Add</div>
            </div>);
    }

}