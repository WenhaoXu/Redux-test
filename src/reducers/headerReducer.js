


export default (state = {todoList: [], statusOfList: 'all'}, action) => {
    switch (action.type) {

        case "format":{
            return {

                todoList: action.data.todolist,
                statusOfList: action.data.statusOfList
            }
        }


        case "AddItem": {

            return {

                todoList: action.data.todoList,
                statusOfList: action.data.statusOfList
            }
        }


        case "checkItem": {

            return {

                todoList: action.data.todoList,
                statusOfList: action.data.statusOfList
            }
        }

        case "editItem": {

            return {

                todoList: action.data.todoList,
                statusOfList: action.data.statusOfList
            }
        }

        case "showTodoList": {

            return {
                todoList: action.data.todoList,
                statusOfList: action.data.statusOfList
            }
        }


        default :
            return state
    }


}




