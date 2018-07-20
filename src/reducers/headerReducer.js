export default (state = {todoList: [], statusOfList: 'all'}, action) => {
    switch (action.type) {

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




