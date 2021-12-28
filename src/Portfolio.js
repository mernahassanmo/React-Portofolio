import React from "react";
import {Card, CardGroup} from 'react-bootstrap';
import Hosto from "./Assets/p.jpg";
import Articals from "./Assets/th.jfif";
import Vacations from "./Assets/Va.jfif";


class Portfolio extends React.Component {
  render() {
    return (
      <>
        <div className="parent container d-flex justify-content-center align-items-center h-100">
          <h1>Portfolio</h1>
        </div>
        <CardGroup>
          <Card className="m-3">
            <Card.Img variant="top" src={Hosto} style={{"height":"200px;"}}  />
            <Card.Body>
              <Card.Title>Hosto</Card.Title>
              <Card.Text>
              Hosto Site was the second try for me with Bootstrap, and actully it was not bad
                    and the site is responsive.
                    the site is divided into nav section and i used icons, slidshow section and it was my first time to
                    do it, body section and finally the footer with all social connection
              </Card.Text>
            </Card.Body>
            <a className="btn btn-outline-dark text-uppercase"  href='#'><span style={{"color": "azure;"}}
                       >View
                        Project</span> </a>
            
          </Card>
          <Card className="m-3">
            <Card.Img variant="top" src={Articals}  />
            <Card.Body>
              <Card.Title>Articals For You</Card.Title>
              <Card.Text>
              Articals For You is my first Blog but it still in progress, I learnt how to make
                    a blog and it put in it some of my articles as a content creator and it most thing i like doing.{" "}
              </Card.Text>
            </Card.Body>
            <a className="btn btn-outline-dark text-uppercase"  href='https://articlesforyouinarabic.blogspot.com/'><span style={{"color": "azure;"}}
                       >View
                        Project</span> </a>
            
          </Card>
          <Card className="m-3">
            <Card.Img variant="top" src={Vacations} /><br /><br />
            <Card.Body>
              <Card.Title>Vacation Trips</Card.Title>
              <Card.Text>
              Vacation Trips Site was the fiert try for me with Bootstrap, and actully it was
                    not bad and the site is responsive.
                    the site is divided into nav section and i used icons, header with a background, body section and
                    finally the footer with all social connection
              </Card.Text>
            </Card.Body>
            <a className="btn btn-outline-dark text-uppercase"  href='https://mernahassanmo.github.io/Vacationtrips.github.io/'><span style={{"color": "azure;"}}
                       >View
                        Project</span> </a>
           
            
          </Card>
        </CardGroup>
      </>
    );
  }
}

export default Portfolio;
