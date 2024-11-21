document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    function criarFlashcard(pergunta) {
        const card = document.createElement('article');
        card.classList.add('cartao');
        
        const conteudo = document.createElement('div');
        conteudo.classList.add('cartao__conteudo');

        const titulo = document.createElement('h3');
        titulo.textContent = pergunta.categoria;

        const perguntaDiv = document.createElement('div');
        perguntaDiv.classList.add('cartao__conteudo__pergunta');
        perguntaDiv.innerHTML = `<p>${pergunta.pergunta}</p>`;

        const respostaDiv = document.createElement('div');
        respostaDiv.classList.add('cartao__conteudo__resposta');
        respostaDiv.innerHTML = `<p>${pergunta.resposta}</p>`;
        respostaDiv.style.display = 'none'; // Inicialmente escondido

        conteudo.appendChild(titulo);
        conteudo.appendChild(perguntaDiv);
        conteudo.appendChild(respostaDiv);
        card.appendChild(conteudo);
        
        // Mostrar resposta ao clicar
        perguntaDiv.addEventListener('click', () => {
            respostaDiv.style.display = respostaDiv.style.display === 'none' ? 'block' : 'none';
        });

        container.appendChild(card);
    }

    // Criar flashcards com base nas perguntas
    perguntas.forEach(pergunta => criarFlashcard(pergunta));
});

