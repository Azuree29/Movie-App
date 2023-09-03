import React from 'react'
import './Genre.css'

function Movie({title, year}) {
    return(
        <>
        <h2> {title}</h2>
        <h2>Year: {year}</h2>

        </>
    )
}

export default Movie