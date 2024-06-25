import clearContents from "./lib/dom/clearContents.js";
import { getNode, getNodes, diceAnimation, attr, insertLast, endScroll } from "./lib/index.js";

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

let count = 0;
let total = 0;

function createItem(value){
  const template = `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
  `
  return template
}


function renderRecordItem(){
  
  // const diceValue = getNode('#cube').getAttribute('dice');
  const diceValue = Number(attr(getNode('#cube'),'dice'));

  insertLast('.recordList tbody',createItem(diceValue))
  
  // 1. insertLast 함수 사용

  // 2. template 전달

  // 3. diceValue interpolation(보간법) 하기 ex) <td>${diceValue}</td>
  endScroll(recordListWrapper);

}

const handleRollingDice = (() => {

  
  let isClicked = false;
  let stopAnimation;

  return ()=>{
    if(!isClicked){
      console.log('클릭 첫 번째');
      stopAnimation  = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    }
    else{
      console.log('클릭 두 번째');
      clearInterval(stopAnimation)
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
  
  
    isClicked = !isClicked;
  }
})()

function handleRecord(){
  recordListWrapper.hidden = false;
  renderRecordItem();
}

function handleReset(){
  recordListWrapper.hidden = true;
  clearContents('tbody');
  count = 0;
  total = 0;
}


rollingButton.addEventListener('click',handleRollingDice)
recordButton.addEventListener('click',handleRecord)
resetButton.addEventListener('click',handleReset)