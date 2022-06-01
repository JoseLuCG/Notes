const users = [
    ["Lola", "La vida es como la vida misma"],
    ["Manolo", "Fabada pasada no mueve molino"],
    ["Sandrita", "No por mucho madrugar los clavos te caen del cielo"]
]

customElements.define('user-data', class UserData extends HTMLElement {
    constructor() {
      super();
      let template = document.querySelector('#user');
      let templateContent = template.content;
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
  }
})

const container = document.querySelector("#mainContainer")

for (let item of users) {
    const user = document.createElement("user-data");
    user.innerHTML = `
      <span slot="userName">${item[0]}</span>
      <span slot="status">${item[1]}</span>
    `
    container.appendChild(user)
}