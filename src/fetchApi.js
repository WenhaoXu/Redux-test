import React from 'react';

import axios from 'axios';
import {addItem} from "./actions/headerAction"
import {checkItem, editItem,format} from "./actions/ListItemAction"
import {showTodoList} from "./actions/footerAction"
let URL="https://5b5193a16ecd1b0014aa3519.mockapi.io/Api/StateDate";

// const stateDate = {
//     todoList: [{id: "145151", name: "", value: "fafa", contentEditable: false, display: "block"}],
//     statusOfList: "all"
// }



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
        let newUlr=URL+'/'+id;
        let newItem= array.find(item=>item.id===id)
        newItem.name===""?newname="checked":newname
        array.find(item=>item.id===id).name=newname
            axios.put(newUlr,newItem)
                dispatch(checkItem(array))

        }
    )
}


const fetchchnageContent = (id,dispatch) => {
    let array=[];
    axios.get(URL).then(res=>{
            array=[...res.data]
       array.find(item => item.id === id).contentEditable=true;
        dispatch(editItem(array))
    })
}

const postContent=(value,id,dispatch)=>{
    let array=[];
    axios.get(URL).then(res=>{
        array=[...res.data]
      let item=  array.find(item => item.id === id);
        item.value=value;
     let   newUlr=URL+'/'+id;
        array.find(item => item.id === id).value=value;
        axios.put(newUlr,item)
        dispatch(editItem(array))
    })
}

const fetchshowItems = (status,dispatch) => {
    let array=[];
    axios.get(URL).then(res=>{
        array=[...res.data]
        array=maplist(array,status)
        dispatch(showTodoList(status,array))
    })
}

const maplist=(array,status)=>{

 return  array.filter(x => {
        if (status === "all") {
            return true;
        }
        if (status === "active") {
          return    x.name === ""
        }
        if (status === "complete") {
         return  x.name === "checked"
        }
    })
}

export {fetchaddItems, fetchchnageContent, fetchshowItems, fetchchnageItems,postContent,maplist}