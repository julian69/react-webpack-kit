const sidenavReducer = (state = {
  
    isOpen: null,
    isMobile: null

}, action ) => {

    switch (action.type){

    case "TOGGLE_SIDENAV":

        state = {
            ...state,
            isOpen: action.isOpen,
            isMobile: action.isMobile 
        };
        break;
    }

    return state;
};

export default sidenavReducer;