import {connect} from 'react-redux';

import footer from "../components/footer";
import {fetchshowItems,getDataFromMock} from '../fetchApi'

const mapStateToProps = (state, ownProps) => {
    return {
        status: state.statusOfList,
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showTodoList: (status) => {
            const data = fetchshowItems(status,dispatch);
            // dispatch(showTodoList(status, data))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(footer)