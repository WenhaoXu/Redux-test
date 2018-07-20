import {connect} from 'react-redux';
import {showTodoList} from "../actions/footerAction"
import footer from "../components/footer";
import {fetchshowItems} from '../fetchApi'

const mapStateToProps = (state, ownProps) => {
    return {
        status: state.statusOfList,
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showTodoList: (status) => {
            const data = fetchshowItems(status);
            dispatch(showTodoList(status, data))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(footer)