import React from 'react'

function Result ({finalResult}) {
    return (
        <div className='results-div' style={ {backgroundImage: 'url(' + finalResult.image + ')',backgroundSize: '100%'}}>
        <h2>Your Result:</h2>
        <h3>{finalResult.result}</h3>
        <p>{finalResult.text}</p>
        <p className="img-credit">{finalResult.credit}</p>
        </div>
    )

}

export default Result; 