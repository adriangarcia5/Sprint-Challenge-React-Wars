import React from "react";
import { Card as SemanticCard } from 'semantic-ui-react'

function Card(props){
    console.log(props.person)
    console.log('Test', Object.keys(props.person))
    
    return  ( 

    <SemanticCard>
        <SemanticCard.Content>
        <SemanticCard.Header> 
            {props.person.name}
            </SemanticCard.Header>

            <SemanticCard.Description> 
            <p><strong>Height: </strong>{props.person.height}</p>
            <p><strong>Weight: </strong>{props.person.mass} kg</p>
            <p><strong>Hair Color: </strong>{props.person.hair_color}</p>
            <p><strong>Skin Color: </strong>{props.person.skin_color}</p>
            </SemanticCard.Description>
           </SemanticCard.Content>
            </SemanticCard>
    
    )
};

export default Card;