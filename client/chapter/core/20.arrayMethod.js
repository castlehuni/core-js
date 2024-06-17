/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

// function isArray(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
// }

// function typeOf(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase()
// }

const people = [
  {
    id: 0,
    name: '홍길동',
    age: 25,
    job: '물음표 살인마',
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/50.jpg',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id: 1,
    name: '홍길순',
    age: 58,
    job: '요식업 사장님',
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id: 2,
    name: '김지수',
    age: 12,
    job: '디스코드 봇',
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id: 3,
    name: '한철수',
    age: 35,
    job: '비둘기',
    imgSrc:'https://randomuser.me/api/portraits/thumb/men/78.jpg',
    imgAlt:'대체 텍스트입니다.'
  }
]



/* 요소 순환 ---------------------------- */

// people.forEach(u => u.job);

people.forEach((user)=>{
  console.log(user.job);
})


const span = document.querySelectorAll('span');

span.forEach((tag) => {
  tag.addEventListener('click',function(){
    this.style.color = 'dodgerblue';
  })

})

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

// first.addEventListener('click', ()=>{
//   console.log("first를 클릭하셨습니다.");
// })

// second.addEventListener('click', ()=>{
//   console.log("second를 클릭하셨습니다.");
// })

// third.addEventListener('click', ()=>{
//   console.log("third를 클릭하셨습니다.");
// })

/* 원형 파괴 ----------------------------- */

// push
people.push('admin');

// pop
people.pop();

// unshift
// shift
// reverse
const arr =[...people];
arr.reverse();

// console.log(arr);

// splice
// people.splice(0, 2, '안녕', '잘가');

// sort

function compare({age:a},{age:b}){
  if(a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if(a == b) return 0; // 두 값이 같은 경우 
  if(a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

// people.sort(compare); // sort는 compare function이 필요함

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
const toSorted = people.toSorted(compare);

// toReversed
const toReversed = people.toReversed();

// toSpliced
const toSpliced = people.toSpliced(0,2)

// map

// 이름만 담은 배열 반환
// const nameList = people.map((user) => {
//   return user.name;
// })

const nameList = people.map(u => u.name);

// 현재 나이의 +2 배열 반환
// const agePlusTwoList = people.map((user) => {
//   return user.age + 2;
// })

const agePlusTwoList = people.map(u => u.age + 2);

// const nameTag = people.map((user) => {
//   let templete = `
//     <li>이름: ${user.name}</li>
//   `
//   return templete;
// })

// nameTag.forEach((tag) => {
//   document.body.insertAdjacentHTML('beforeend', tag);
// })


const cardTag = people.map(({name,age,job,imgSrc,imgAlt})=>{
  
  let template = /* html */`
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li> <span class="strong">이름</span> : ${name}</li>
        <li> <span class="strong">나이</span> : ${age}</li>
        <li> <span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `
  return template;
})

const ul = document.querySelector('ul');

cardTag.forEach(tag => ul.insertAdjacentHTML('beforeend',tag))

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
const 홍 = people.find((item)=>{
  return item.name === '홍길순'
})
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter
const filter = people.filter((item) => {
  return item.age > 20;
})

// console.log(...filter);


/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// const a = people.reduce((acc, cur) => {
//   return acc + cur.age;
// }, 0) // 위 코드에서 초기값을 설정하지 않으면 객체 + Number이므로 toString이 동작하여 '[object Object]581235' 다음과 같은 값이 생성됨

const reduce = people.reduce((acc,cur) => acc + cur.age ,0)

const template = people.reduce((acc,cur)=>{
  return acc + `<li class="userCard"> ${cur.name} : ${cur.age} </li>`
},'')

ul.insertAdjacentHTML('beforeend',template)


// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '유진 정민 현주 재명';

// split : 문자 -> 배열
const stringToArray = str.split(' ');
console.log(stringToArray);

// join
const arrayToString = stringToArray.join('/');
console.log(arrayToString);


const products = [
  {name: '냉동 만두', price: 10000, brand: '비비고'},
  {name: '냉동 피자', price: 15000, brand: '오뚜기'},
  {name: '냉동 치킨 너겟', price: 12000, brand: '하림'},
  {name: '냉동 감자튀김', price: 8000, brand: '맥케인'},
  {name: '냉동 새우', price: 18000, brand: '곰곰'}
];

const forEach = (func, iter) => {
  for(let a of iter){
    func(a);
  }
}

forEach((item)=>{
  console.log(item)
},[1,2,3]);


const map = (f, i) => {
  let result = [];
  
  for(const a of i){
    result.push(f(a))
  }

  return result;
}


const _filter = (f, i) => {
  let result = [];

  for(const a of i){
    if (f(a)){
      result.push(a);
    }
  }

  return result;
}

// console.log(_filter(n => n > 3, [1,2,3,4,5]));

const _reduce = (f, acc, i) => {

  if(!i){
    i = acc;
    acc = i.shift();
    // i = acc[Symbol.iterator]();
    // acc = i.next().value
  }

  for(const a of i){
    acc = f(acc,a);
  }
  return acc;
}

const add = (a, b) => a + b;
console.log(_reduce((t, p) => t + p.price, 0, products));

console.log( 


  _reduce(
    add,
    map(p => p.price,
      _filter(p => p.price < 10000,products)),
  )
  
);
