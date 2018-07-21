import React from 'react';

import axios from 'axios';
import {addItem} from "./actions/headerAction"
import {checkItem, editItem,format} from "./actions/ListItemAction"
let URL="https://5b5193a16ecd1b0014aa3519.mockapi.io/Api/StateDate";

const stateDate = {
    todoList: [{id: "145151", name: "", value: "fafa", contentEditable: false, display: "block"}],
    statusOfList: "all"
}



const fetchaddItems = (value,dispatch) => {
    let array=[];
        axios.get(URL).then(res => {
          array= [...res.data]
            if(value!=""){
            axios.post(URL,{id: 12243143, name: "", value: value, contentEditable: false, display: "block"})
                .then(res => {
                    array.push(res.data)
                    dispatch(addItem(array))
                });}
        })


}


const fetchchnageItems = (id,dispatch) => {
    let array=[];
    let newname="";
    axios.get(URL).then(res=>{
        array=[...res.data]
        URL=URL+'/'+id;
        let newItem= array.find(item=>item.id===id)
        newItem.name===""?newname="checked":newname
        array.find(item=>item.id===id).name=newname
            axios.put(URL,newItem).then(
                dispatch(checkItem(array))
            )
        }
    )






    // let name = stateDate.todoList.find(item => item.id === id).name;
    // name === "" ? name = "checked" : name = ""
    // stateDate.todoList.find(item => item.id === id).name = name;
    // return fetchshowItems(stateDate.statusOfList)

}


const fetchchnageContent = (id) => {
    let contentEditable = stateDate.todoList.find(item => item.id === id).contentEditable;
    contentEditable ? contentEditable = false : contentEditable = true;
    stateDate.todoList.find(item => item.id === id).contentEditable = contentEditable;

    return fetchshowItems(stateDate.statusOfList)
}

const fetchshowItems = (status) => {
    stateDate.todoList.map(x => {
        if (status === "all") {
            x.display = "block";
            return x;
        }
        if (status === "active") {
            if (x.name === "checked") {
                x.display = "none"
            }
            else {
                x.display = "block"
            }
        }
        if (status === "complete") {
            if (x.name === "") {
                x.display = "none"
            }
            else {
                x.display = "block"
            }
        }

    })
    stateDate.statusOfList = status;

    return stateDate

}


var generateUUID = () => {
    /*jshint bitwise:false */
    var i,
        random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12
            ? 4
            : (i === 16
                ? (random & 3 | 8)
                : random)).toString(16);
    }
    return uuid;
}

export {fetchaddItems, fetchchnageContent, fetchshowItems, fetchchnageItems}