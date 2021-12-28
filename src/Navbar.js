import React from "react";
import Logo from "./Assets/pro.jpg";

class Navbar extends React.Component {
  render() {
    return (
      <>
       
        <div className="container">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5" >
            <div className="col-10 col-sm-8 col-lg-6" >
              <img
                src={Logo}
                className="d-block mx-lg-auto  img-thumbnail"
                alt="Bootstrap Themes"
                width="350"
                height="350"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Merna Hassan
              </h1>
              
              <h1 >  I am a <span className=" fw-bold lh-1 mb-3" style={{"color": "rgb(233, 159, 132);"}}>Creative</span>  Web Developer and Content Creator</h1>
                        <br/> 
                        <p>I am a front-end developer and content creator, living in Alexandria. <br/>
                            I am currently working as a frrelancer, I love what I do</p>
              
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button onClick={()=>window.location.replace("/#footer")}
                  type="button"
                  className="btn btn-outline-dark text-uppercase" size="sm"
                >
                  Contact ME
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
