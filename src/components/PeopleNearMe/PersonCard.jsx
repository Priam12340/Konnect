import React from 'react';
import profileImgComponent from '../../assets/profileComponent.png'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons';

import './PersonCard.scss';

const Person = (props) => {

    const history = useHistory();

    function goToProfile(e) {
        history.push('/profile');
    }

    return (
        <div className="PersonCard">
            <div className="profile-nav">
                <img src={profileImgComponent} alt="Profile Page" onClick={goToProfile} />
            </div>
            <div className="user-details">
                <p className="user-name">{props.user.name}</p>
                <p className="user-area">{props.user.city}, {props.user.state}</p>
            </div>
            <div className="mail-icon">
                <a href={`mailto:${props.user.email}`}><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            <div className="plus-icon">
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </div>
    );
}

export default Person;