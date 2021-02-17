import React from 'react';


const Card = ({name, email, id, bg, pfp}) =>{
    

    return(
        <div className="tc bg-light-green dib br3 pa3 ma4 grow bw2 w5-ns w-20-l shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200&bgset=bg${bg}&set=set${pfp}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>


    )
}


export default Card;