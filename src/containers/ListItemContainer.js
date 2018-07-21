import {connect} from 'react-redux';
import {format} from "../actions/ListItemAction"
import ListItem from "../components/ListItem";
import {fetchchnageItems, fetchchnageContent,postContent,maplist} from '../fetchApi'

const mapStateToProps = (state, props) => {
    return {
        todo: maplist(state.todoList,state.statusOfList)
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        checkItem: (id) => {
         fetchchnageItems(id,dispatch)
            // dispatch(checkItem(data))
        },


        editItem: (id) => {
            fetchchnageContent(id,dispatch)
            // dispatch(editItem(data))
        },

        post:(value,id)=>{
           postContent (value,id,dispatch)
        },
        formatt:(data)=>{
            dispatch(format(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)