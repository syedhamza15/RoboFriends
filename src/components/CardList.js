import React from 'react';
import Card from './Card';


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
const randomBg = randomNumber(1,2);
const randomPfp = randomNumber(1,5);


const CardList = ({robots}) =>{

    const cardComponent = robots.map((user, i) =>{

        return (<Card 
        key={"key"+i} 
        id={user.id} 
        name={user.name} 
        email={user.email}
        bg = {randomBg}
        pfp = {randomPfp}
        />)
    })
    return(
    <div className="flex flex-wrap flex-auto items-stretch justify-center">
        {cardComponent}
    </div>
    )
}

export default CardList;