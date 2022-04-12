import { addDoc, collection } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    timestamp: Date.now(),
    name: '',
    school: 'UCC',
    email: '',
    device: 'Laptop',
    brand: '',
    condition: 'Good',
    status: 'Pending',
  });
  const [gibberish, setGibberish] = useState('');
  const [error, setError] = useState(<></>);
  const generateGibberish = () => {
    String.prototype.shuffle = function () {
      var a = this.split(''),
        n = a.length;

      for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
      return a.join('');
    };
    const chars =
      '          ±²³´µ¶·ËÌÍÎÏÐÑÒÓÔÕÖ×⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞←↑→↓↔↕↨∂∅∆∈∏∑−∕∙√∞∟∩∫≈≠≡≤≥⊙⌀⌂⌐⌠⌡─│┌┐└┘├┤┬ƒơƷǺǻǼ¸¹ļĽľĿŀŁłŃńŅņŇňŉŊŋŎŏŐÿĀāĂăĄąőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŰűΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϐϴЀЁЂЃЄЅІЇЈЉЊЋЌЍЎЏŲųŴŵŶŷРСТУФХЦЧШЩЭЮЯабвгдŌōежзийклмнопрстуфхцчшщъыьэюяѐёђѓєѕº»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊǽǾØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýˉ˘˙˚˛˜˝;ŧŨũŪūŬŭŮů΄΅Ά·ΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟþĆćĈĉĊċČčĎЛМНОПďĐđĒēĔĕЪЫЬěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻіїјљњћќѝўџҐґ־אבײ׳״ᴛᴦᴨẀẁẂẃẄẅẟỲỳ‐‒–—―‗‘☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!#$%&()*+,-./0123456789;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ɑϐᴦᴨ∑ơµᴛɸϴΩẟ∞∅∈∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■’ŸŹźŻżŽžſ₧₪€℅ℓ№™Ω℮⅐⅑⅓⅔ǿȘגדהוזחטיךכלםמןנסעףפץצקרשתװױșȚțɑɸˆˇАБВГДЕЖЗИЙК‚‛“”„‟†‡•…‧‰′″‵‹›‼‾‿⁀⁄⁔⁴⁵⁶⁷⁸⁹⁺⁻ⁿ₁₂₃₄₅₆₇₈₉₊₋₣₤┴┼═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬▀▁▄█▌▐░▒▓■□▪▫▬▲►▼◄◊○●◘◙◦☺☻☼♀♂♠♣♥♦♪♫✓ﬁﬂ�';
    var gibberish = '';
    for (let i = 0; i < 100; i++) {
      //choose random char from chars
      const rand = chars[Math.floor(Math.random() * chars.length)];
      const spaces = ' '.repeat(Math.floor(Math.random() * 10));
      gibberish += spaces + rand;
    }
    return gibberish.repeat(100);
  };

  const validate = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Name is required';
    if (!data.email) errors.email = 'Email is required';
    if (!data.school) errors.school = 'School is required';
    if (!data.device) errors.device = 'Device is required';
    if (!data.brand) errors.brand = 'Brand is required';
    if (!data.condition) errors.condition = 'Condition is required';
    if (
      data.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const addData = (data) => {
    const ref = collection(db, 'ecotronics');
    return addDoc(ref, data);
  };

  const handleSubmit = async () => {
    const errors = validate(info);
    if (Object.entries(errors).length !== 0) {
      setError(
        Object.entries(errors).map(([key, value]) => {
          return <p key={key}>{value}</p>;
        })
      );
    } else {
      setError(<p>Submitting...</p>);
      addData(info).then((data) => {
        navigate(`/info/${data.id}`);
      });
    }
  };

  useEffect(() => {
    setGibberish(generateGibberish());
  }, [info]);
  return (
    <div id="new">
      <div className="gibberish">
        <p>{gibberish}</p>
      </div>
      <div className="form-container">
        <div className="form-group">
          <div>
            <label htmlFor="fname">Full Name:</label>
            <div className="input-container">
              <p>$</p>
              <input
                type="text"
                name="fname"
                value={info.name}
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label htmlFor="lname">Email:</label>
            <div className="input-container">
              <p>$</p>
              <input
                type="text"
                name="femail"
                value={info.email}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label htmlFor="school">School:</label>
            <select
              name="school"
              value={info.school}
              onChange={(e) => setInfo({ ...info, school: e.target.value })}
            >
              <option value="UCC">UCC</option>
              <option value="BH">BH</option>
            </select>
          </div>
          <div>
            <label htmlFor="dtype">Device Type:</label>
            <select
              name="dtype"
              value={info.device}
              onChange={(e) => setInfo({ ...info, device: e.target.value })}
            >
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
            <div className="input-container">
              <p>$</p>
              <input
                type="text"
                name="fbrand"
                placeholder="Apple"
                value={info.brand}
                onChange={(e) => setInfo({ ...info, brand: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label htmlFor="condition">Condition:</label>
            <select
              name="condition"
              value={info.condition}
              onChange={(e) => setInfo({ ...info, condition: e.target.value })}
            >
              <option value="Good">Good</option>
              <option value="Mint">Mint</option>
              <option value="Poor">Poor</option>
              <option value="NotWorking">Not Working</option>
            </select>
          </div>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div className="error">{error}</div>
      </div>
    </div>
  );
};

export default New;
