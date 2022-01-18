import attractor from '../images/attractor.png'
import { useNavigate } from "react-router-dom";

function Atractor() {
  const navigate = useNavigate();

  return (
      <div onClick={() => { navigate(`/interaction`);  }} style={{
        backgroundImage: `url(${attractor})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
        height: "110vh", width: "100vw",
      }}>
      </div>
  );
}

export default Atractor;
