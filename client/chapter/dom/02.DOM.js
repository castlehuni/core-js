/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// defalut parameter

function getNode(node, context = document){
  // if(isString(context)){
  //   context = document.querySelector(context);
  // }

  // context가 document가 아니라면 querySelector를 돌아줘.
  if(context.nodeType !== 9){
    context = document.querySelector(context);
  }

  return context.querySelector(node);
}

getNode('.list');


function getNodes(node, context = document){
  
  if(context.nodeType !== 9){
    context = document.querySelector(context);
  }

  return context.querySelectorAll(node);
}

getNode('.list > li');

// 1. id가 visual-section인 section 태그 요소
let section = document.querySelector('#visual-section');

// 2. class가 list인 ul 태그 요소
let ul = document.querySelector('.list');

// 3. list 요소 안에 about li 태그 요소
let li = ul.querySelector('li:nth-child(2)');
// let li = document.querySelector('.list > li:nth-child(2)');

// const aboutLi = [...ul.children].find((li) => {
//  return li.textContent === 'about';
// })

const aboutLi = [...ul.children].find(li => li.textContent === 'about')

// 4. name 속성이 search-box인 form 태그 요소
let form = document.querySelector('form[name="search-box"]');

// 5. form 요소 안에 있는 모든 자식 요소 
let children = form.children;
// let children = form.querySelectorAll('*');

// 6. form 요소 안에 있는 input 태그 요소 
let input = form.lastElementChild;
// let input = children[children.length - 1];










/* 문서 대상 확인 */
// - matches
// - contains