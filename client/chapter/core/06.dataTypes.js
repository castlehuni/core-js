/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty); //숫자형이 아닌 object로 나오는 이유는 오류임 안고 가야 함

// 2. 값이 할당되지 않은 상태
let undef;
console.log(undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let double = "hello"; //string literal
let single = 'hello';
let backtick = `hello + ${double + single}`;
console.log(backtick);

const str = new String('hello'); //constructor function

console.log(str);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150;
const floatingPointNumber = 10.5;

console.log(typeof integer);
console.log(typeof floatingPointNumber);

const num = new Number(150);
console.log(num);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 124n;
console.log(typeof bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = true;
console.log(typeof isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {
  name: "tiger",     //object literal
}
console.log(obj);

const object = new Object({name: "gildong"});
console.log(object);

// 8. 고유한 식별자(unique identifier)
const id = Symbol('uuid');
const id2 = Symbol('uuid');

console.log(typeof id);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류


console.clear();

// Object
const user = {
  name: "tiger",
  age: 20,
  sum: function(a, b){
    return a + b; 
  },

  sayHi:function(){       // 1. normal function
    return "hi";
  },

  sayHi2: () => {         // 2. arrow function
    return this;
  },

  sayHi3(){               // 3. concise method -> 가장 많이 사용
    return this;
  }
}

// Array
const newArray = new Array(10, 20, 30);

const arr = [10, 100, 1000, null, undefined, 'hello', {name:"tiger"}, function(){}];

// function
function add(a, b){
  console.log(a + b);
}

add(100, 2133);
// this


