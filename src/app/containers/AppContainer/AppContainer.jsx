import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
    BrowserRouter as Router,
    browserHistory,
    Route
} from "react-router-dom";

//Partials
import { Header } from "../../components/HeaderComponent/HeaderComponent";
import { Sidenav }  from "../../components/SidenavComponent/SidenavComponent";
import { Plus } from "../../components/PlusComponent/PlusComponent";

import { toggleSidenav } from "../../actions/sidenavActions";
import { togglePlus }  from "../../actions/plusActions";
import { switchDevice }  from "../../actions/plusActions";

// Sections
import { Home } from "../../components/HomeComponent/HomeComponent";
import { Buttons } from "../../components/ButtonsComponent/ButtonsComponent";

class App extends React.Component {

    componentDidMount(){
     
        const _self = this;
        _self.screenSize();

        window.addEventListener("resize", function(){
              
            _self.screenSize();
        });
    }

    screenSize(){

        if(window.innerWidth >= 768){

            this.props.toggleSidenav( true, false );

        }else if(window.innerWidth < 768){

            this.props.toggleSidenav( false, true );
        }
    }

    render() {

        const toggleSidenav = (restricted) => {
            
            let isOpen = this.props.sidenav.isOpen;
            let isMobile = this.props.sidenav.isMobile;

            if (restricted && !isMobile) 
                return; 
            else 
                this.props.toggleSidenav( isOpen = !isOpen, isMobile );
        };

        const switchDevice = (device) => {

            this.props.switchDevice(device);
        };


        let sidenavStatusClass = this.props.sidenav.isOpen ?  "open" : "close";
        let plusStatusClass = this.props.plus.isOpen ?  "open" : "close";

        return (
            <Router history={ browserHistory }>
                <div id="app-container">
                    
                    <Header toggleSidenav={ toggleSidenav }
                        sidenavStatusClass={ sidenavStatusClass } />

                    <Sidenav toggleSidenav={ toggleSidenav }
                        sidenavStatusClass={ sidenavStatusClass } />

                    <section className={ `snippets-wrapper ${sidenavStatusClass}` }>
                        <div className={`container ${this.props.plus.device}` }>
                            <div className="row">
                                <div className="col-sm-10 .col-sm-offset-1">
                             
                                    <Route exact
                                        path="/" 
                                        component={ Home } />

                                    <Route exact
                                        path="/buttons" 
                                        component={ Buttons } />

                                </div>
                            </div>
                        </div>
                    </section>

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
        sidenav: state.sidenav,
        plus: state.plus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSidenav: (isOpen, isMobile) => {
            dispatch( toggleSidenav( isOpen, isMobile) );
        },
        togglePlus: (isOpen) => {
            dispatch( togglePlus( isOpen ) );
        },
        switchDevice: (device) => {
            dispatch( switchDevice( device ) );
        }
    };
};

App.propTypes = {
    sidenav: PropTypes.object,
    plus: PropTypes.object,
    toggleSidenav: PropTypes.func,
    togglePlus: PropTypes.func,
    switchDevice: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);