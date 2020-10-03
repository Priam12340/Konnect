import apiCalls from '../services/apiCalls';

export function getUserDetails(data) {
    return {
        type: 'GET_USER_DETAILS',
        userDetails: data
    };
}

export function getUserDetailsError(errorCode, errorMessage) {
    return {
        type: 'GET_USER_DETAILS_ERROR',
        error: {
            code: errorCode,
            message: errorMessage
        }
    };
}

export function loadUserDetails(accessToken) {
    return (dispatch) => {
        apiCalls.loadUserDetails(accessToken).then(
            function success(data) {
                dispatch(getUserDetails(data));
            },
            function failure(error) {
                const errorCode = error.response.status;
                const errorMessage = error.message;
                dispatch(getUserDetailsError(errorCode, errorMessage));
            }
        )
    }
}

export function getLocationDetails(data) {
    return {
        type: 'GET_LOCATION_DETAILS',
        locationDetails: data
    };
}

export function getLocationDetailsError(errorCode, errorMessage) {
    return {
        type: 'GET_LOCATION_DETAILS_ERROR',
        error: {
            code: errorCode,
            message: errorMessage
        }
    };
}

export function fetchLocationDetails(latitude, longitude) {
    return (dispatch) => {
        apiCalls.fetchLocationDetails(latitude, longitude).then(
            function success(data) {
                dispatch(getLocationDetails(data));
            },
            function failure(error) {
                const errorCode = error.response.status;
                const errorMessage = error.message;
                dispatch(getLocationDetailsError(errorCode, errorMessage));
            }
        )
    }
}