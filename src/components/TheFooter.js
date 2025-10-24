import { Component } from "../core/heropy";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = `
      <div>
        <a href="https://github.com/FE-t4330n/vanillajs-movie-app">
          GitHub Repository
        </a> 
      </div>
        <a href="https://github.com/FE-t4330n">
          ${new Date().getFullYear()}
          t4330n
        </a>
      <div>
     
      </div>
    `;
  }
}
