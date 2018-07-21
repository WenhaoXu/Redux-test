import {connect} from 'react-redux';
import {addItem} from "../actions/headerAction"
import inputItem from "../components/header";
import {fetchaddItems} from '../fetchApi'

const mapStateToProps=(state,ownProps)=>{
    return {

    }
}


const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        addItem:(value) =>

        {
           const data=fetchaddItems(value)
            dispatch(addItem(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(inputItem)