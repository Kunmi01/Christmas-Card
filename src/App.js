import React, { Component } from 'react';
import 'core-js/fn/array/fill';
import {
  Wrapper,
  BuildingsWrapper,
  GroundWrapper,
  SantaWrapper,
  WheelWrapper,
  WheelInner,
  SnowWrapper,
  YearCircle,
  WheelCircle,
  WheelPicture,
  IntroWrapper,
  RevealingCircle,
  OutroWrapper,
} from './AppStyles';

const shortid = require('shortid');

let initialState = {};
const totalYears = 24;

class App extends Component {
  state = {
    wheelMoving: false,
    wheelTimer: '',
    wheelCompleted: false,
    interval: 2,
    activeYear: 0,
    santaFlyDuration: 40,
    startClicked: false,
    circleRevealDuration: 2,
    circleRevealCompleted: false,
    outroDuration: 5,
    outroStarted: false,
    outroCompleted: false,
  };

  constructor(props) {
    super(props);
    initialState = this.state;
  }

  componentDidUpdate() {
    const { circleRevealCompleted, wheelMoving, wheelCompleted, activeYear, outroStarted, outroCompleted } = this.state;

    if (circleRevealCompleted && !wheelMoving && !wheelCompleted && activeYear === 0) {
      this.startWheel();
    }

    if ((activeYear === 25 && wheelMoving) || (!wheelMoving && activeYear !== 0)) {
      this.stopWheel();
    }

    if (wheelCompleted && !outroStarted) {
      setTimeout(() => {
        this.startOutro();
      }, 1000);
    }

    if (outroCompleted) {
      this.resetState();
    }
  }

  startReveal = () => {
    const { circleRevealDuration } = this.state;

    this.setState({ startClicked: true }, () => {
      setTimeout(() => {
        this.setState({ startClicked: false, circleRevealCompleted: true });
      }, circleRevealDuration * 1000);
    });
  };

  startWheel = () => {
    const { interval } = this.state;

    this.setState({ wheelMoving: true, activeYear: 1 }, () => {
      this.setState({
        wheelTimer: setInterval(() => {
          const { activeYear } = this.state;
          this.setState({ activeYear: activeYear + 1 });
        }, interval * 1000),
      });
    });
  };

  stopWheel = () => {
    const { wheelTimer } = this.state;

    this.setState({
      wheelMoving: false,
      wheelCompleted: true,
      activeYear: 0,
    });

    clearInterval(wheelTimer);
  };

  startOutro = () => {
    const { outroDuration } = this.state;

    this.setState({ outroStarted: true }, () => {
      setTimeout(() => {
        this.setState({ outroCompleted: true });
      }, outroDuration * 1000);
    });
  };

  resetState = () => {
    this.setState(initialState);
  };

  render() {
    const {
      wheelMoving,
      activeYear,
      interval,
      santaFlyDuration,
      startClicked,
      circleRevealDuration,
      circleRevealCompleted,
      outroStarted,
      outroDuration,
      outroCompleted,
    } = this.state;

    return (
      <Wrapper>
        {!circleRevealCompleted ? (
          <IntroWrapper className="full-width">
            <RevealingCircle revealDuration={startClicked ? circleRevealDuration : null} />
            <button type="button" onClick={this.startReveal} hidden={startClicked}>{`Click Here >`}</button>
          </IntroWrapper>
        ) : null}
        {outroStarted && !outroCompleted ? (
          <OutroWrapper className="full-width" displayDuration={outroDuration}>
            <RevealingCircle coverDuration={outroDuration} />
            <img className="christmas" src="imgs/Christmas.png" alt="christmas" />
          </OutroWrapper>
        ) : null}
        <SantaWrapper className="full-width" flyDuration={circleRevealCompleted ? santaFlyDuration : null}>
          <img className="santa" src="imgs/Santa.png" alt="santa" />
        </SantaWrapper>
        <BuildingsWrapper className="full-width" placementDuration={startClicked ? circleRevealDuration : null}>
          <img className="buildings-back" src="imgs/Buildings-Back.png" alt="buildings-back" />
          <img className="buildings-front" src="imgs/Buildings-Front.png" alt="buildings-front" />
        </BuildingsWrapper>
        <WheelWrapper className="full-width">
          <img className="base" src="imgs/london-eye-base.svg" alt="base" />
          <WheelInner spin={wheelMoving} duration={interval * totalYears}>
            <img className="wheel" src="imgs/london-eye-wheel.svg" alt="wheel" />
            {Array(totalYears)
              .fill()
              .map((_, index) => (
                <YearCircle key={shortid.generate()} className={`year-${index + 1} ${wheelMoving && activeYear === index + 1 ? 'active' : ''}`}>
                  {index + 1}
                </YearCircle>
              ))}
          </WheelInner>
          <img className="khws-years" src="imgs/KHWS-Years.png" alt="khws-years" />
          {activeYear !== 0 && wheelMoving ? (
            <div>
              <WheelCircle
                fadeStartDuration={wheelMoving && activeYear === 1 ? interval : null}
                fadeEndDuration={activeYear === totalYears ? interval : null}
              />
              <WheelPicture
                backgroundImage={wheelMoving ? `imgs/wheel-pictures/KHWS_Xmas_Circles${activeYear}.jpg` : null}
                fadeDuration={wheelMoving ? interval : null}
              />
            </div>
          ) : null}
        </WheelWrapper>
        <SnowWrapper className="full-width">
          <img className="snow-one" src="imgs/snow.png" alt="snow" />
          <img className="snow-two" src="imgs/snow.png" alt="snow" />
        </SnowWrapper>
        <GroundWrapper className="full-width" placementDuration={startClicked ? circleRevealDuration : null}>
          <img className="tower" src="imgs/Tower.png" alt="tower" />
          <img className="gherkin" src="imgs/Gherkin.png" alt="gherkin" />
          <img className="ground" src="imgs/Ground.png" alt="ground" />
          <img className="trees-left" src="imgs/Trees-Left.png" alt="trees-left" />
          <img className="trees-right" src="imgs/Trees-Right.png" alt="trees-right" />
          <p>Celebrating 25 years of Christmas</p>
        </GroundWrapper>
      </Wrapper>
    );
  }
}

export default App;
