import React, { Component } from 'react';
import Photo from './Images/Picture.JPG';
import './Home.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Home extends Component {
  state = { data: [] };

  componentDidMount() {
    this.getTest();
  }

  getTest = () => {
    // Get the passwords and store them in state
    fetch('/api/test')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return(
      <div>
        <div className="content">
          <Grid>
            <Row>
              <Col className="column" xs={5}>
                <img className="image" src={ Photo } alt="Cody Luth"/>
              </Col>
              <Col className="column" xs={7}>
                <p>Hello! My name is Cody Luth</p>
              </Col>
            </Row>
          </Grid>
          <div>
            {console.log(data.consoleMsg + ' --- ' + data.dbStatus)}
            {data.msg}
          </div>
          <button
              className="more"
              onClick={this.getTest}>
              Refresh
            </button>
        </div>
      </div>
    )
  };
}

export default Home;
