const cardCVC = document.querySelector('.cvc span');
const cardNumber = document.querySelector('.card-number');
const cardName = document.querySelector('.cardholder-name');
const cardExpDate = document.querySelector('.exp-date');


const form = document.querySelector('form');
const InputName = document.querySelector('#name');
const InputNumber = document.querySelector('#card-number');
const InputMonth = document.querySelector('#month');
const InputYear = document.querySelector('#Year');
const InputCVC = document.querySelector('#cvc');

const infoErr = document.querySelectorAll('.info-err');
const complete = document.querySelector('.completed'); 
const completeBtn = document.querySelector('.completed .btn');
 
console.log(completeBtn); 
const showError = (input , arrinfoErr , message) => {
    input.classList.add('input-err');
    infoErr[arrinfoErr].classList.add('d-block');
    infoErr[arrinfoErr].textContent = message;

};
const hideError = (input,arrinfoErr ) =>{
    input.classList.remove('input-err');
    infoErr[arrinfoErr].classList.remove('d-block');
};

let inputNameValue;
let inputNumberValue;
let inputMonthValue = '00';
let inputYearValue = '00';
let inputCVCValue;

const validateInput = (input, arrinfoErr, wordLength) => {
    if(!wordLength){
        if(!input.value){
            showError(input, arrinfoErr , "Can't be blank");
        }
        else {
            hideError(input, arrinfoErr);
                inputNameValue = input.value;
            }
        }
            else{
                if(!input.value){
                    showError(input, arrinfoErr,"Can't be blank" );
                }
                else if(!/^\d+(\s\d+)*$/.test(input.value)){
                    showError(input, arrinfoErr, 'wrong format, numbers only');
                }
                else if(input.value.length < wordLength){
                        if(wordLength > 3){
                            showError(input, arrinfoErr," card number must be 16 numbers");
                        }
                        else {
                            showError(input, arrinfoErr,`must be ${wordLength} numbers`);
                        }
                    }
                        else if(parseInt(inputMonthValue) > 31 ){
                            showError(input,arrinfoErr, 'Month input must not be greater than 31!');
                        }
                        else {
                            hideError(input, arrinfoErr);
                    
                
                    

                    switch(input){
                        case InputNumber:
                           inputNumberValue = input.value;
                           break;
                        case InputMonth:
                            inputMonthValue = input.value;
                            break;
                        case InputYear:
                            inputYearValue = input.value;
                            break;
                        case InputCVC:
                            inputCVCValue = input.value;
                            break;
                    }
                }

            }
        
    }; 
    InputName.addEventListener('input', (event)=>{
        event.preventDefault();

        inputNameValue = event.target.value;
        cardName.textContent = inputNameValue;
    });

    InputNumber.addEventListener('input', (event)=>{
        event.preventDefault();
        
        let formatText = event.target.value;
        formatText = formatText.substring(0, 19);
        formatText = formatText
         formatText = formatText.replace(/\s/g, "")
        .replace(new RegExp(`(.{${4}})`, "g"), "$1 ")
        .trim(); 
       // formatText = formatText.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ").trim();
       // formatText = formatText.replace(/\s/g, "").replace(/(\d{4})/g, "$1").trim();
        event.target.value = formatText;

        inputNumberValue = event.target.value;
        cardNumber.textContent = inputNumberValue;
    });
      const deleteSpace = (input)=>{
        if(/\s/.test(input.value)){
            let formatText = input.value.replace(/\s/g, "");

            input.value = formatText;
        }
    };

    InputMonth.addEventListener('input', (event)=>{
        event.preventDefault();

        deleteSpace(InputMonth);
        inputMonthValue = event.target.value;
        cardExpDate.textContent = inputMonthValue + "/" + inputYearValue;
    });

    InputYear.addEventListener('input', (event)=>{
        event.preventDefault();

        deleteSpace(InputYear);
        inputYearValue = event.target.value;
        cardExpDate.textContent = inputMonthValue + "/" + inputYearValue;
    });

    InputCVC.addEventListener('input', (event)=>{
        event.preventDefault();

        deleteSpace(InputCVC);
        inputCVCValue = event.target.value;
        cardCVC.textContent = inputCVCValue;
    });

    form.addEventListener('submit',(event) =>{
        event.preventDefault();
        inputNameValue = "";
        inputNumberValue = "";
        inputMonthValue = "00";
        inputYearValue = "00";
        inputCVCValue = "";

        validateInput(InputName, 0);
        validateInput(InputNumber,1,19);
        validateInput(InputMonth,2,2);
        validateInput(InputYear,2,2 );
        validateInput(InputCVC, 3,3);

        if(inputNameValue &&
             inputNumberValue && 
             inputMonthValue && 
             inputYearValue &&
              inputCVCValue
               ){
            cardName.textContent = inputNameValue;
            cardNumber.textContent = inputNumberValue;
            cardExpDate.textContent = inputMonthValue + "/" + inputYearValue;
            cardCVC.textContent = inputCVCValue;

            form.classList.add('d-none');
            complete.classList.add('d-block');
        }
    }); 

     completeBtn.addEventListener('click', () => {
        location.reload(true);
    }
    ); 
 
