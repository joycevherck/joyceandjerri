import React from 'react'

const Intro = () => (
  <div className="fullWidthWrapper center">
    <div className="maxWidth">
      <h2 className="fontWeightNormal">Joyce and Jerri joyfully request the pleasure of your company as we speak our vows and join in marriage in the presence of family and friends.</h2>
      <p>We'll start with a handfasting ceremony, then move to the main barn for dinner and the reception. Dress code is black tie optional.</p>
    </div>

    <div className="greyBackground flex center">
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
  </div>
)

export default Intro