import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Masonry from "react-masonry-component";
import { masonryOptions } from "../../exports";
import { useHistory } from 'react-router-dom';
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';

import profileImgComponent from '../../assets/profileComponent.png'
import './Home.scss';

const Home = (props) => {
    const { authService, authState } = useOktaAuth();
    const authStateReady = !authState.isPending;

    const userId = props.userId || 'lN7pGUXx8wx4Y2ajnmm7';
    const history = useHistory();

    const firestore = useFirestore();

    const [interests, setInterests] = useState([]);

    useFirestoreConnect([
        { collection: 'users', doc: userId } // or 'users'
    ])

    const userDetails = useSelector((state) =>
        state.firestoreReducer &&
        state.firestoreReducer.data &&
        state.firestoreReducer.data.users &&
        state.firestoreReducer.data.users[userId])

    useEffect(() => {
        if (!authStateReady) {
            authService.handleAuthentication();
        }
        console.log("Show authState", authState);
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

    if(authStateReady && authState.error) { 
        console.log("Error on authstate", authState.error);
      }

    function handleCardClick(interestId) {
        console.log("Show interestId", interestId);
        history.push('/peopleNearMe/' + interestId);
    }

    function goToProfile(e) {
        history.push('/profile');
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
                        {console.log("Interests obj ", interests)}
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