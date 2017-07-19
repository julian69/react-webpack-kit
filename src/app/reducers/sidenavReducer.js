const sidenavReducer = (state = {
    status: true
}, action ) => {

    switch (action.type){
        
        case "TOGGLE_SIDENAV_FULFILLED":

            state = {
                ...state,
                status: action.payload
            };

            break;
    }

    return state;
};

export default sidenavReducer;