import React, { Component } from 'react';



export default class  header extends Component{
    constructor(props) {
        super(props);
        // this.state = {
        //     todoList:props.type,
        //     // getUuid:props.generateUUID()
        //
        // };
    }

    // addItem=()=> {
    //     let uuid=this.props.func();
    //     const value= document.getElementById("input-text").value;
    //     document.getElementById("input-text").value =""
    //     console.log(value);
    //     // this.props.type.push()
    //     this.props.addfunc({id:uuid,name: "",value: value  ,comple:false} )
    // }


    render(){
        const {addItem,} =this.props;
        return(
            <div>
                <input id="input-text" className="input-text" type="text" name="ListItem"/>
                <div id="button" onClick={this.addItem}>Add</div>
            </div>);
    }

}