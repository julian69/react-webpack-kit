import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
    BrowserRouter as Router,
    browserHistory,
    Route
} from "react-router-dom";
import { NavLink } from "react-router-dom";

// Actions
import { togglePlus }  from "../../actions/plusActions";
import { switchDevice }  from "../../actions/plusActions";

// Components
import { Plus } from "../../components/PlusComponent/PlusComponent";
import { Home } from "../../components/HomeComponent/HomeComponent";
import { Section } from "../../components/SectionComponent/SectionComponent";

class App extends React.Component {

    render() {

        let plusStatusClass = this.props.plus.isOpen ?  "open" : "close";

        return (
            <Router history={ browserHistory }>

                <div id="app-container">

                    <NavLink to="/"
                        activeClassName="active">
                        Home
                    </NavLink>  

                    <NavLink to="/Section"
                        activeClassName="active">
                        Section
                    </NavLink> 




                    <Route exact
                        path="/" 
                        component={ Home } />

                    <Route exact
                        path="/section" 
                        component={ Section } />
                           
                    <Plus togglePlus={ () => this.props.togglePlus( this.props.plus.isOpen = !this.props.plus.isOpen) }
                        switchDevice={ switchDevice }
                        plusStatusClass={ plusStatusClass }
                        deviceStatusClass={ this.props.plus.device } 
                    />

                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        plus: state.plus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        togglePlus: (isOpen) => {
            dispatch( togglePlus( isOpen ) );
        },
    };
};

App.propTypes = {
    plus: PropTypes.object,
    togglePlus: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);