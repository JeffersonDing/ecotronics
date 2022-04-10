import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import db from '../config/firebase';

/*
API Details:

AUTO-ID 
{
  "timestamp": UNIX timestamp,
  "name": "John Doe",
  "school" : "UCC",
  "email": "john.doe@gmail.com",
  "device": "Smartphone",
  "brand": "Apple",
  "condition": "Good",
  "status": "STRING",
}
*/

const New = () => {
  const [info, setInfo] = useState({
    timestamp: Date.now(),
    name: '',
    school: '',
    email: '',
    device: '',
    brand: '',
    condition: '',
    status: 'Pending',
  });
  const addData = async () => {
    console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID);
    const ref = collection(db, 'ecotronics');
    const timestamp = Date.now();
    console.log(await addDoc(ref, { hello: 'test', timestamp }));
  };

  return (
    <div id="new">
      <div className="form-container">
        <form>
          <div className="form-group">
            <div>
              <label htmlFor="fname">Name:</label>
              <input type="text" name="fname" placeholder="John" />
            </div>
            <div>
              <label htmlFor="lname">Email:</label>
              <input type="text" name="femail" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="school">School:</label>
              <select name="school">
                <option value="UCC">UCC</option>
                <option value="BH">BH</option>
              </select>
            </div>
            <div>
              <label htmlFor="dtype">Device Type:</label>
              <select name="dtype">
                <option value="Smartphone">Smartphone</option>
                <option value="Laptop">Laptop</option>
                <option value="Desktop">Desktop PC</option>
                <option value="Tablet">Tablet</option>
                <option value="IPod">iPod</option>
                <option value="Cameras">Digital Cameras</option>
                <option value="Consoles">Consoles</option>
                <option value="Wearables">Wearables</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="fbrand">Brand:</label>
              <input type="text" name="fbrand" placeholder="John" />
            </div>
            <div>
              <label htmlFor="condition">Condition:</label>
              <select name="condition">
                <option value="Good">Good</option>
                <option value="Mint">Mint</option>
                <option value="Poor">Poor</option>
                <option value="NotWorking">Not Working</option>
              </select>
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default New;
