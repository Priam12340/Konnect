import React, { useEffect, useState } from 'react';
import Person from './PersonCard';
import { useHistory, useLocation } from 'react-router-dom';
import { useFirestore } from "react-redux-firebase";
import { GeoFirestore } from "geofirestore";
import profileImgComponent from '../../assets/profileComponent.png'

import './PeopleNearMe.scss';

const PeopleNearMe = (props) => {
    const history = useHistory();
    const firestore = useFirestore();
    const geofirestore = new GeoFirestore(firestore);
    const geocollection = geofirestore.collection("locations");
    const location = useLocation();

    const [users, setUsers] = useState([]);

    useEffect(() => {

        geocollection.near({
            center: new firestore.GeoPoint(location.state.latitude, location.state.longitude),
            radius: 1,
        }).get().then((value) => {
            // console.log(value.docs.map((d) => d.data()));
            const usersByLocation = value.docs.map((d) => d.id); 
            const usersByInterest = location.state.userIds;
            let filteredUsers = usersByInterest.filter(function(n) {
                return usersByLocation.indexOf(n) > -1;
            });

            let index;
            if (filteredUsers && filteredUsers.length > 0 && users.length === 0) {
            for (index = 0; index < filteredUsers.length; index++) {
                let userId = filteredUsers[index];

                firestore.collection("users").doc(userId).get()
                    .then(user => {
                        if (user) {
                            let newObj = user.data();
                            newObj['id'] = userId;
                            setUsers(users => [...users, newObj]);
                        }
                    })
                    .catch(function (error) {
                        console.log("Error getting documents: ", error);
                    });
                }
            }
        });
    });

    function goToProfile(e) {
        history.push('/profile');
    }

    function addBuddy(buddyDetails) {

    }

    return (
        <div className="PeopleNearMe">
            <div className="profile-nav">
                <img src={profileImgComponent} alt="Profile Page" onClick={goToProfile} />
            </div>
            <h4>People Near Me</h4>
            <div className="Persons">
                {
                    users && users.map((user, i) => {
                        return <Person key={i} addBuddy={addBuddy} user={user} />
                    })
                }
            </div>
        </div>
    );
}

export default PeopleNearMe;