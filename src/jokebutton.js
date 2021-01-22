import React from 'react'

export default function JokeButton (props) {
   return (
        <nav>
            <button
                onClick = {props.getJoke}
                > 
                U Get Joke Now!

            </button>
        </nav>


   )
}