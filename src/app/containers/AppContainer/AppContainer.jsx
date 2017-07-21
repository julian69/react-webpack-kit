import React from "react";
import { connect } from "react-redux";
import { 
    BrowserRouter as Router,
    browserHistory,
    Route,
    Link
} from 'react-router-dom'

//Partials
import { Header } from "../../components/HeaderComponent/HeaderComponent";
import { Sidenav } from "../../components/SidenavComponent/SidenavComponent";
import { setidenav, toggleSidenav } from "../../actions/sidenavActions";

// Sections
import { Home } from "../../components/HomeComponent/HomeComponent";
import { Snippets } from "../../components/SnippetsComponent/SnippetsComponent";

class App extends React.Component {

    componentDidMount = () => {
     
      const _self = this;
      _self.screenSize();

      window.addEventListener("resize", function(){
              
          _self.screenSize();
      });
    }

    screenSize = () => {

       if(window.innerWidth >= 768){

          this.props.setidenav( true, false );

       }else if(window.innerWidth < 768){

          this.props.setidenav( false, true );
       }
    }

    render() {

        const toggleSidenav = (worksAllAcross, mobile) => {
         
            // if ( worksAllAcross ) {
             
               this.props.toggleSidenav( this.props.sidenav.isOpen = !this.props.sidenav.isOpen );

            // }else if( !worksAllAcross && !this.props.sidenav.isMobile && mobile){
              
            //     return;
            // }
        }

        let sidenavStatusClass =  this.props.sidenav.isOpen ?  'open' : 'close';

        return (
            <Router history={ browserHistory }>
                <div>
                    
                    <Header toggleSidenav={ toggleSidenav }
                            sidenavStatusClass={ sidenavStatusClass } />

                    <Sidenav toggleSidenav={ toggleSidenav }
                             sidenavStatusClass={ sidenavStatusClass } />

                    <section id="snippets-container" className={ sidenavStatusClass }>
                        
                        <Route exact
                           path="/" 
                           component={ Home } />

                        <Route exact
                           path="/snippets" 
                           component={ Snippets } />

                    </section>

                </div>
            </Router>
            
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
		toggleSidenav: (isOpen, isMobile) => {
			dispatch( toggleSidenav( isOpen, isMobile) );
		},
    setidenav: (isOpen) => {
      dispatch( setidenav( isOpen ) );
    }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);