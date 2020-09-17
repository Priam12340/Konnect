import  { connect } from 'react-redux';
import Profile from  '../components/Profile/Profile';
import { loadUserDetails, fetchLocationDetails } from '../actions/actions';

function mapStateToProps(state) {
    return {
        userDetails: state.authentication.userDetails,
        locationDetails: state.authentication.locationDetails
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadUserDetails: (accessToken) => dispatch(loadUserDetails(accessToken)),
        fetchLocationDetails: (latitude, longitude) => dispatch(fetchLocationDetails(latitude, longitude)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);