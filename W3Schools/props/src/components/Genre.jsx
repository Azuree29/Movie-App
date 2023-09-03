import React from 'react'
import './Genre.css'
import Movie from './Movie'


function Genre({name, description, movieTitle1, movieTitle2 }) {
    return(
<div className="Genre">
    <div className="move">
       <article>Genres: {name}</article>
       <div className="images-desc">
        <img src="https://www.greenscene.co.id/wp-content/uploads/2020/06/Pineapple-Express-1024x731.jpg"></img>
       <p className="plot">{description}</p>
       </div>
       <h3>{movieTitle1}</h3>
       <h3>Year: 2008</h3>
       <br>
       </br>
       <br></br>
       <br></br>
       <article>Genre: Romance</article>
       <div className="images-desctwo">
        <img src="https://th.bing.com/th/id/R.e527141b1bf8ae93290b21b076c9e99d?rik=WFC3s%2bjgSr8UUA&riu=http%3a%2f%2ftreknexus.com%2fwp-content%2fuploads%2f2014%2f03%2ftreknexus_50-First-Dates.jpg&ehk=OTXu8O9LZ8Ec6UEACys3mihKjnGF82Q76ZhVcV8skyk%3d&risl=1&pid=ImgRaw&r=0"></img>
        <p>Henry is a vetinarian at Sea Life Park in Hawaii. He one day goes to a resturaunt where he falls in love with a woman.However, once he gets to know her, she has no recollitions of the following days, and relives the same day over and over. </p>
       </div>
      <Movie title={movieTitle2} year="2004"></Movie>

     
       

    </div>
</div>
    );
}

export default Genre