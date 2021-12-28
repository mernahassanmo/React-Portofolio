import React from "react";

import ProgressBar from 'react-bootstrap/ProgressBar'

class Skills extends React.Component {
  render() {
    return (
      <>
        <div className="parent container d-flex justify-content-center align-items-center h-100">
          <h1>Skills</h1>
        </div>
        <p className="parent container d-flex justify-content-center align-items-center h-100">
          Skills I have learnt in Intensive Course Program with ITI 
        </p>
        <div className="container">
          <div className="row">
            <div className="col col-md-6">
              <ul>
                <li className="mb-1">HTML 5:</li>
                <li className="mb-1">CSS 3:</li>
               
                <li className="mb-1">JS:</li>
               
                <li className="mb-1">ES6:</li>
               
                <li className="mb-1">Bootstrap:</li>
                
                <li className="mb-1">Jquery:</li>
               
                <li className="mb-1">REact:</li>
              </ul>
            </div>
             <div className="col col-md-6">
             <ProgressBar className="mb-3" now={90} label={"90%"}  variant="info" />
              
              <ProgressBar  className="mb-3" now={80} label={"80%"}  variant="info" />
              
              <ProgressBar className="mb-3" now={70} label={"70%"}  variant="info" />
              
              <ProgressBar className="mb-3" now={80} label={"80%"}  variant="info" />
              
              <ProgressBar  className="mb-2" now={90} label={"90%"}  variant="info" />
             
              <ProgressBar className="mb-2" now={70} label={"70%"}  variant="info" />
              
              <ProgressBar  now={10} label={"10%"}  variant="info" />
            </div> 
          </div>
        </div>
      </>
    );
  }
}

export default Skills;
