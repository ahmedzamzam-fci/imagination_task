import interactionBackground from '../images/interaction-background.png';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function Interaction() {
  const navigate = useNavigate();
  const [inputMessage, setInputMessage] = useState<string>("");
  const [redirectTime, setredirectTime] = useState(30000);
  let redirectTimeOut: any;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target[0].value) {
      navigate(`/results/${e.target[0].value}`);
    }
  }

  const setTimeouts = () => {
    redirectTimeOut = setTimeout(() => {
      navigate("/");
    }, redirectTime);
  };

  const clearTimeouts = () => {
    if (redirectTimeOut) clearTimeout(redirectTimeOut);
  };

  useEffect(() => {
    const events = [
      'mousemove',
      'mousedown',
      'click',
      'scroll',
      'keypress'
    ];

    const resetTimeout = () => {
      clearTimeouts();
      setTimeouts();
    };

    for (let i in events) {
      window.addEventListener(events[i], resetTimeout);
    }

    setTimeouts();
    return () => {
      for (let i in events) {
        window.removeEventListener(events[i], resetTimeout);
        clearTimeouts();
      }
    }
  });


  return (
    <div style={{
      backgroundImage: `url(${interactionBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
      height: "100vh", width: "100vw",
    }}>
      <div style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        top: 300,
        textAlign: "center"
      }}>
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h1 style={{ color: "white", fontFamily: "Courier New" }}>Enter Your message</h1>
          <input style={{ color: "black", fontFamily: "Courier New", fontWeight: "bold", fontSize: "25px", width: "60%", height: "60px", textAlign: "center" }} autoFocus type="text" maxLength={20} value={inputMessage} pattern="[a-zA-Z0-9\s]+" title="Only AlphaNumeric Values are allowed" onChange={(value) => {
            setInputMessage(value.target.value)
          }} />
          <p style={{ marginTop: "10px", color: "white" }}>({inputMessage.length}/20)</p>
          <button style={{
            marginTop: "100px",
            backgroundColor: "black", borderRadius: "34px", border: inputMessage.length <= 0 ? "3px solid #808080" : "3px solid white",
            display: "inline-block", cursor: "pointer", color: inputMessage.length <= 0 ? "#808080" : "white",
            fontFamily: "Courier New", fontSize: "22px", padding: "7px 45px",
            textDecoration: "none",
            textShadow: "0px 1px 0px #2f6627"
          }} disabled={inputMessage.length <= 0} type="submit">Translate</button>
        </form>
      </div>
    </div >
  );
}

export default Interaction;
