import React from 'react'

function ColorSec() {
  return (
    <>
        <div>
          <h1 className="color-heading"><span>01</span>COLORS</h1>

          <div className="colors-divs">
            <div className="display-flex">
              <div className="column">
                <div className="bx box1">
                  <h1>#0B0D17</h1>
                </div>
                <div>
                  <div className="display-flex  rgb-details">
                    <p style={{marginRight: "62px", color:"#D0D6F9"}}>RGB</p>
                    <p>11, 13, 23</p>
                  </div>
                  <div className="display-flex rgb-details">
                    <p style={{marginRight: "62px", color:"#D0D6F9"}}>HSL</p>
                    <p>230°, 35%, 7%</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="bx box2">
                  <h1>#D0D6F9</h1>
                </div>
                <div>
                  <div className="display-flex rgb-details">
                    <p style={{marginRight: "62px", color:"#D0D6F9"}}>RGB</p>
                    <p>208, 214, 249</p>
                  </div>
                  <div className="display-flex rgb-details">
                    <p style={{marginRight: "62px", color:"#D0D6F9"}}>HSL</p>
                    <p>231°, 77%, 90%</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="bx box3">
                  <h1>#FFFFFF</h1>
                </div>
                <div>
                  <div className="display-flex rgb-details">
                    <p style={{marginRight: "62px", color:"#D0D6F9"}}>RGB</p>
                    <p>255, 255, 255</p>
                  </div>
                  <div className="display-flex rgb-details">
                    <p style={{marginRight: "62px", color:"#D0D6F9"}}>HSL</p>
                    <p>0°, 0%, 100%</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default ColorSec
