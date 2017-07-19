import React from "react";
import { connect } from "react-redux";

import { User } from "../../components/UserComponent/UserComponent";
import { Main } from "../../components/MainComponent/MainComponent";
import { setName } from "../../actions/userActions"

class App extends React.Component {
    
    render() {
        return (
            <div className="container">
                <Main changeUsername={ () => this.props.setName("Julieta") }/>
                <User username={ this.props.user.name } />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
		math: state.math
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch( setName(name) );
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);