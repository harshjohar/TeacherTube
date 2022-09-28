import React from 'react'
import classes from './Navbar.module.css'
import img from './atcoder.png'

function Navbar() {
  return (
    <div className={classes.navbar}>
        <h3>teacher tube</h3>
        <div className={classes['nav--auth']}>
            <button>join class</button>
            <img src={img}></img>
        </div>
    </div>
  )
}

export default Navbar