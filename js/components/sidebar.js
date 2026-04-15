class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px; height: 100vh; background-color:darkgreen!important">
			<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
				<i class="bi me-2" style="margin-left:0.8vw!important">FS</i>
				<span class="fs-4" style="margin-left:0.5vw!important">Fernando S.</span>
			</a>
			<hr>
			<ul class="nav nav-pills flex-column mb-auto">
			  <li class="nav-item">
				<a href="./html/progmodi/home.html" id="progmodi" class="nav-link text-white">
				  <i class="bi me-2 bi-bar-chart-steps" width="16" height="16"></i>
				  Programação Modular I
				</a>
			  </li>
			  <li class="nav-item progmodi" hidden>
				<a href="./html/progmodi/visualg.html" class="nav-link text-white">
				  <i class="bi me-5" width="16" height="16"></i>
				  VisualG
				</a>
			  </li>
			  <li hidden>
				<a href="./html/devmob/home.html" id="devmob" class="nav-link text-white">
				  <i class="bi me-2 bi-phone" width="16" height="16"></i>
				  Desenvolvimento Mobile
				</a>
			  </li>
			  <li hidden>
				<a href="./html/engsoft/home.html" id="engsoft" class="nav-link text-white">
				  <i class="bi me-2 bi-pencil" width="16" height="16"></i>
				  Engenharia de Software
				</a>
			  </li>
			  <li hidden>
				<a href="./html/webi/home.html" id="webi" class="nav-link text-white">
				  <i class="bi me-2 bi-at" width="16" height="16"></i>
				  Web I
				</a>
			  </li>
			  <li hidden>
				<a href="./html/webii/home.html" id="webii" class="nav-link text-white">
				  <i class="bi me-2 bi-browser-chrome" width="16" height="16"></i>
				  Web II
				</a>
			  </li>
			</ul>
			<hr>
			<div class="dropdown">
			  <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownOwner" data-bs-toggle="dropdown" aria-expanded="false">
				<img src="https://avatars.githubusercontent.com/u/25981927" alt="" width="32" height="32" class="rounded-circle me-2">
				<strong>Fernando</strong>
			  </a>
			  <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownOwner">
				<li><a class="dropdown-item" href="https://github.com/knando">Perfil Github</a></li>
				<li><a class="dropdown-item" href="https://github.com/knando">Contato</a></li>
				<li><hr class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#">Outros</a></li>
			  </ul>
			</div>
		</div>
    `;
  }
}

customElements.define('sidebar-custom-component', Header);

function setActivePageOnSidebar(id) {
	let sidebarElement = document.querySelector('#' + id);
	if (sidebarElement != undefined) {
		sidebarElement.classList.add('active');
		sidebarElement.setAttribute('aria-current', 'page');
		for (let subLink of document.querySelectorAll('.' + id)) {
			subLink.removeAttribute('hidden');
		}
	} else console.log('Error: Selected sidebar element "' + id + '" does not exist.');
}