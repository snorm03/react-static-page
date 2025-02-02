import React from 'react';
import './Content.css';
import pigImage from './images/three-little-pigs.jpg';

function Content() {
    return (
        <div class='main'>
            <p>
            The Three Little Pigs is a fairy tale about three pig siblings
            who each build a house. The first pig, eager to finish the project as soon
            as possible, quickly builds his using straw. The second pig, takes a little more
            time to think and decides to build his house using sticks. The third pig spends all day carefully
            crafting his house using bricks, creating a sturdy and reliable structure.
            </p>

            <p>
            One day, a big bad wolf comes along, hungry for a snack. He smells the pig
            inside the straw house and huffs and puffs and blows the house down. He then
            makes his way to the stick house and blows it down as well. The wolf, however, fails to
            destroy the sturdy brick house. The pig in the brick house outsmarts the
            wolf, who ultimately gives up.
            </p>
            <img id='three-pigs' src={pigImage}
            alt='The three little pigs by a piano'
            height='300'/>
        </div>
    );
}

export default Content;