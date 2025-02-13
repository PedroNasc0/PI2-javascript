import styled from "styled-components";
import corin from "../Som/corin.mp3";

const Co = styled.div`

margin-left: 45%;
padding: 10px;

& .btn-53,
& .btn-53 *,
& .btn-53 :after,
& .btn-53 :before,
& .btn-53:after,
& .btn-53:before {
  border: 0 solid;
  box-sizing: border-box;
}

& .btn-53 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000;
  background-image: none;
  color: #fff;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
}

& .btn-53:disabled {
  cursor: default;
}

& .btn-53:-moz-focusring {
  outline: auto;
}

& .btn-53 svg {
  display: block;
  vertical-align: middle;
}

& .btn-53 [hidden] {
  display: none;
}

& .btn-53 {
  border: 1px solid;
  border-radius: 999px;
  box-sizing: border-box;
  display: block;
  font-weight: 900;
  overflow: hidden;
  padding: 1.2rem 3rem;
  position: relative;
  text-transform: uppercase;
}

& .btn-53 .original {
  background: #fff;
  color: #000;
  display: grid;
  inset: 0;
  place-content: center;
  position: absolute;
  transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
}

& .btn-53:hover .original {
  transform: translateY(100%);
}

& .btn-53 .letters {
  display: inline-flex;
}

& .btn-53 span {
  opacity: 0;
  transform: translateY(-15px);
  transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s;
}

& .btn-53 span:nth-child(2n) {
  transform: translateY(15px);
}

& .btn-53:hover span {
  opacity: 1;
  transform: translateY(0);
}

& .btn-53:hover span:nth-child(2) {
  transition-delay: 0.1s;
}

& .btn-53:hover span:nth-child(3) {
  transition-delay: 0.2s;
}

& .btn-53:hover span:nth-child(4) {
  transition-delay: 0.3s;
}

& .btn-53:hover span:nth-child(5) {
  transition-delay: 0.4s;
}

& .btn-53:hover span:nth-child(6) {
  transition-delay: 0.5s;
}
  & .btn-53:hover span:nth-child(7) {
  transition-delay: 0.6s;
}
  & .btn-53:hover span:nth-child(8) {
  transition-delay: 0.7s;
}
  & .btn-53:hover span:nth-child(9) {
  transition-delay: 0.8s;
}
  & .btn-53:hover span:nth-child(10) {
  transition-delay: 0.9s;
}
  & .btn-53:hover span:nth-child(11) {
  transition-delay: 1s;
}
`;
const playSound = () => {
    const audio = new Audio(corin);
    audio.play(); 
  };


function Corinthians(){
return(
    <Co>
        <button onMouseEnter={playSound} class="btn-53">
  <div class="original">Corinthians</div>
  <div class="letters">  
    <span>C</span>
    <span>O</span>
    <span>R</span>
    <span>I</span>
    <span>N</span>
    <span>T</span>
    <span>H</span>
    <span>I</span>
    <span>A</span>
    <span>N</span>
    <span>S</span>
  </div>
</button>
    </Co>

)
}

export default Corinthians