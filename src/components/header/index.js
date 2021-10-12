import React from 'react'
import './styles.scss'
import Lavender from '../../images/lavender.JPG'

const Header = () => (
  <div className="headerWrapper">
    <img src={Lavender} alt="" />
    <div className="headerText">
      <span>04.10.2022</span>
      <h1>Joyce & Jerri</h1>
      <p>We're getting married and you're invited</p>
    </div>
  </div>
)

export default Header