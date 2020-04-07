import React from 'react';
import Photo from './Images/Picture.JPG';
import './Home.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

function Home() {
  return (
    <div>
      <div className="content">
        <Grid>
          <Row>
            <Col className="column" xs={5}>
              <img className="image" src={ Photo } />
            </Col>
            <Col className="column" xs={7}>
              <p>Hello! My name is Cody Luth</p>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
