import React from 'react';
import './App.css';
import SearchGadget from './components/search-gadget/search-gadget';

function App() {
  return (
    <div>
      <div className="blue-section">
        <div className="middle-container">
          <header>
            <img className="header-img" src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/header/logo_white.svg" alt="Car Hire - Rentalcars.com"/>
            <ul className="header-ul">
              <li>£ British Pounds</li>
              <li>☕English</li>
              <li>🤷 Manage Booking</li>
              <li>✔️ Sign in</li>
            </ul>
          </header>

          <div className="two-sections-container">
            <div className="section left-section">
              <SearchGadget></SearchGadget>
            </div>
            <div className="section right-section">
              <h1>Car Hire – Search, Compare & Save</h1>
              <div>✅ Proper Good</div>
              <div>✅ Well Cheap</div>
              <div>✅ Jolly good time all round</div>
            </div>
          </div>

          

        </div>
      </div>
      
    </div>
  );
}

export default App;
