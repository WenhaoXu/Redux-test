


export default (state = {todoList: [], statusOfList: 'all'}, action) => {
    switch (action.type) {

        case "format":{
            return {

                todoList: action.data,
                statusOfList: state.statusOfList
            }
        }


        case "AddItem": {

            return {

                todoList: action.data,
                statusOfList: state.statusOfList
            }
        }


        case "checkItem": {

            return {

                todoList: action.data,
                statusOfList: state.statusOfList
            }
        }

        case "editItem": {

            return {

                todoList: action.data,
                statusOfList: state.statusOfList
            }
        }

        case "showTodoList": {

            return {
                todoList: action.data,
                statusOfList: action.status
            }
        }


        default :
            return state
    }


}




