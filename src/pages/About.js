import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AirPods from '../img/airpods.png';

const About = () => {
  const [disable, setDisable] = useState(true);
  return (
    <div id="about">
      <h1>About</h1>
      <div className="about-content">
        <p>
          Welcome to the UCC x BH 2022 electronics drive. Although COVID is
          still very much a part of our lives, with the number of vaccinations
          increasing each day, we hope to take this opportunity to give back to
          our communities.
        </p>
        <p>
          This year our project focuses on donating electronics for the purpose
          of charity with refurbishment in mind. You might think this is just
          any charitable drive, but there&apos;s a twist; this is no ordinary
          charity drive where you drop off your item and forget about it. The
          electronics drive is accepting anything related to technology whether
          that be your old iPhone, keyboard, mouse, or whole computer.
        </p>
        <p>
          Every item that you submit will also be required to have a printed QR
          code attached to it (this will be important for later). The QR code
          will allow us to access the basic information of the item you
          submitted such as the device type, brand, and condition (you will fill
          in a form latter).
        </p>
        <p>
          This enables us to track incomming donations and award prizes to
          students who donated the most. The QR codes mentioned previously come
          into play when at the end of the drive a raffle takes place.
          Obviously, the more items you submit, the higher your chances are of
          winning the raffle prize.
        </p>
        <p className="textbf">
          If you bring in a device that&apos;s in perfect condition, you will
          recieve 5 entries to the raffle; if it&apos;s needs some clean-up or
          refurbishing, you will recieve 3 entries; even if you bring in a
          device that e-waste, you can still get 1 entry to the raffle!
          It&apos;s important to properly recycle e-waste.
        </p>
        <p>
          We&apos;ve decided that this year&apos;s prize will be a brand new
          pair of Apple 3rd gen AirPods!
        </p>
        <div>
          <img className="roatate" src={AirPods} alt="AirPods" />
          <h2>
            Apple AirPods 3rd Gen <h2>$239</h2>
          </h2>
        </div>

        <p>
          As mentioned, refurbishment is one of the main aspects of this drive
          as well: all items that are deemed not suitable to be donated straight
          away will be put aside for potential refurbishing. Members of the UCC
          electronics club will gain volunteer hours for their contributions to
          helping refurbish used technology.
        </p>
        <p>
          By continuing to the submission form, you agree to comply with the
          electronics drive&apos;s rules and the Organizers of the drive will
          have the right to remove your entry from the raffle if you do not
          comply. The organizers are the Final Decision-Making Authority.
        </p>
      </div>
      <div className="check-container">
        <div className="checkbox">
          <input
            type="checkbox"
            id="check"
            onChange={() => {
              setDisable(!disable);
            }}
            value={disable}
          />
          <label>I Agree</label>
        </div>
        <Link to="/new">
          <button disabled={disable}> Create New Lable</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
