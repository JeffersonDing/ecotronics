import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import db from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import ReactToPrint from 'react-to-print';

const Info = () => {
  let params = useParams();
  const printRef = useRef();
  const [data, setData] = useState({ id: '' });

  const fetchInfo = async (id) => {
    const ref = doc(db, 'ecotronics', id);
    const data = await getDoc(ref);

    if (data.exists()) {
      return data.data();
    }
    return null;
  };
  useEffect(() => {
    fetchInfo(params.id).then((data) => {
      setData({ id: params.id, ...data });
    });
  }, [params.id]);

  if (!data.status) {
    return (
      <div id="info">
        <h1 id="noq">No Data Found!</h1>
      </div>
    );
  }
  return (
    <>
      <div id="print-button">
        <ReactToPrint
          trigger={() => <button>Print</button>}
          content={() => printRef.current}
          pageStyle="
          @page {margin:0} 
          body {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          }"
        />
      </div>
      <div id="info">
        <div className="flex-horizontal">
          <div className="print-container" ref={printRef}>
            <div className="qr-code">
              <QRCode value={data.id} size={200} />
            </div>
            <div className="basic-info">
              <h2>Device ID:{data.id}</h2>
              <h2>Timestamp:{data.timestamp}</h2>
              <h2>Name:{data.name}</h2>
              <h2>Email:{data.email} </h2>
              <h2>School:{data.school} </h2>
            </div>
            <div className="device-info">
              <h2>Device:{data.device} </h2>
              <h2>Brand:{data.brand} </h2>
              <h2>Condition:{data.condition} </h2>
            </div>
            {data.additional && (
              <div className="additional-info">
                <h2>Additional Information:</h2>
                <ul>
                  {data.additional.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            )}
            <h2
              id="status"
              className={data.status == 'Pending' ? 'pending' : 'updated'}
            >
              Status:{data.status}{' '}
            </h2>
          </div>
          <div className="instructions">
            <h2>Instructions</h2>
            <ol>
              <li>
                Verify your information and please{' '}
                <Link to="/contact">contact us</Link> if you need to update the
                information.
              </li>
              <li>
                Click the print button and print out the label for your device.
              </li>
              <li>
                Secure the label to your device using tape, a container or
                simply place it between the screen and keyboard for laptops.
              </li>
              <li>
                Place the device at the donation box located at your school.
              </li>
              <li>
                You will recieve an email confirmation with the amount of raffle
                tickets you recieved for the item once the device is processed
                by our team.
              </li>
              <li>
                Winners will be contacted via email and displayed on the
                website.
              </li>
              <li>
                You can save this URL to lookup your devices status later. But
                we will contact you via email once we update anything.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );

  // if (params.id) {
  //   return (
  //     <div id="info">
  //       <h2>{params.id}</h2>
  //       <div id="qr">
  //         <QRCode value={params.id} size={256} />
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div id="info">
  //       <p>Lookup</p>
  //     </div>
  //   );
  // }
};

export default Info;
