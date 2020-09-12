
import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Button } from "shards-react";

import './Profile.scss';

const Profile = () => {

    const { authService, authState } = useOktaAuth();
    console.log("Showing authState in pending", authState);

    function logout() {
        if (authState.isAuthenticated) {
            authService.logout();

        }
    }

    return (
        <div>
            Profile Page
            <Button variant="primary" onClick={logout}>Logout</Button>
        </div>
    )



}

export default Profile;