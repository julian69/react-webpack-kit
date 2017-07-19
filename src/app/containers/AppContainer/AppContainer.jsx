import React from "react";
import { connect } from "react-redux";

import { Sidenav } from "../../components/SidenavComponent/SidenavComponent";
import { sidenavActions } from "../../actions/sidenavActions"

class App extends React.Component {
 
    render() {
    	
        return (
            <div>
                <Sidenav toggleSidenavStatus={ () => this.props.sidenavActions( this.props.sidenav.status = !this.props.sidenav.status ) }
                		 sidenavStatus={ this.props.sidenav.status } />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		sidenav: state.sidenav
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		sidenavActions: (status) => {
			dispatch( sidenavActions(status) );
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);