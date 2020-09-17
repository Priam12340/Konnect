import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Masonry from "react-masonry-component";
import { masonryOptions } from "../../exports";
import { useHistory } from 'react-router-dom';
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { GeoFirestore } from "geofirestore";

import profileImgComponent from '../../assets/profileComponent.png'
import './Home.scss';

const Home = (props) => {
    const { authService, authState } = useOktaAuth();
    const authStateReady = !authState.isPending;

    const userId = props.userId || 'lN7pGUXx8wx4Y2ajnmm7';
    const history = useHistory();
    const latitude = props.latitude || 0;
    const longitude = props.longitude || 0;

    const firestore = useFirestore();
    const geofirestore = new GeoFirestore(firestore);
    const geocollection = geofirestore.collection("locations");

    const [interests, setInterests] = useState([]);

    useFirestoreConnect([
        { collection: 'users', doc: userId } // or 'users'
    ])

    const userDetails = useSelector((state) =>
        state.firestoreReducer &&
        state.firestoreReducer.data &&
        state.firestoreReducer.data.users &&
        state.firestoreReducer.data.users[userId])

    geocollection.doc(userId).set({
        userId: userId,
        coordinates: new firestore.GeoPoint(latitude, longitude),
    });

    useEffect(() => {
        if (!authStateReady) {
            authService.handleAuthentication();
        }


        let index;
        if (userDetails && userDetails.interests && userDetails.interests.length > 0 && interests.length === 0) {
            for (index = 0; index < userDetails.interests.length; index++) {
                let interestId = userDetails.interests[index].id;

                firestore.collection("interests").doc(interestId).get()
                    .then(interest => {
                        if (interest) {
                            let newObj = interest.data();
                            newObj['id'] = interestId;
                            setInterests(interests => [...interests, newObj]);
                        }
                    })
                    .catch(function (error) {
                        console.log("Error getting documents: ", error);
                    });

            }
        }
    })

    if (authStateReady && authState.error) {
        console.log("Error on authstate", authState.error);
    }

    function handleCardClick(interestId) {

        let interestedObj = interests.filter(function (interest) {
            return interest.id === interestId;
        })
        .map(function(interest) {
          return interest.users;
        });

        interestedObj = interestedObj[0];
        const userIds = interestedObj.map(function (user) {
            return user.id;
        });
        console.log("Show userIds", userIds);

        let propsPropagated = {
            latitude: props.latitude,
            longitude: props.longitude,
            interestId: interestId,
            userIds: userIds
        };
        history.push('/peopleNearMe/' + interestId, propsPropagated);
    }

    function goToProfile() {
        let propsPropagated = {
            latitude: props.latitude,
            longitude: props.longitude
        };
        history.push('/profile', propsPropagated);
    }

    return (
        <div className="Home">
            <div className="profile-nav">
                <img src={profileImgComponent} alt="Profile Page" onClick={goToProfile} />
            </div>
            {userDetails && <div className="header">
                <h2>Welcome {userDetails.firstName}</h2>
                <h4>Check out your new buddies...</h4>
            </div>}

            <div className="interest-set">
                <Masonry
                    className={"grid"}
                    elementType={"div"}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                >
                    <div id="grid_div" className="grid-cols">
                        {interests && interests.map((interest, i) => (
                            <div key={interest.id} className="user-interest-card">
                                <Card className="interest-card-item" as="a" onClick={() => handleCardClick(interest.id)}>
                                    <Card.Img className="interest-card-image" variant="top" src={interest.img} />
                                    <Card.Body className="interest-card-body">
                                        <Card.Title className="interest-card-title">{interest.label}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>))}
                    </div>
                </Masonry>
            </div>
        </div>
    );
};

export default Home;