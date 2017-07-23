const sidenavReducer = (state = {
  
    isOpen: false,
    device: "desktop"

}, action ) => {

    switch (action.type){

    case "TOGGLE_PLUS":

        state = {
            ...state,
            isOpen: action.isOpen
        };
        break;
    
    case "SWITCH_DEVICE":

        state = {
            ...state,
            device: action.device
        };
        break;

    }

    return state;
};

export default sidenavReducer;