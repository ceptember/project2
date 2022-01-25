import React from 'react'

function Result ({finalResult}) {
    return (
        <div className='results-div' style={ {backgroundImage: 'url(' + finalResult.image + ')',backgroundSize: '100%'}}>
        <div className='results-textbox'>
            <span>Your Result:</span>
            <h2>{finalResult.result}</h2>
            <p>{finalResult.text}</p>
            <p className="img-credit">Photo by <a target="_blank" href={"https://unsplash.com/@"+finalResult.credit}> @{finalResult.credit} for Unsplash</a></p>
        </div>
        </div>
    )

}

export default Result; 