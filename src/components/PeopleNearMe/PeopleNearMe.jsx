import React from 'react';
import Person from './PersonCard';
import { useHistory } from 'react-router-dom';
import profileImgComponent from '../../assets/profileComponent.png'

import './PeopleNearMe.scss';

const PeopleNearMe = (props) => {
    const history = useHistory();

    const users = [{
        id: '1',
        name: 'Pramo',
        city: 'San Francisco',
        state: 'CA',
        email: '13pramo@gmail.com'
    }, {
        id: '2',
        name: 'Prithi',
        city: 'New York',
        state: 'NY',
        email: 'prithishni91@gmail.com'
    }];

    function goToProfile(e) {
        history.push('/profile');
    }

    return (
        <div className="PeopleNearMe">
            <div className="profile-nav">
                <img src={profileImgComponent} alt="Profile Page" onClick={goToProfile} />
            </div>
            <h4>People Near Me</h4>
            <div className="Persons">
                {
                    users && users.map(user => {
                        return <Person user={user} />
                    })
                }
            </div>
        </div>
    );
}

export default PeopleNearMe;