// Passo 1: Criar um objeto com as informações de cada filme.
// As chaves (mario, fnaf, minecraft) correspondem ao atributo 'data-movie' do HTML.
const moviesData = {
  mario: {
    title: "Super Mario Galaxy O Filme",
    image: "mariogalaxy.jpg",
    date: "Fevereiro de 2026",
    duration: "1h 45min",
    synopsis:
      "Uma aventura espacial épica começa quando Bowser sequestra a Princesa Peach e foge para o centro do universo. Mario e seus novos amigos deverão viajar por galáxias desconhecidas para salvar o dia!",
  },
  fnaf: {
    title: "Five Nights at Freddy's 2",
    image: "fnaf2.jpg",
    date: "Dezembro de 2025",
    duration: "1h 55min",
    synopsis:
      "O terror continua. A clássica pizzaria reabre com novos e aprimorados animatrônicos. Mas algo sinistro continua a assombrar o local durante a noite. Sobreviva se puder.",
  },
  minecraft: {
    title: "Um Filme Minecraft",
    image: "minecraftmovie.jpg",
    date: "Abril de 2025",
    duration: "1h 40min",
    synopsis:
      "O amado mundo de blocos ganha vida em uma jornada inesquecível. Um grupo de aventureiros precisa usar sua criatividade para derrotar o Ender Dragon e salvar o Overworld da destruição.",
  },
};

// Passo 2: Selecionar os elementos da tela (DOM)
const modal = document.getElementById("movie-modal");
const closeBtn = document.querySelector(".close-btn");
const detailButtons = document.querySelectorAll(".btn-details");

// Elementos de texto dentro do modal
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalDuration = document.getElementById("modal-duration");
const modalSynopsis = document.getElementById("modal-synopsis");
const modalImage = document.getElementById("modal-movie-image");

// Passo 3: Adicionar evento de clique em todos os botões "Ver detalhes"
detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Pega a chave do filme que está no atributo 'data-movie' do HTML
    const movieKey = button.getAttribute("data-movie");
    const movieInfo = moviesData[movieKey];

    // Atualiza os textos do Modal com os dados do filme clicado
    modalTitle.textContent = movieInfo.title;
    modalDate.textContent = movieInfo.date;
    modalDuration.textContent = movieInfo.duration;
    modalSynopsis.textContent = movieInfo.synopsis;
    modalImage.src = movieInfo.image;
    modalImage.alt = movieInfo.title;

    // Exibe o modal alterando o display de 'none' para 'block'
    modal.style.display = "block";
  });
});

// Passo 4: Fechar o modal ao clicar no botão de fechar (X)
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Passo 5: Fechar o modal se o usuário clicar na área escura fora da janelinha
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Extra: Evitar recarregamento da página ao enviar o formulário (apenas demonstração)
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o envio real
  alert(
    "Mensagem enviada com sucesso, " +
      document.getElementById("nome").value +
      "! Obrigado pelo contato.",
  );
  contactForm.reset(); // Limpa os campos
});
// Passo 6: Adicionar scroll suave ao clicar nos links de navegação
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
