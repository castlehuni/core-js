/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler(){
  console.log("click 이벤트 발생");
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
// first.onclick = handler;


// 3. 메서드 : element.addEventListener(event, handler[, phase])
function handleClick(e){
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);
}

// first.addEventListener('click', handleClick);

const second = getNode('.second');

// second.addEventListener('click', ()=>{
//   first.removeEventListener('click', handleClick);
// })



/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode(".ground")
const ball = getNode('#ball');

function handleClickBall({offsetX:x, offsetY:y}){
  
  // const {offsetX:x, offsetY:y} = e; 

  // let x = e.offsetX;
  // let y = e.offsetY;

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;


  // ball이 마우스 커서의 가운데에 위치하기 위해서 볼의 크기의 각각 가운데에 위치해야 하므로 위와 같이 작성
  ball.style.transform = `translate(${x-(w / 2)}px, ${y-(h / 2)}px)`;
}

ground.addEventListener('click', handleClickBall);


function handleMove({offsetX:x, offsetY:y}){
  console.log(x, y)

  let templete = /*html*/ `<div class="emotion" style="top:${y - 16}px; left:${x - 16}px;">😍</div>`;
  insertLast(ground, templete);
}


// let timeout;

// function debounce(callback){
//   clearTimeout(timeout)
//   timeout = setTimeout(() => {
//     callback();
//   }, 1000);
// }

function debounce(callback, limit = 500){
  let timeout;

  return function(e){
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback.call(this,e);
    }, limit);
  }
}

// ground.addEventListener('mousemove', debounce(function(e){
//   console.log(e)
//   console.log(this);
// },500));

// debounce(()=>{
//   console.log("hello!")  
// })



// let waiting = false;

// function throttle(callback){
//   if(!waiting){
//     callback()
//     waiting = true;

//     setTimeout(()=>{
//       waiting = false;
//     }, 1000);
//   }
// }

function throttle(callback, limit = 500){
  let waiting = false;
  return function(...args){
    if(!waiting){
      callback.apply(this,args)
      waiting = true;

      setTimeout(()=>{
        waiting = false;
      }, limit);
    }
  }
}

throttle(()=>{
  console.log("move!");
})

ground.addEventListener('mousemove',throttle(handleMove))


// mousemove나 window.resize와 같은 것은 너무 많이 함수가 실행됨 => 성능 면에서 문제가 발생할 수 있음 
// 그를 해결하기 위한 방식은 다음과 같음
// throttle(수도꼭지)  debounce (공 튀김 방지)


// addClass('.ground',['a','b','c'])
// addClass('.ground','a','b','c')
// addClass('.ground','a,b,c')
// addClass('.ground',{a:'one',b:'two'})