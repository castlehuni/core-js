class Button extends HTMLElement {
  constructor() {
    super();

    // c-버튼의 쉐도우 돔을 열어줘
    this.attachShadow({ mode: 'open' }); // 웹 컴포넌트만의 전용코드는 아님(div같은 태그도 사용 가능)

    // 그리고 그 안에 내가 원하는 태그를 넣을거야
    this.shadowRoot.innerHTML = `
      <button>hello</button>
    `;
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

customElements.define('c-button', Button);

console.log(
  document.querySelector('c-button').shadowRoot.querySelector('button')
);
