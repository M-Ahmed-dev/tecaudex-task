import React from 'react'

function Explore() {
  return (
    <>
        <div className="display-flex ending-div">
          <div className="column circles">
            <div className="circle1">
              <p className="exp">Explore</p>
            </div>
            <div className="explore-para-1">
              <p>Landing Page Main Button - Idle</p>
            </div>
            <div className="circle2 display-flex">
              <div className="circle1">
                <p className="exp">Explore</p>
              </div>
            </div>
            <div className="explore-para">
              <p>Landing Page Main Button - Idle</p>
            </div>
          </div>
          <div className="column stars">
            <div className="moons">
              <p>MOON</p>
              <p>MARS</p>
              <p>EUROPA</p>
            </div>
            <p className="tabsH">Tabs (Active, Hover, "and" Idle)</p>
            <div className="dots">
              <div className="small-circles"></div>
              <div className="small-circles s2"></div>
              <div className="small-circles s3"></div>
            </div>
            <p className="tabsH">Slider 1 States (Active, Hover, "and" Idle)</p>
            <div className="big-dots">
              <div className="big-circles">1</div>
              <div className="big-circles">2</div>
              <div className="big-circles">3</div>
            </div>
            <p className="tabsH">Slider 2 States (Active, Hover, "and" Idle)</p>
          </div>
        </div>
    </>
  )
}

export default Explore
