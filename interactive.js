const cardnumber = document.getElementById('number');
const numberinp = document.getElementById('card-number');

const cardName = document.getElementById('name');
const nameInp = document.getElementById('card-name');

const cardMonth = document.getElementById('month');
const monthInp = document.getElementById('card-month');

const cardYear = document.getElementById('year');
const yearInp = document.getElementById('card-Year');

const cardaCvc = document.getElementById('cvc');
const cvcInp = document.getElementById('card-cvc');

const submitBtn = document.getElementById('submit-btn');

const completed = document.querySelector('.thank');
const form = document.querySelector('form');

function setCardNumber(event) {
    cardnumber.innerText = format(event.target.value);
}
function setCardName(event){
    cardName.innerText = event.target.value;
}
function setCardMonth(event){
    cardMonth.innerText = event.target.value;
}
function setCardYear(event){
    cardYear.innerText = event.target.value;
}
function setCardcvc(event){
    cardaCvc.innerText = event.target.value;
}
function format(s){
    return s.toString().replace(/\d{4}(?=.)/g, '$&');
}

function handleSubmit(event){
    event.preventDefault();

    if (nameInp.value){
        nameInp.classList.add('error');
        nameInp.parentElement.classList.add('error-message');
    }
    else{
        nameInp.classList.remove('error');
        nameInp.parentElement.classList.remove('error-message');
    }
    
    if (numberinp.value){
        numberinp.classList.add('error');
        numberinp.parentElement.classList.add('error-message');
    }
    else{
        numberinp.classList.remove('error');
        numberinp.parentElement.classList.remove('error-message');
    }
    
    if (monthInp.value){
        monthInp.classList.add('error');
        monthInp.parentElement.classList.add('error-message');
    }
    else{
        monthInp.classList.remove('error');
        monthInp.parentElement.classList.remove('error-message');
    }
    
    if (yearInp.value){
        yearInp.classList.add('error');
        yearInp.parentElement.classList.add('error-message');
    }
    else{
        yearInp.classList.remove('error');
        yearInp.parentElement.classList.remove('error-message');
    }
    
    if (cvcInp.value){
        cvcInp.classList.add('error');
        cvcInp.parentElement.classList.add('error-message');
    }
    else{
        cvcInp.classList.remove('error');
        cvcInp.parentElement.classList.remove('error-message');
    }
    if(nameInp.value && numberinp.value && monthInp.value && yearInp.value && cvcInp.value){
        completed.classList.remove('hidden');
        form.classList.add('hidden');
    }
}

numberinp.addEventListener('keyup', setCardNumber);
nameInp.addEventListener('keyup', setCardName);
monthInp.addEventListener('keyup', setCardMonth);
yearInp.addEventListener('keyup', setCardYear);
cvcInp.addEventListener('keyup', setCardcvc);
submitBtn.addEventListener('click', handleSubmit);