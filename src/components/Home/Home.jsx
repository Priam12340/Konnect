import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Masonry from "react-masonry-component";
import { masonryOptions } from "../../exports";
import { useHistory } from 'react-router-dom';

import profileImgComponent from '../../assets/profileComponent.png'
import './Home.scss';

const Home = (props) => {

    const history = useHistory();

    const [userDetails] = useState({
        id: '1',
        firstName: 'Prithi',
        interests: [{
            id: '1',
            img: 'https://picsum.photos/100',
            label: 'Running'
        }, {
            id: '2',
            img: 'https://picsum.photos/100',
            label: 'Cooking'
        }]
    });

    function handleCardClick(interestType) {
        let index;
        for (index = 0; index < userDetails.interests.length; index++) {
            if (userDetails.interests[index].label === interestType) {
                history.push('/peopleNearMe/' + userDetails.interests[index].id);
                break;
            }
        }
    }

    function goToProfile(e) {
        history.push('/profile');
    }

    return (
        <div className="Home">
            <div className="profile-nav">
                <img src={profileImgComponent} alt="Profile Page" onClick={goToProfile} />
            </div>
            <div className="header">
                <h2>Welcome {userDetails.firstName}</h2>
                <h4>Check out your new buddies...</h4>
            </div>

            <div className="interest-set">
                <Masonry
                    className={"grid"}
                    elementType={"div"}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                >
                    <div id="grid_div" className="grid-cols">
                        {userDetails.interests.map((interest, i) => (
                            <div key={interest.id} className="user-interest-card">
                                <Card className="interest-card-item" as="a" onClick={() => handleCardClick(interest.label)}>
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