import React from "react";
import Logoimg from "./Assets/logo.PNG";



class Aboutme extends React.Component {
    render() {
        return <>
            <div className="parent container d-flex justify-content-center align-items-center h-100">
             <div>
                    <h1>About Me</h1>
                </div>
                </div>
                <br/>
                <div className="parent container d-flex justify-content-center align-items-center h-100">
              <div className="row ">
                  <div className="col col-md-6"> <p>“Without ambition one starts nothing. Without work one finishes nothing. The prize will not be sent to you. You have to win it.”{' '}
                        I am a front-end developer and content creator, living in Alexandria.
                        I am currently working as a frrelancer,{' '} I really love what I do.{' '}
                        If you want to know more about me; download my resume </p></div>
                        <div className="col col-md-6"><img src={Logoimg}></img> </div>
              </div>
              </div>
                   
               

                


        </>;
    }
}

export default Aboutme;
