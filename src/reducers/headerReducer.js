export  default  (state={todoList:[],statusOfList:'all'},action)=>{
    switch (action.type) {

        case "AddItem":{

            let uuid=generateUUID();
            let value=action.value;
             let todo=[...state.todoList];
             todo.push({id:uuid,name:"",value:value,contentEditable:false ,display:"block"})
            return{

                todoList:todo,
                statusOfList:'all'
            }
        }


        case "checkItem":{
            let id=action.id;
            let todo=[...state.todoList];
            let name=todo.find(item=>item.id===id).name;
            name===""? name="checked":name=""
            todo.find(item=>item.id===id).name=name;
            return{

                todoList:todo,
                statusOfList:'all'
            }
        }

        case "editItem":{
            let id=action.id;
            let todo=[...state.todoList];
            let contentEditable=todo.find(item=>item.id===id).contentEditable;
            contentEditable? contentEditable=false:contentEditable=true;
            todo.find(item=>item.id===id).contentEditable=contentEditable;
            return{

                todoList:todo,
                statusOfList:'all'
            }
        }

        case "showTodoList":{
            let todolist=[...state.todoList];
            todolist.map(x=>{
                if(action.status==="all"){
                    x.display="block";
                    return x;
                }
                if(action.status==="active"){
                    if(x.name==="checked"){
                        x.display="none"
                    }
                    else{
                        x.display="block"
                    }
                }
                if(action.status==="complete"){
                    if(x.name===""){
                        x.display="none"
                    }
                    else{
                        x.display="block"
                    }
                }

            })

            return {
                 todoList:todolist,
                statusOfList:action.status
            }
        }


        default :
            return state
    }


}







  var generateUUID=  () => {
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



