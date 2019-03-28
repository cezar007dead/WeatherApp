import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import * as service from "../src/Service/weatherService";
import {
  getWeatherAction,
  getWeatherActionAsnc
} from "../src/actions/getWeatherAction";

import { WiFahrenheit, WiStrongWind } from "react-icons/wi";

import {
  Col,
  Form,
  FormGroup,
  Card,
  CardHeader,
  CardImg,
  CardImgOverlay
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "No lat",
      longitude: "No long"
    };
  }

  // state = {
  //   latitude: "No lat",
  //   longitude: "No long"
  // };

  componentDidMount() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        () => {
          this.setState({
            latitude: "err-latitude",
            longitude: "err-longitude"
          });
        }
      );
    }
  }

  getWeather = () => {
    debugger;
    this.props.getWeatherActionAsnc({
      lat: this.state.latitude,
      long: this.state.longitude
    });
  };

  render() {
    return (
      <div className="App">
        {` Location : ${this.state.latitude} ${this.state.longitude}`}
        <button onClick={this.getWeather}>Get Weather</button>
        <div className="d-flex justify-content-center">
          <Col sm="12" md={{ size: 3 }}>
            <Card>
              <CardHeader>
                {this.props.weatherData.name == undefined
                  ? "No Information"
                  : this.props.weatherData.name}
              </CardHeader>
              <CardImg
                width="100%"
                height="150px"
                src="https://previews.123rf.com/images/hangaom/hangaom1708/hangaom170800053/84926488-cumulus-clouds-on-the-blue-sky-at-summer-day-background-1-1-ratio.jpg"
                alt="Card image cap"
              />
              <CardImgOverlay style={{ marginTop: "28px" }}>
                <Form className="justify-content-start" i>
                  <FormGroup>
                    <div>
                      {`Tempreture: `}
                      {this.props.weatherData.main == undefined
                        ? ""
                        : this.props.weatherData.main.temp}
                      <WiFahrenheit size={32} />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div>
                      <WiStrongWind size={27} />
                      {this.props.weatherData.wind == undefined
                        ? ""
                        : this.props.weatherData.wind.speed}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div>
                      {`Pressure: `}
                      {this.props.weatherData.main == undefined
                        ? ""
                        : this.props.weatherData.main.pressure}
                    </div>
                  </FormGroup>
                </Form>
              </CardImgOverlay>
            </Card>
          </Col>
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {/* {this.props.rotating} */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  getWeatherActionAsnc: val => {
    debugger;
    dispatch(getWeatherActionAsnc(val.lat, val.long));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
