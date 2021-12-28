import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
 


class Footer extends React.Component {
  render() {
    return( 
      <>
    <div className="parent container d-flex justify-content-center align-items-center h-100">
          <h1 id="footer">Contact Me On:</h1>
        </div>
<div className="container my-5">

  <footer className="text-center text-white" style={{"background-color": "#f1f1f1;"}}>
 
  <div className="container pt-4">
    <section>
    <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><FaFacebookSquare /></a>

<a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.linkedin.com/feed/"
        role="button"
        data-mdb-ripple-color="dark"
        ><FaLinkedin /></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://github.com/"
        role="button"
        data-mdb-ripple-color="dark">
       <FaGithub /> </a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://mail.google.com/mail/u/0/?ogbl#inbox"
        role="button"
        data-mdb-ripple-color="dark"
        ><FaGoogle /></a>

    </section>
   
   
  </div>
 

  
  <div className="text-center text-dark p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
    © 2021 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">Merna Hassan</a>
  </div>
  
</footer>
  
</div>
</>
);

  }
}

export default Footer;
