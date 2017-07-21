const sidenavReducer = (state = {
  
   isOpen: null,
   isMobile: null

}, action ) => {

    switch (action.type){

        case "SET_SIDENAV":

            state = {
                ...state,
                isOpen: action.isOpen
            };
            break;
        
        case "TOGGLE_SIDENAV":

            state = {
                ...state,
                isOpen: action.isOpen,
                isMobile: action.isMobile || state.isMobile
            };
            break;
    }

    return state;
};

export default sidenavReducer;