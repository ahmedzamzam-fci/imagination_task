import Interaction from './Interaction';
import Atractor from './Attractor';
import Results from './Results';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Atractor />} />
        <Route path="/interaction" element={<Interaction />} />
        <Route path="/results/:messages" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
