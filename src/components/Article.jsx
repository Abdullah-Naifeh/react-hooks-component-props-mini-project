import React from 'react';

function makeImoje (mints){
    const svgTime = mints < 30 ? 5 : 10
    const Emoje = mints < 30  ? "☕" : "🍱"
    let Emojes = ""

    for(let i = 0 ; i < mints; i+= svgTime){
        Emojes += Emoje;
    }
    return Emojes
}
function Article({title ,date ="January 1, 1970" , preview, minutes}) {
    const setOfEmojes = makeImoje(minutes)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {setOfEmojes} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;