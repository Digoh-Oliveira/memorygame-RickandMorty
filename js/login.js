const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => {
    
    if (target.value.length > 2){
        
        button.removeAttribute('disabled');
    }
    else{
       
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => {
    
    event.preventDefault();// esse comando desativa o comportamento padrão do formúlario
    
    localStorage.setItem('player', input.value);// setando a chave 'player' + o valor digitado pelo usario no localStorage 
    window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

