import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
    for (let i = 0; i < 500; i++) {
      //choose random char from chars
      const rand = chars[Math.floor(Math.random() * chars.length)];
      const spaces = ' '.repeat(Math.floor(Math.random() * 10));
      gibberish += spaces + rand;
    }
    return gibberish.repeat(10);
  };
  return (
    <div id="home">
      <div className="gibberish">
        <p>{generateGibberish()}</p>
      </div>
      <span className="title">
        <h1>Electronics Drive 2022</h1>
        <h2>May 2nd - 13th</h2>
      </span>
      <div id="entry-button">
        <Link to="about">Enter Now...</Link>
        <p className="blinker"></p>
      </div>
    </div>
  );
}

export default Home;
