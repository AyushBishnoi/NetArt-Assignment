import './App.css';
import logo from './asserts/logo.png'
import image1 from './asserts/image1.png'
import image2 from './asserts/image2.png'
import image3 from './asserts/image3.png'
import FB from './asserts/facebook.svg'
import globe from './asserts/globe-solid.svg'
import phone from './asserts/phone.svg'

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt='logo'/>
      </div>
      <div className="container-1">
        <img src={image1} alt='image1' className='image1'/>
        <div className="container-2">
          <h3><b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></h3>
          <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul>
          <img src={image2} alt='image2' className='image2'/>
          <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong> . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <p className='para'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      <div className='container-3'>
        <img src={image3} alt='image3' width='1200'/>
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
      </div>
      <div className="container-4">
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p>CHEMICALS & PROCESS <span className='vertical-bar'>|</span> POWER <span className='vertical-bar'>|</span> WATER & WASTE WATER <span className='vertical-bar'>|</span> OILS & GAS <span className='vertical-bar'>|</span> PHARMA <span className='vertical-bar'>|</span> SUGARS & DISTILLERIES <span className='vertical-bar'>|</span> PAPER & PULP <span className='vertical-bar'>|</span> MARINE & DEFENCE <span className='vertical-bar'>|</span> METAL & MINING <span className='vertical-bar'>|</span> FOOD & BEVERAGE <span className='vertical-bar'>|</span> PETROCHEMICAL & REFINERIES <span className='vertical-bar'>|</span> SOLAR <span className='vertical-bar'>|</span> BUILDING <span className='vertical-bar'>|</span> HVAC <span className='vertical-bar'>|</span> FIRE FIGHTING <span className='vertical-bar'>|</span> AGRICULTURE & RESIDENTIAL</p>
      </div>
      <footer>
        <div className="footer-items">
          <img src={phone} alt='phone' width='32'/>
          <p>Toll Free 1800 200 1234</p>
        </div>
        <div className="footer-items">
          <img src={FB} alt='FB' width='26'/>
          <p>www.facebook.com/cripumps</p>
        </div>
        <div className="footer-items">
          <img src={globe} alt='globe' width='26'/>
          <p>www.crigroups.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
