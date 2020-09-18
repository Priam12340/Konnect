
import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Button } from "shards-react";
import { usePrevious } from 'react-delta';
import { useHistory, useLocation } from 'react-router-dom';

import profileImgComponent from '../../assets/profileComponent.png'

import './Profile.scss';

const Profile = (props) => {
    const history = useHistory();
    const location = useLocation();

    const { authService, authState } = useOktaAuth();

    const [userDetails, setUserDetails] = useState();
    const prevUserDetails = usePrevious({ userDetails });

    useEffect(() => {
        if (authState.accessToken && !userDetails) {
            props.loadUserDetails(authState.accessToken);
            props.fetchLocationDetails(location.state.latitude, location.state.longitude);
        }

        const { userDetails: currentUserDetails, locationDetails } = props;
        if (currentUserDetails && locationDetails && (JSON.stringify(prevUserDetails) !== JSON.stringify(currentUserDetails))) {
            let plusCode = (locationDetails && locationDetails.plus_code.compound_code) || '';
            let address = plusCode.substring(plusCode.indexOf(' ') + 1);
            let [city, state, country] = address.split(',');
            currentUserDetails['city'] = city;
            currentUserDetails['state'] = state;
            currentUserDetails['country'] = country;
            setUserDetails(currentUserDetails);
        }
    }, [authState.accessToken, userDetails, props, prevUserDetails]);

    function logout() {
        if (authState.isAuthenticated) {
            authService.logout('/');
            history.push('/login');
        }
    }

    return (
        <div className="Profile">
            <div className="profile-nav">
                <img src={profileImgComponent} alt="Profile Page" />
            </div>
            {userDetails && <div className="user-details">
                <p className="user-name">{userDetails.name}</p>
                <p className="user-area">{userDetails.state}, {userDetails.country}</p>
            </div>}
            <Button variant="primary" onClick={logout}>Logout</Button>
        </div>
    )



}

export default Profile;