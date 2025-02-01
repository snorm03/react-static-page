import React from 'react';
import './Content.css';
import pigImage from './images/three-little-pigs.jpg';

function Content() {
    return (
        <div class='main'>
            <p>
            The Three Little Pigs is a fairy tale about three pig siblings
            who each build a house. The first pig builds of straw, the 
            second a house of sticks, and third a house of bricks.
            A big bad wolf huffs and puffs and blows the straw house down. It then
            makes its way to the stick house and blows it down as well. The wolf, however, fails to
            destroy the sturdy brick house. The pigs in the brick house outsmart the
            wolf, who ultimately gives up.
            </p>
            <img id='three-pigs' src={pigImage}
            alt='The three little pigs by a piano'
            height='300'/>
        </div>
    );
}

export default Content;