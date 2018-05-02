// export default function() {
//     localStorage.removeItem("username");
//     localStorage.removeItem("password");
//     return  null;
// }

import React, { Component } from 'react';
import { at_logoutCompleted} from '../actions/actions'
import { connect } from "react-redux";


class Logout extends Component {
    componentWillMount() {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        this.props.at_logoutCompleted();
        this.props.history.push("/");
    }
    render() {
        
        return (
            <div>
               
            </div>
        );
    }
}

//export default Logout;
function mapStateToProps(state) {
    return {
        ...state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        at_logoutCompleted: ()=> dispatch(at_logoutCompleted ()),
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Logout);
