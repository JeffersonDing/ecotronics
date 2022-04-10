import React from 'react';
import { useParams } from 'react-router-dom';

const Info = () => {
  let params = useParams();
  if (params.id) {
    return (
      <div id="info">
        <h1>{params.id}</h1>
      </div>
    );
  } else {
    return (
      <div id="info">
        <p>Lookup</p>
      </div>
    );
  }
};

export default Info;
