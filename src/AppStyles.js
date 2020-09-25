import styled from 'styled-components';

const fullWidth = 1920;
const fullHeight = 940;
const mobileWidth = 850;
const mobileHeight = 800;

export const Wrapper = styled.div`
  position: relative;
  background: url('imgs/Background.png') no-repeat;
  background-size: cover;
  text-align: center;
  max-width: ${fullWidth}px;
  height: ${fullHeight}px;
  margin: 0 auto;
  overflow: hidden;

  @media screen and (max-width: ${mobileWidth}px) {
    height: ${mobileHeight}px;
  }

  .full-width {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: ${fullWidth}px;
  }

  @font-face {
    font-family: 'Back to Black Demo';
    src: url('fonts/BacktoBlackDemo.eot');
    src: url('fonts/BacktoBlackDemo.eot?#iefix') format('embedded-opentype'), url('fonts/BacktoBlackDemo.woff2') format('woff2'),
      url('fonts/BacktoBlackDemo.woff') format('woff'), url('fonts/BacktoBlackDemo.svg#BacktoBlackDemo') format('svg');
    font-weight: 900;
    font-style: normal;
  }
`;

export const IntroWrapper = styled.div`
  top: 0;
  bottom: 0;
  z-index: 10;

  button {
    position: absolute;
    bottom: 34%;
    left: 49.8%;
    transform: translateX(-50%);
    border: none;
    background: none;
    font-family: 'Back to Black Demo', sans-serif;
    font-size: 40px;
    color: orangered;
    cursor: pointer;
    @media screen and (max-width: ${mobileWidth}px) {
      bottom: 28%;
    }
  }
`;

export const OutroWrapper = styled.div`
  top: 0;
  bottom: 0;
  z-index: 10;

  .christmas {
    position: absolute;
    top: 8%;
    left: 49.8%;
    transform: translateX(-50%);
    width: 680px;
    opacity: 0;
    ${(props) => (props.displayDuration ? `animation: christmas-in-out 1 ${props.displayDuration}s linear` : null)};

    @media screen and (max-width: ${mobileWidth}px) {
      top: 30%;
      width: 340px;
    }
  }

  @keyframes christmas-in-out {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const RevealingCircle = styled.div`
  position: absolute;
  top: 46.15%;
  left: 49.9%;
  transform: translate(-50%, -50%);
  background: transparent;
  border-radius: 100%;
  box-shadow: 0px 0px 0px 1500px white;
  width: 211.2px;
  height: 211.2px;
  ${(props) => (props.revealDuration ? `animation: circle-reveal 1 ${props.revealDuration}s linear` : null)};
  ${(props) => (props.coverDuration ? `animation: circle-cover 1 ${props.coverDuration}s linear` : null)};

  @media screen and (max-width: ${mobileWidth}px) {
    top: 49.15%;
  }

  @keyframes circle-reveal {
    0% {
      opacity: 1;
      width: 211.2px;
      height: 211.2px;
    }
    100% {
      opacity: 0;
      width: 2000px;
      height: 2000px;
    }
  }

  @keyframes circle-cover {
    0% {
      opacity: 0;
      width: 2000px;
      height: 2000px;
    }
    25% {
      opacity: 1;
      width: 40px;
      height: 40px;
    }
    85% {
      opacity: 1;
      width: 40px;
      height: 40px;
    }
    100% {
      opacity: 1;
      width: 211.2px;
      height: 211.2px;
    }
  }
`;

export const SantaWrapper = styled.div`
  top: 0;
  z-index: 0;

  .santa {
    position: absolute;
    top: 10px;
    right: 0;
    transform: translateX(-500%);
    ${(props) => (props.flyDuration ? `animation: fly-by infinite ${props.flyDuration}s linear` : null)};
  }

  @keyframes fly-by {
    0% {
      transform: translateX(-500%) translateY(40%) scale(1.35);
      opacity: 1;
    }
    45% {
      transform: translateX(100%) translateY(-20%) scale(0.5);
      opacity: 0.5;
    }
    51% {
      transform: translateX(145%) translateY(40%) scale(1.35) rotateY(180deg);
      opacity: 0.5;
    }
    55% {
      transform: translateX(100%) translateY(40%) scale(1.35) rotateY(180deg);
      opacity: 1;
    }
    100% {
      transform: translateX(-400%) translateY(-20%) scale(0.5) rotateY(180deg);
      opacity: 0.5;
    }
  }
