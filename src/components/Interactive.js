import React from 'react'

function Interactive() {
  return (
    <>
        <div className="typo">
          <h1 className="color-heading"><span>03</span>INTERACTIVE ELEMENTS</h1>
        </div>

        <div className="topnav">
          <a href="#home" className="active">00  ACTIVE</a>
          <a href="#news">01  HOVERED</a>
          <a href="#contact">00  IDLE</a>
        </div>



        <div className="xyz">
          <p className="xyz-heading">Different States of Navigation Bar</p>
        </div>
    </>
  )
}

export default Interactive
