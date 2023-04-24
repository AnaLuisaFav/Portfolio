// scroll

const menuLinks = document.querySelectorAll('.menu a[href^="#"], a.link-transicao[href^="#"]');
const menuLinksTopo = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element) {
	const id = element.getAttribute("href");
	return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
	event.preventDefault();
	hashDoLink = event.target.hash; // obtendo o hash
	menuAtivo = document.querySelectorAll('[href*="'+ hashDoLink +'"]'); // procurando elementos com aquele hash
	menuLinksTopo.forEach((elemento) => { // percorrendo todos os links e removendo a classe "ativo" de todos
		elemento.classList.remove("ativo");
	});
	menuAtivo.forEach((elemento) => { // adicionando a classe "ativo" no link que foi clicado
		elemento.classList.add("ativo");
	});

	const distanceFromTheTop = getDistanceFromTheTop(event.target) - 1; /* -50 */
	smoothScrollTo(0, distanceFromTheTop, 800, hashDoLink);

}

menuLinks.forEach((link) => {
	link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration, hash) {
	const startX = window.scrollX || window.pageXOffset;
	const startY = window.scrollY || window.pageYOffset;
	const distanceX = endX - startX;
	const distanceY = endY - startY;
	const startTime = new Date().getTime();

	duration = typeof duration !== "undefined" ? duration : 800;

	const easeInOutQuart = (time, from, distance, duration) => {
		if ((time /= duration / 2) < 1)
			return (distance / 2) * time * time * time * time + from;
		return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
	};

	const timer = setInterval(() => {
		const time = new Date().getTime() - startTime;
		const newX = easeInOutQuart(time, startX, distanceX, duration);
		const newY = easeInOutQuart(time, startY, distanceY, duration);
		if (time >= duration) {
			clearInterval(timer);
			window.location.hash=hash;
		}
		window.scroll(newX, newY);
	}, 1000 / 60);
}


window.addEventListener("scroll", (event) => {
	let scroll = this.scrollY;
	console.log(scroll)
	menuLinksTopo.forEach((elemento) => {
		hash = elemento.getAttribute("href");
		area = document.querySelectorAll('[id*="'+ hash.slice(1) +'"]'); // procurando elementos com aquele hash
		area.forEach((elemento) => { // percorrendo todos os links e removendo a classe "ativo" de todos
			topoDoElemento = parseInt(elemento.offsetTop-(elemento.offsetHeight/2));
			finalDoElemento = parseInt(elemento.offsetTop+(elemento.offsetHeight/2))

			if (scroll >= topoDoElemento && scroll <= finalDoElemento) {
				menuLinksTopo.forEach((elemento) => { // percorrendo todos os links e removendo a classe "ativo" de todos
					elemento.classList.remove("ativo");
				});
				menuAtivo = document.querySelectorAll('.menu [href*="'+ hash +'"]'); // procurando elementos com aquele hash
				menuAtivo.forEach((elemento) => { // adicionando a classe "ativo" no link que foi clicado
					elemento.classList.add("ativo");
				});
			} 
			 
		});
	});

});

// typing

const printSentence = (id, sentence, speed = 75) => {
	let index = 0;
	let element = document.getElementById(id);
	h2mobile = document.getElementById('h2-mobile');
	h2desktop = document.getElementById('h2-desktop');
  
	let timer = setInterval(function() {
		const char = sentence[index];
		
		if (char === '<') {
			index = sentence.indexOf('>', index);  
		}
		
		element.innerHTML = sentence.slice(0, index);
		
		if (++index === sentence.length+1) {
			clearInterval(timer);
			h2mobile.classList.add('statusH2mobile');
			h2desktop.classList.add('statusH2desktop');
		}
	}, speed);
}

printSentence(
	'titulo',
	'Olá, muito prazer!<br>Sou a <span><</span>Ana Luisa<span>/></span>'
);


// leia mais

function leiaMais () {
	event.preventDefault();
	var pontos = document.getElementById("pontos")
	var maisTexto = document.getElementById("mais")
	var leiaMais = document.getElementById("LeiaMais")
	var leiaMenos = document.getElementById("LeiaMenos")

	pontos.style.display = "none"
	maisTexto.style.display = "inline"
	leiaMais.style.display = "none"
}

function leiaMenos () {
	event.preventDefault();
	var pontos = document.getElementById("pontos")
	var maisTexto = document.getElementById("mais")
	var leiaMais = document.getElementById("LeiaMais")
	var leiaMenos = document.getElementById("LeiaMenos")

	pontos.style.display = "inline"
	maisTexto.style.display = "none"
	leiaMais.style.display = "inline"
}


//menu mobile

const menuToggle = document.querySelector('.botao-menu');
const mainNav = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  if (this.classList.contains('open')) {
    this.classList.remove('open');
    mainNav.classList.remove('open');
  } else {
    this.classList.add('open');
    mainNav.classList.add('open');
  }

});