`;

export const BuildingsWrapper = styled.div`
  bottom: 0;
  ${(props) => (props.placementDuration ? `animation: placement 1 ${props.placementDuration}s ease-in` : null)};

  .buildings-back {
    position: absolute;
    bottom: 15px;
  }

  .buildings-front {
    position: absolute;
    bottom: 35px;
  }

  @keyframes placement {
    0% {
      bottom: -10%;
    }
    100% {
      bottom: 0;
    }
  }
`;

export const WheelWrapper = styled.div`
  top: 0;
  bottom: 0;
  z-index: 2;

  .base {
    position: absolute;
    bottom: 68px;
    left: 50%;
    transform: translateX(-50%);
    width: 780px;

    @media screen and (max-width: ${mobileWidth}px) {
      width: 600px;
    }
  }

  .khws-years {
    position: absolute;
    top: 46.15%;
    left: 50%;
    transform: translate(-51%, -50%);
    width: 218px;

    @media screen and (max-width: ${mobileWidth}px) {
      top: 49.15%;
    }
  }
`;

export const WheelInner = styled.div`
  position: absolute;
  bottom: 100px;
  left: 49.9%;
  transform: translateX(-50.2%);
  width: 740px;
  animation: ${(props) => (props.spin ? `wheel-spin 1 ${props.duration}s linear` : null)};

  @media screen and (max-width: ${mobileWidth}px) {
    bottom: 210px;
    width: 360px;
  }

  @keyframes wheel-spin {
    from {
      transform: translateX(-50.2%) rotate(0deg);
    }
    to {
      transform: translateX(-50.2%) rotate(-360deg);
    }
  }

  .wheel {
    width: 100%;
  }
`;

export const YearCircle = styled.div`
  position: absolute;
  border-radius: 100%;
  background-color: white;
  width: 6.7%;
  height: 6.3%;
  font-weight: 700;
  font-size: 155%;
  color: #00919a;
  padding: 1.4% 1%;

  @media screen and (max-width: ${mobileWidth}px) {
    font-size: 65%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2.5px dotted #00919a;
    border-radius: 100%;
    width: 84%;
    height: 84%;
  }

  &.active {
    background-color: #00919a;
    color: white;

    &::after {
      border-color: white;
    }
  }

  &.year-1 {
    top: 4%;
    left: 46.7%;
    transform: rotate(0deg);
  }
  &.year-2 {
    top: 5.5%;
    left: 58.7%;
    transform: rotate(15deg);
  }
  &.year-3 {
    top: 9.7%;
    left: 70%;
    transform: rotate(30deg);
  }
  &.year-4 {
    top: 16.6%;
    left: 79.6%;
    transform: rotate(45deg);
  }
  &.year-5 {
    top: 25.4%;
    left: 87.1%;
    transform: rotate(60deg);
  }
  &.year-6 {
    top: 35.8%;
    left: 91.7%;
    transform: rotate(75deg);
  }
  &.year-7 {
    top: 46.9%;
    left: 93.3%;
    transform: rotate(90deg);
  }
  &.year-8 {
    top: 57.9%;
    left: 91.7%;
    transform: rotate(105deg);
  }
  &.year-9 {
    top: 68.3%;
    left: 87%;
    transform: rotate(120deg);
  }
  &.year-10 {
    top: 77.1%;
    left: 79.6%;
    transform: rotate(135deg);
  }
  &.year-11 {
    top: 83.9%;
    left: 70%;
    transform: rotate(150deg);
  }
  &.year-12 {
    top: 88.2%;
    left: 58.7%;
    transform: rotate(165deg);
  }
  &.year-13 {
    top: 89.7%;
    left: 46.7%;
    transform: rotate(180deg);
  }
  &.year-14 {
    top: 88.2%;
    left: 34.6%;
    transform: rotate(195deg);
  }
  &.year-15 {
    top: 83.9%;
    left: 23.3%;
    transform: rotate(210deg);
  }
  &.year-16 {
    top: 77.1%;
    left: 13.7%;
    transform: rotate(225deg);
  }
  &.year-17 {
    top: 68.3%;
    left: 6.3%;
    transform: rotate(240deg);
  }
  &.year-18 {
    top: 57.9%;
    left: 1.7%;
    transform: rotate(255deg);
  }
  &.year-19 {
    top: 46.9%;
    left: 0%;
    transform: rotate(270deg);
  }
  &.year-20 {
    top: 35.8%;
    left: 1.7%;
    transform: rotate(285deg);
  }
  &.year-21 {
    top: 25.5%;
    left: 6.3%;
    transform: rotate(300deg);
  }
  &.year-22 {
    top: 16.6%;
    left: 13.7%;
    transform: rotate(315deg);
  }
  &.year-23 {
    top: 9.7%;
    left: 23.3%;
    transform: rotate(330deg);
  }
  &.year-24 {
    top: 5.5%;
    left: 34.6%;
    transform: rotate(345deg);
  }
