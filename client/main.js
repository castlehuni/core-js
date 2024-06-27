import clearContents from "./lib/dom/clearContents.js";
import { changeColor, delayP, getNode, renderEmptyCard, renderSpinner, renderUserCard, tiger } from "./lib/index.js";

/* global gsap */

const ENDPOINT = 'http://localhost:3000/users'

const userCardInner = getNode('.user-card-inner');

async function renderUserList(){

  // 로딩 스피너 렌더링
  renderSpinner(userCardInner)

  await delayP(2000);

  try{

    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        console.log(this);
        this._targets[0].remove()
      }
    })
    // getNode('.loadingSpinner').remove()

    const response = await tiger.get(ENDPOINT);

    const userData = response.data;

    userData.forEach(user => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card',{
      x:-100,
      opacity:0,
      stagger: {
        amount: 1,
        from:'start'
      }
    })
  }
  catch{
    console.error('에러 발생!!');
    renderEmptyCard(userCardInner);
  }
  
}

renderUserList()

function handleDeleteCard(e){
  const button = e.target.closest('button');

  if(!button) return;

  const article = button.closest('article');
  const index = article.dataset.index.slice(5);
  console.log(index)
  tiger.delete(`${ENDPOINT}/${index}`)
  .then(()=>{
    // 요청 보내고 랜더링하기
    clearContents(userCardInner);
    renderUserList();
  })
}

userCardInner.addEventListener('click', handleDeleteCard)

const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');

function handleCreate(){
  gsap.to('.pop',{autoAlpha:1})
}

function handleCancel(e){
  e.stopPropagation();
  gsap.to('.pop',{autoAlpha:0})
}

function handleDone(e){
  e.preventDefault();

  const name = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  tiger.post(ENDPOINT,{name, email, website})
  .then(()=>{
    gsap.to('.pop',{autoAlpha:0});
    clearContents(userCardInner);
    renderUserList();
  })
}


createButton.addEventListener('click',handleCreate);
cancelButton.addEventListener('click',handleCancel);
doneButton.addEventListener('click',handleDone);

