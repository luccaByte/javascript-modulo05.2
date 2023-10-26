let produtoJs = document.querySelector ('.produto');

let tituloJs = document.createElement ('h1');
tituloJs.id = 'titulo';
tituloJs.innerText = 'Loja Virtual';

let cardOffer = document.createElement ('div');
cardOffer.innerHTML = `
    <h3>AMD Ryzen 5 5600G</h3>
    <p>O Ryzen 5 5600G conta com 6 núcleos incríveis para quem quer apenas jogar. Os processadores AMD Ryzen série 5000 capacitam a próxima geração de jogos exigentes, proporcionando experiências imersivas únicas e dominando qualquer tarefa multithread como 3D e renderização de vídeo e compilação de software.</p>
    <p>R$ 899.99</p>
`;

produtoJs.appendChild(tituloJs);
produtoJs.appendChild(cardOffer);



