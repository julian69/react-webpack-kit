import React from "react";

export class Dashboard extends React.Component {
    render (){
        return (

            <Header toggleSidenav={ toggleSidenav }
                sidenavStatusClass={ sidenavStatusClass } />

            <Sidenav toggleSidenav={ toggleSidenav }
                sidenavStatusClass={ sidenavStatusClass } />

            <section id="snippets-wrapper" className={ sidenavStatusClass }>
                <div className={`container ${this.props.plus.device}` }>
                    <div className="row">
                        <div className="col-xs-12">

                            

                        </div>
                    </div>
                </div>
            </section>

            <Plus togglePlus={ () => this.props.togglePlus( this.props.plus.isOpen = !this.props.plus.isOpen) }
                switchDevice={ switchDevice }
                plusStatusClass={ plusStatusClass }
                deviceStatusClass={ this.props.plus.device } 
            />
        );
    }
}
