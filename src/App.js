import React from 'react';
import Navbar from './Components/NavbarComponent';
import FooterComponent from './Components/FooterComponent';
import './assets/css/custom.css'

function App() {
  return (
      <div>
            <Navbar />
            {/* <div className="main-intro">

            </div> */}

            {/* <div className="mt-10">
                <h2 className="text-4xl text-center text-gray-800"> Website I have build</h2><br/>
                <div className="container flex flex-wrap push-up sm:mt-auto" id="websites-details">

                </div>
                <div className="bg-gray-900">
                    <h2 className="text-4xl p-10 text-center text-gray-200">GitHub Projects Samples</h2><br/>
                    <div className="container flex flex-wrap push-up">
                    </div>
                    <div className="text-center p-10">
                    </div>
                </div>
                <FooterComponent />
            </div> */}
      </div>
  );
}

export default App;
