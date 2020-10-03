const initialState = {

};

function authentication(state = initialState, action) {
    switch (action.type) {
        case 'GET_USER_DETAILS':
            return { ...state, userDetails: action.userDetails };
        case 'GET_LOCATION_DETAILS':
            return { ...state, locationDetails: action.locationDetails };
        default:
            return state;
    }
}

export default authentication;