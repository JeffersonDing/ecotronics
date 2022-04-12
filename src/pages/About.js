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
          Et esse voluptate dolore eu elit cupidatat magna id est nostrud
          labore. Et qui in ipsum exercitation aliqua deserunt pariatur esse
          tempor cupidatat fugiat est consequat. Irure aliquip dolore deserunt
          anim nisi eu esse. Dolor elit magna ipsum anim nisi do sint non esse
          consequat reprehenderit laboris. Fugiat cillum id est occaecat
          adipisicing esse quis Lorem pariatur.
        </p>
        <p>
          Qui magna laboris do sint ad occaecat non nostrud anim reprehenderit
          irure. Aute esse consectetur duis ex exercitation aliqua cillum elit
          aliqua aliqua elit proident. Tempor aliquip id quis ea do quis.
        </p>
        <div>
          <img className="roatate" src={AirPods} alt="AirPods" />
          <h2>
            Apple AirPods 3rd Gen <h2>$239</h2>
          </h2>
        </div>

        <p>
          Sunt occaecat eu laborum exercitation enim amet voluptate cillum
          consequat voluptate tempor et. Exercitation ullamco nulla elit Lorem
          nostrud magna nostrud laboris culpa laborum non. Laboris anim magna in
          aute non aliqua voluptate mollit excepteur consequat eu non. Et aliqua
          magna eiusmod pariatur aliqua labore Lorem. Commodo enim tempor aute
          id veniam amet voluptate commodo cillum. Aute non ut magna ex. Sit
          velit commodo enim aute sunt pariatur ipsum deserunt in commodo nulla
          cupidatat aliquip irure.
        </p>
        <p>
          Laborum ullamco dolor deserunt culpa cupidatat pariatur amet ad velit
          pariatur mollit nostrud dolor reprehenderit. In sunt est aliqua sit
          irure commodo adipisicing Lorem esse. Exercitation Lorem enim sint
          tempor pariatur deserunt. Ut voluptate cillum voluptate consequat.
          Occaecat culpa aliquip Lorem ex esse sint nostrud.
        </p>
        <p>
          Dolore cillum magna voluptate proident magna enim reprehenderit. Anim
          ut deserunt velit est magna magna quis eiusmod adipisicing. Deserunt
          aute eu do incididunt aliquip sunt nulla proident officia veniam ex in
          aute proident. Quis cupidatat qui minim cillum occaecat occaecat est
          excepteur ea ipsum dolor. Id irure fugiat est aliquip laborum magna
          sint dolor dolore dolore id culpa deserunt. Ad elit consequat Lorem
          veniam minim consectetur eu sint.
        </p>
        <p>
          Lorem proident pariatur deserunt cupidatat eiusmod dolore dolor
          occaecat Lorem elit quis nisi irure reprehenderit. Dolore et esse elit
          magna sunt sit adipisicing est duis exercitation nostrud.
          Reprehenderit officia ullamco in sint laborum exercitation eiusmod
          magna proident mollit magna cupidatat. Laboris magna ea in consequat
          enim proident exercitation duis. Commodo veniam commodo do esse ad
          consequat eiusmod dolore ad eiusmod voluptate est officia ipsum.
          Excepteur aliqua esse irure excepteur enim enim adipisicing duis
          nostrud amet eiusmod aliqua consequat. Nulla eiusmod dolor consectetur
          ipsum quis.
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
