import React from 'react';

import '../cards/card.styles.css';

export const Card = props => (
<div className = 'card-container'>
    <h2>
        {props.monster.name}
    </h2>
    <img alt = 'Monster' src = {`https://www.serebii.net/pokemongo/pokemon/${props.monster.id + 151}.png`} />
    <h4>
        {props.monster.company.catchPhrase}
    </h4>
</div>


);