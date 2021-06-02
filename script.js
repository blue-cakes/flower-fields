class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color:  #0a0a23;
        }
        
        ul li {
          list-style: none;
          display: inline;
        }
        
        a {
          font-weight: 700;
          margin: 0 25px;
          color: #fff;
          text-decoration: none;
        }
        
        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #fff;
        }
      </style>
      <header>
        <nav>
          <ul>
            <li> <a class="active" href="index.html"> welcome | </a> </li>
            <li> <a href="daisy.html">recent blogs | </a> </div>  </li>
            <li> <a href = "tulip.html">programmer blogs | </a></li>
            <li> <a href = "poppy.html"> writing blogs | </a> </li>
            <li> <a href = "jasmine.html">normal blogs | </a> </li>
            <li> <a href = "storage.html">all blogs | </a> </li>
            <li> <a href="visit.html">about me </a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
