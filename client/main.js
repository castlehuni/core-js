import data from './data/data.js';
import clearContents from './lib/dom/clearContents.js';
import {getNode, getRandom, insertLast} from './lib/index.js'

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');

function handleSubmit(e){
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)]; 

  clearContents(result);
  insertLast(result, pick);
  console.log(pick);
}

submit.addEventListener('click', handleSubmit);