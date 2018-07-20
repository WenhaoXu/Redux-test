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

        // generateUUID:() => dispatch(generateUUID()),
        // onMul:(index, multipler) => dispatch(mulTo(index,multipler)),
        // onDaly:(index)=>dispatch(dalyTo(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(inputItem)