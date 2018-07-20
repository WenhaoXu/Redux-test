import {connect} from 'react-redux';
import {showTodoList} from "../actions/footerAction"
import footer from "../components/footer";

const mapStateToProps=(state,ownProps)=>{
    return {
         status: state.statusOfList,
    }
}


const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        showTodoList:(status) => dispatch(showTodoList(status)),
        // generateUUID:() => dispatch(generateUUID()),
        // onMul:(index, multipler) => dispatch(mulTo(index,multipler)),
        // onDaly:(index)=>dispatch(dalyTo(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(footer)