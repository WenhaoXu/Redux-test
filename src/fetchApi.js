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
}


const fetchchnageContent = (id,dispatch) => {
    let array=[];
    axios.get(URL).then(res=>{
            array=[...res.data]
       array.find(item => item.id === id).contentEditable=true;
        // contentEditable ? contentEditable = false : contentEditable = true;
        dispatch(editItem(array))
    })
    //
    // stateDate.todoList.find(item => item.id === id).contentEditable = contentEditable;
    //
    // return fetchshowItems(stateDate.statusOfList)
}

const postContent=(value,id,dispatch)=>{
    let array=[];
    axios.get(URL).then(res=>{
        array=[...res.data]
      let item=  array.find(item => item.id === id);
        item.value=value;
        URL=URL+'/'+id;
        array.find(item => item.id === id).value=value;
        axios.put(URL,item).then();
        dispatch(editItem(array))
    })
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

export {fetchaddItems, fetchchnageContent, fetchshowItems, fetchchnageItems,postContent}