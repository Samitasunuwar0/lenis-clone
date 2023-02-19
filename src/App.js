
import { VscGithub } from "react-icons/vsc";
import './App.css';
import ParticlesBg from './components/ParticlesBg';

function App() {
  return (
    <div className="App">
    <ParticlesBg/>
    <div className="header">
        <h1>LENIS</h1>
    </div>
    <div className='sub-header'>
      <h4>Smooth Scroll</h4>
    </div>
    <div className='copyright'>
    <p>	&copy; 2023 STUDIO FREIGHT</p>
    </div>
      <div className='social-btn'>
        <i><VscGithub/></i>
        <p>Check it out on github</p>
    </div>
    <div className="scroll-explore">
      <h3>Scroll    
            To Explore</h3>
      </div>
      <div className="scroll-text">
      <p>A NEW SMOOTH SCROLL LIBRARY
      FRESH OUT OF THE
      STUDIO FREIGHT DARKROOM</p>
      </div>
    </div>
  );
}

export default App;