`;

export const WheelCircle = styled.div`
  position: absolute;
  bottom: 53.55%;
  left: 49.81%;
  transform: translate(-50%, 50%);
  background: white;
  border-radius: 100%;
  width: 543px;
  height: 543px;
  ${(props) => (props.fadeStartDuration ? `animation: fade-in 1 ${props.fadeStartDuration / 2}s linear` : null)};
  ${(props) => (props.fadeEndDuration ? `animation: fade-out 1 ${props.fadeEndDuration}s linear` : null)};

  @media screen and (max-width: ${mobileWidth}px) {
    bottom: 50.8%;
    left: 49.83%;
    width: 264px;
    height: 264px;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const WheelPicture = styled.div`
  position: absolute;
  bottom: 53.55%;
  left: 49.81%;
  transform: translate(-50%, 50%);
  background: url(${(props) => props.backgroundImage}) center no-repeat;
  background-size: 155%;
  border-radius: 100%;
  width: 543px;
  height: 543px;
  animation: ${(props) => (props.fadeDuration ? `fade-in-out infinite ${props.fadeDuration}s linear` : null)};

  @media screen and (max-width: ${mobileWidth}px) {
    bottom: 50.8%;
    left: 49.83%;
    width: 264px;
    height: 264px;
  }

  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px dotted white;
    border-radius: 100%;
    width: 94%;
    height: 94%;
  }
`;

export const SnowWrapper = styled.div`
  top: 0;
  bottom: 0;
  z-index: 3;

  .snow-one {
    top: -1080px;
  }

  .snow-two {
    top: 0;
  }

  .snow-one,
  .snow-two {
    position: absolute;
    animation: snow-fall infinite 15s linear;
  }

  @keyframes snow-fall {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(1080px);
    }
  }
`;

export const GroundWrapper = styled.div`
  top: 0;
  bottom: 0;
  z-index: 3;

  p {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Back to Black Demo', sans-serif;
    color: red;
    font-size: 40px;
    margin: 0;

    @media screen and (max-width: ${mobileWidth}px) {
      font-size: 24px;
    }
  }

  .tower,
  .gherkin {
    position: absolute;
    bottom: 40px;
  }

  .tower {
    left: 0;
    ${(props) => (props.placementDuration ? `animation: tower-in 1 ${props.placementDuration}s ease-in` : null)};
  }

  .gherkin {
    right: 0;
    ${(props) => (props.placementDuration ? `animation: gherkin-in 1 ${props.placementDuration}s ease-in` : null)};
  }

  .ground,
  .trees-left,
  .trees-right {
    position: absolute;
    bottom: 0;
  }

  .trees-left {
    left: 0;
    ${(props) => (props.placementDuration ? `animation: trees-left-in 1 ${props.placementDuration}s ease-in` : null)};
  }

  .trees-right {
    right: 0;
    ${(props) => (props.placementDuration ? `animation: trees-right-in 1 ${props.placementDuration}s ease-in` : null)};
  }

  @keyframes tower-in {
    0% {
      left: -10%;
    }
    100% {
      left: 0;
    }
  }

  @keyframes gherkin-in {
    0% {
      right: -10%;
    }
    100% {
      right: 0;
    }
  }

  @keyframes trees-left-in {
    0% {
      left: -10%;
      bottom: -10%;
    }
    100% {
      left: 0;
      bottom: 0;
    }
  }

  @keyframes trees-right-in {
    0% {
      right: -10%;
      bottom: -10%;
    }
    100% {
      right: 0;
      bottom: 0;
    }
  }
`;
