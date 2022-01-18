import dash from '../images/dash.png';
import dot from '../images/dot.png';
import { DecryptObject } from '../resources/interfaces';

function MorseToImageMapper({ morsecode, telephony }: DecryptObject) {
    return (
        <figure style= {{display: "inline-block", paddingRight: "15px"}}>
            {
                Array.from(morsecode).map((char, index) => {
                    if (char === '.') {
                        return (<span  key={char + '-' + index}><img  style= {{width: "20px", height: "20px"}} alt={"morse_code"} src={dot} /> </span>)
                    } else if (char === '-') {
                        return (<span  key={char + '-' + index}><img style= {{width: "20px", height: "20px"}} alt={"morse_code"} src={dash}/></span>)
                    } else {
                        return (<span key={char + '-' + index}> </span>)
                    }
                })
            }
            <figcaption style={{ color: "white" }}>{telephony !== "space" ? telephony : ""}</figcaption>
        </figure>
    );
}

export default MorseToImageMapper;
