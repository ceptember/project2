import React from 'react'

function Result ({finalResult}) {
    return (
        <div className='results-div' style={ {backgroundImage: 'url(' + finalResult.image + ')',backgroundSize: '100%'}}>
        <h2>Your Result:</h2>
        <h3>{finalResult.result}</h3>
        <p>{finalResult.text}</p>
        <p className="img-credit">Photo by <a target="_blank" href={"https://unsplash.com/@"+finalResult.credit}> @{finalResult.credit} for Unsplash</a></p>
        </div>
    )

}

export default Result; 