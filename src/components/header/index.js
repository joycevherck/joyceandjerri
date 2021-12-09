import React from 'react'
import CTA from '../cta'
import './styles.scss'

const Header = () => (
  <div className="headerWrapper">
    <div className="headerText">
      <span>- 04.10.2022 -</span>
      <h1>Joyce & Jerri</h1>
      <p>We joyfully request the pleasure of your company as we celebrate.</p>
      <CTA />
      <div className="spacer" />
      <a href="https://www.thingstogetme.com/238781a6b6b2" target="_blank" rel="noreferrer" title="View our registry (link opens in a new window)">View our registry</a>
    </div>
  </div>
)

export default Header