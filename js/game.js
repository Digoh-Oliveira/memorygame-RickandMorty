const grid = document.querySelector('.grid');

/* Array */
const gameChars = [ 'beth','jerry','jessica','morty','pessoa-passaro',
'pickle-rick','rick','summer','meeseeks','scroopy',];

/* Função responsável por criar as Divs */
const createElement = (tag, className) => {

    const element = document.createElement(tag);
    element.className = className;
    
    return element;}


let firstCard = '';
let secondCard = '';

const checkEndGame = () =>{
    const disableCards = document.querySelectorAll('.disabled-card');

    if(disableCards.length == 20){
        alert('Parabéns, você conseguiu!');
    }
}

const checkCards = () => {

    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter == secondCharacter){

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
    
    }else{

        setTimeout(() => {
            
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
    
        }, 500);
        
    }
}

const revealCard = ({target}) => {
    
    if (target.parentNode.className.includes('reveal-card')){
        return;
    }
    
    if (firstCard == ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    
    }else if(secondCard == ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
}
    
/* Função responsável por criar as cartas e adicionar as imagens dos personagens */
const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);
    card.setAttribute('data-character', character);
    card.addEventListener('click', revealCard);

    return card;}

    /* Função responsável por carregar as cartas com os personagens aleatorios */
const loadGame = () =>{

    const duplicateChars = [...gameChars, ...gameChars];
    const randomChars = duplicateChars.sort(() => Math.random() - 0.5);
    
    randomChars.forEach((character) => {

        const cards = createCard(character);
        grid.appendChild(cards);

    });
}

loadGame();

