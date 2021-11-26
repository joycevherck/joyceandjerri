import React, { useState } from 'react'

const Intro = () => {
  const [type, setType] = useState(null)

  return (
    <div className="fullWidthWrapper center">
      <div className="flex center">
        <div>
          <p>When</p>
          <h2 className="fontWeightNormal mb1 greenText">Tue 4 October 2022</h2>
          <h3 className="fontWeightNormal greenText">
            Ceremony: 1.30pm—6pm<br />
            Reception: 7.15pm—11.30pm
          </h3>
        </div>
        <div>
          <p>Where</p>
          <h2 className="fontWeightNormal mb1 greenText">The Green Cornwall</h2>
          <h3 className="fontWeightNormal mb1 greenText">Netherton, Upton Cross, Liskeard PL14 5BD</h3>
  
          <a href="https://g.page/thegreenweddingsincornwall?share" target="_blank" rel="noreferrer">
            View on map
          </a>
        </div>
      </div>
  
      <div className="greyBackground flex center">
        <div>
          <h2>Schedule</h2>
  
          <button onClick={() => setType('ceremony')}>I'm a ceremony guest</button>
          <button onClick={() => setType('reception')}>I'm a reception guest</button>
  
          <p><small>(please check your invite to see which guest type you are)</small></p>
  
          {type === 'ceremony' &&
            <>
              <p>|</p>
              <h3 className="fontWeightNormal mb1 greenText">Mon 3 October 2022</h3>
              <p>3pm check-in for accomodation</p>
              <p>5pm-8pm dinner</p>
      
              <p>|</p>
              <h3 className="fontWeightNormal mb1 greenText">Tue 4 October 2022</h3>
              <p>7am breakfast</p>
              <p><strong>11am ceremony</strong></p>
              <p>6pm dinner</p>
              <p><strong>7.15pm reception</strong></p>
            </>
          }

          {type === 'reception' &&
            <>
              <p><strong>7.15pm reception</strong></p>
            </>
          }
          
        </div>
      </div>
    </div>
  )
}

export default Intro