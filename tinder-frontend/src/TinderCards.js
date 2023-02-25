import React, {useEffect, useState} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from './axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const req = await axios.get('/tinder/cards');
            console.log("This "+ JSON.stringify(req));
            setPeople(req.data.data);

        }

        fetchData();
    }, []);

    console.log(people);
    const swiped = (direction, nameToDelete) => {
        console.log("Removing: "+ nameToDelete);
        // setLastDirection(direction)
    }

    const outOfFrame = (nameOfPerson) => {
        console.log(nameOfPerson + " left the screen!");
    }

  return (
    <div className='tinderCards'>

        <div className='tinderCards__cardContainer'>
        {people.map((person)=>(
            <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir)=>swiped(dir, person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}
            >

            <div
                style={{
                    backgroundImage: "url("+person.imgUrl+")"
                }}
                className="card"
            >
                <h3>{person.name}</h3>
            </div>

            </TinderCard>
        ))}
        </div>

        
    </div>
  )
}

export default TinderCards