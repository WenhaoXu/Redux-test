import {connect} from 'react-redux';
import {checkItem, editItem,format} from "../actions/ListItemAction"
import ListItem from "../components/ListItem";
import {fetchchnageItems, fetchchnageContent} from '../fetchApi'

const mapStateToProps = (state, props) => {
    return {
        todo: state.todoList.filter(x => x.display === "block")
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

        formatt:(data)=>{
            dispatch(format(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)