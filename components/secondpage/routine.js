import React from "react";
import ReactPlayer from 'react-player'


export function Routine() {
  return (
    <div className="Routine">
      <div className="Routine-C">
        <div className="containter">
          <div className="row">
            <div className="col">
              <div className="text">
                <h2>Step 1: Cleanser</h2>
                <p>
                  <br /> Washing your face is the most basic and essential step
                  of any routine. Be sure to Wash twice a day, morning and
                  night, to avoid clogged pores, dullness and acne.
                  <br /> <br />
                  If you participate in physical activity, such as excercising;
                  always cleanse afterwards to rid the skin of any sweat and
                  oils.{" "}
                </p>
              </div>
            </div>
            <div className="col">
              <img src="https://i.imgur.com/Y9905Q5.jpg" alt="Cleanser" />
            </div>
          </div>
        </div>
      </div>

      <div className="Routine-E">
        <div className="containter">
          <div className="row">
            <div className="col">
              <img src="https://i.imgur.com/esMANOv.jpg" alt="Exfoliant" />
            </div>
            <div className="col">
              <div className="text">
                <h2>Step 2: Exfoliate </h2>
                <p>
                  <br /> Exfoliation is essential to removing dead skin cells
                  and avoiding bacterial infection.
                  <br />
                  <br />
                  Use a gel-based scrub and/or chemical peel to eliminate dirt &
                  dead skin from the face. Depending on your skin-type it is not
                  recommended to exfoliate every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Routine-S">
        <div className="containter">
          <div className="row">
            <div className="col">
              <div className="text">
                <h2>Step 3: Creams & Serums</h2>
                <p>
                  <br /> Although it is not necessary to do this step, serums
                  provide lightweight moisture that can penetrate deeper into
                  the skin to deliver more beneficial ingredients.
                  <br />
                  <br />
                  Keep it mind that serums only moisturize at a minimal extent,
                  so please use this in conjuction with your normal moisturizer.
                </p>
              </div>
            </div>
            <div className="col">
              <img src="https://i.imgur.com/JFeyJbw.jpg" alt="Serums" />
            </div>
          </div>
        </div>
      </div>

      <div className="Routine-M">
        <div className="containter">
          <div className="row">
            <div className="col">
              <img src="https://i.imgur.com/I5mnYbc.jpg" alt="Moisturizer"/>
            </div>
            <div className="col">
              <div className="text">
                <h2>Step 4: Moisturize </h2>
                <p>
                  <br /> Daily moisturizing is vital for healthy skin to prevent
                  dryness or oilyness.
                  <br />
                  <br />A moisturizer works to replenish the water content of
                  the skin either by trapping moisture in the topmost layer of
                  the skin or replenishing its water content to some degree.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Routine-SC">
        <div className="containter">
          <div className="row">
            <div className="col">
              <div className="text">
                <h2>Step 5: Sunscreen</h2>
                <p>
                  <br /> Regardless of how many steps you incorporate, sunscreen
                  is the most crucial and final step to any routine.
                  <br />
                  <br />Not only does sunscreen helps protect your skin from the
                  harmful UV rays produced by the sun, when practicing a
                  skincare routine, your skin is more sensitive and prone to sun
                  damage.{" "}
                </p>
                <a href="https://b15ib.sse.codesandbox.io/skintype" className="btn btn-primary pill px-4 py-3 text-white">
                  Discover Your Skin Type
                </a>
              </div>
            </div>
            <div className="col">
              <img src="https://i.imgur.com/QGG2byw.jpg" alt="Sunscreen" />
            </div>
          </div>
        </div>
      </div>
      <div className="Tutorial">
  
      </div>
    </div>

  
  );
}
