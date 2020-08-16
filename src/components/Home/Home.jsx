import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardImg,
} from "shards-react";

const Home = () => {

    let card = [
        { "type": "running", "img":"/location"}, 
        { "type": "running", "img":"/location"}
    ];

    function handleCardClick() {
        console.log("Card clicked");
    }

    return (
        <div className="Home">
            <h1>Home</h1>
            <Card onClick={handleCardClick} style={{ maxWidth: "300px" }}>
                <CardImg src="https://place-hold.it/300x200" />
                <CardBody>
                    <CardTitle>Lorem Ipsum</CardTitle>
                    <p>Lorem ipsum dolor sit amet.</p>
                </CardBody>
            </Card>
        </div>
    );
};

export default Home;