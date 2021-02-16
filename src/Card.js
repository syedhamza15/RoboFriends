import React from 'react';

const Card = ({name, email, id}) =>{
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
   let random = Math.floor(Math.random() * 2) + 1;
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200&bgset=bg${randomNumber(1,2)}&set=set${randomNumber(1,4)}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>


    );
}


export default Card;