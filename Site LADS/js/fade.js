// Seleciona todos os elementos que devem ter o efeito de fade
const elements = document.querySelectorAll('.fade-in-element');

// Função que será chamada quando o elemento entrar ou sair da tela
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        // Se o elemento estiver visível na tela, aplica o fade-in
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-element');
            entry.target.classList.remove('fade-out-element');
        } else {
            // Se o elemento não estiver mais visível, aplica o fade-out
            entry.target.classList.add('fade-out-element');
            entry.target.classList.remove('fade-in-element');
        }
    });
};

// Cria o IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // O elemento começa a desaparecer quando 50% dele sai da tela
});

// Observa todos os elementos
elements.forEach(element => {
    observer.observe(element);
});


