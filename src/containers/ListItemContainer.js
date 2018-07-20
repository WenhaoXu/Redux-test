import {connect} from 'react-redux';
import {checkItem,editItem} from "../actions/ListItemAction"
// import ListItem from "../components/ListItem";
// import {addItem} from "../actions/headerAction";
import ListItem from "../components/ListItem";


const mapStateToProps=(state,props)=>{
    return{
        todo:state.todoList.filter(x=>x.display==="block")
    }

}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        checkItem:(id) => dispatch(checkItem(id)),
        editItem:(id) => dispatch(editItem(id)),
        // onMul:(index, multipler) => dispatch(mulTo(index,multipler)),
        // onDaly:(index)=>dispatch(dalyTo(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListItem)