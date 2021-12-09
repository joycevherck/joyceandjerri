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
          {' '}|{' '}
          <a href="https://www.thegreencornwall.co.uk/about-us/location/" target="_blank" rel="noreferrer">How to get there</a>
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
              <p><strong>2pm ceremony</strong></p>
              <p>6pm dinner</p>
              <p><strong>7.15pm reception</strong></p>
              <p>11.30pm music stops</p>

              <p>|</p>
              <h3 className="fontWeightNormal mb1 greenText">Wed 5 October 2022</h3>
              <p>Breakfast</p>
              <p>Check out by 11am</p>
            </>
          }

          {type === 'reception' &&
            <>
              <p><strong>7.15pm reception</strong></p>
              <p>11.30pm music stops</p>
              <p>|</p>
              <div className="maxWidth">
                <p>
                  If you're not driving, we suggest that you book your taxi in advance for around 11:45pm/midnight at the latest.
                </p>
                <div className="flex smallGap">
                  <p>
                    Anothony’s Taxis<br />
                    <a href="tel:07788900222">07788 900 222</a>
                  </p>
                  <p>
                    Quick Cabs<br />
                    <a href="tel:01579348525">01579 348 525</a>
                  </p>
                  <p>
                    Caradon Cabs<br />
                    <a href="tel:07841993776">07841 993 776</a>
                  </p>
                  <p>
                    St Cleer Taxis<br />
                    <a href="tel:01579381212">01579 381 212</a>
                  </p>
                </div>
              </div>
            </>
          }
        </div>
      </div>

      <div className="maxWidth">
        <h2>Dress code</h2>
        <p>We’re happy for you to wear whatever you would normally wear to a wedding, but just note that we are hopefully (weather permitting) getting married outside, so suitable shoes and possibly an extra layer may be needed!</p>
      </div>
    </div>
  )
}

export default Intro