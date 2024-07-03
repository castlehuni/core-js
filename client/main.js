const template = document.createElement('template');
template.innerHTML = `
  <div>bye</div>
  <div>javascript</div>
`;

console.log(template);

const app = document.querySelector('#app');
const temp = document.querySelector('#temp');

// const clone = temp.content.cloneNode(true); // clone을 통해 temp의 콘텐트를 복사함 => 템플릿을 바로는 못넣기 때문에

const clone = template.content.cloneNode(true); // 훼손될 수 있으므로 html에서 작성한 코드나 스크립트로 만든 template도 clone에서 사용하는 것이 좋음
app.appendChild(clone);
