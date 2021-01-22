import React from 'react'


export default function JokeContainer(props) {
    return (
        <section>
            <h3>the joke:</h3>
            {
                props.jokes.map(j => (
                    <p>{j}</p>
                ))
            }
            
        </section>
    );
}


