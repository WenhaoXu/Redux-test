import {connect} from 'react-redux';
import inputItem from "../components/header";
import {fetchaddItems} from '../fetchApi'


let URL="https://5b5193a16ecd1b0014aa3519.mockapi.io/Api/StateDate";
const mapStateToProps=(state,ownProps)=>{
    return {

    }
}


const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        addItem:(value) =>
        {
           fetchaddItems(value, dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(inputItem)