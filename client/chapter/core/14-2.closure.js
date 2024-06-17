// function earth(){
  
//   let water = true;
//   let gravity = 10;

//   return function(value){
//     gravity = value;
//     return [water, gravity];
//   }
// }

// function earth(){
 
//   let water = true;
//   let gravity = 10;
  
//   return  (value) => {
//     gravity = value;
    
//     return [water,gravity]
//   }
// }


// ufo(-10)

// const ufo = earth();



const button = document.querySelector('button');




/* normal function */
// function handleClick(){

//   let isClicked = false;

  
//   function inner() {
//     if(!isClicked){

//       document.body.style.background = 'orange'
//     }else{
  
//       document.body.style.background = 'white'
//     }
  
//     isClicked = !isClicked;
//   }

//   return inner;
// }

// button.addEventListener('click',handleClick()) // 위와 같이 작성할때는 handleclick 옆에 괄호 필수 없으면 그냥 내부 함수만 return하므로 아무 일도 일어나지 않기 때문

// IIFE
/* arrow function */
const handleClick = (() => {

  let isClicked = false;
  
  return () => {
    if(!isClicked){

      document.body.style.background = 'orange'
    }else{
  
      document.body.style.background = 'white'
    }
  
    isClicked = !isClicked;
  }

})()


button.addEventListener('click',handleClick);


function state(init){
  let value = init;

  function read(){
    return value;
  }

  function write(newValue){
    value = newValue;
  }

  return [read, write];
}

const [getNumber, setNumber] = state(10);

// const getter = result[0];
// const setter = result[1];