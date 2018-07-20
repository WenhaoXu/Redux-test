import {connect} from 'react-redux';
import {checkItem, editItem} from "../actions/ListItemAction"
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
            const data = fetchchnageItems(id)
            dispatch(checkItem(data))
        },


        editItem: (id) => {
            const data = fetchchnageContent(id)
            dispatch(editItem(data))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)