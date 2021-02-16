import React from 'react';
import Card from './Card';
import {robots} from './robot';

const CardList = () =>{
    const cardComponent = robots.map((user, i) =>{
        return <Card id={user.id} name={user.name} email={user.email}/>
    })
    return(
    <div>
        {cardComponent};
    </div>
    )
}

export default CardList;