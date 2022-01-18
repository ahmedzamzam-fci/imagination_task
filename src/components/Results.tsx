import { useEffect, useState } from 'react';
import interactionBackground from '../images/interaction-background.png';
import { translationsDic } from '../resources/translations';
import MorseToImageMapper from './MorseToImageMapper';
import { useNavigate, useParams } from "react-router-dom";
import { DecryptObject } from '../resources/interfaces';

function Results() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [transalation, setTranslation] = useState<DecryptObject[]>([]);
  const { messages } = useParams();

  useEffect(() => {
    let arr = [];
    const translationsEntries = Object.entries(translationsDic);
    if (messages) {
      setMessage(messages);
      for (let x of messages) {
        let key = translationsEntries.filter((entry) => {
          if (isNumeric(x)) {
            return entry[0] === x;
          } else {
            return entry[0] === x.toLowerCase();
          }
        })[0];

        if (key) {
          arr.push({ morsecode: key[1].morsecode, telephony: key[1].telephony });
        } else {
          arr.push({ morsecode: "space", telephony: "space" });
        }
      }
      setTranslation(arr);
    }
    setTimeout(() => {
      navigate('/interaction')
    }, 30000)
  });

  function isNumeric(num: any) {
    return !isNaN(num)
  }

  return (
    <div style={{
      backgroundImage: `url(${interactionBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
      height: "100vh", width: "100vw",
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 250,
        textAlign: "center",
        justifyContent: "center"
      }}>
        <p style={{ color: "white", fontWeight: "bold", fontSize: "50px", fontFamily: "Courier New" }}>{message}</p>
        <div style={{
          paddingLeft: "400px",
          paddingRight: "400px",
          display: "block",
          overflow: "hidden",
        }}>
          {transalation.map((str, index) => {
            return (<MorseToImageMapper key={str + '-parent-' + index} {...str} />)
          })}
        </div>
        <button style={{
          marginTop: "150px",
          backgroundColor: "black", borderRadius: "34px", border: "3px solid white",
          display: "inline-block", cursor: "pointer", color: "white",
          fontFamily: "Courier New", fontSize: "22px", padding: "7px 45px",
          textDecoration: "none",
          textShadow: "0px 1px 0px #2f6627"
        }} onClick={() => { navigate(`/Interaction`); }} type="button">Try Again</button>
      </div>
    </div >
  );
}

export default Results;
