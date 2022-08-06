import React from 'react'

function Planets() {
  return (
    <>
        <div className="typo">
          <h1 className="color-heading"><span>02</span>TYPOGRAPHY</h1>
        </div>

        <div className="display-flex planets ">
          <div className="column plan-1">
            <p>Heading 1 - Bellefair Regular - 150px</p>
            <h1>EARTH</h1>
            <p>Heading 2 - Bellefair Regular - 100px</p>
            <h2>VENUS</h2>
            <p>Heading 3 - Bellefair Regular - 56px</p>
            <h3>JUPITER "and" SATURN</h3>
            <p>Heading 4 - Bellefair Regular - 32px</p>
            <h4>URANUS, NEPTUNE, "and" PLUTO</h4>
            <p>Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
            <p className="end-p">SO, YOU WANT TO TRAVEL TO SPACE</p>
          </div>
          <div className="column plan-2">
            <p className="p2-headings">Subheading 1 - Bellefair Regular - 28px</p>
            <h5>384,400 km</h5>
            <p className="p2-headings">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
            <p className="avg-distance">AVG. DISTANCE</p>
            <p className="p2-headings">Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
            <p>EUROPA</p>
            <p className="body-text">BODY TEXT</p>
            <p className="body-text-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
              Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
              pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
              nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
              vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
              sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
              nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
          </div>
        </div>
    </>
  )
}

export default Planets
