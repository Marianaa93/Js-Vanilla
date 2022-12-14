const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');

function showError(input, message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function checkEmail(email){
    let re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value)){
        showSucess(email)
    }else{
        showError(email, 'Email is not valid');
    }
  
}

function checkPassword(input,input2){
    if(input.value!==input2.value){
        showError(input2, 'Passwords do not match')
        
    }else{showSucess(input2)

    } ;
}

function checkRequired(inpArr){
    inpArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`)
        }
        else{
            showSucess(input)
        }  
    });
}

function checkLength(input,min,max){
    if(input.value.length< min  ){
        showError(input, `${getFieldName(input)} must be at least ${min}`);
    }else if (input.value.length> max){
        showError(input, `${getFieldName(input)} less than ${max}`);
    }else{
        showSucess(input)
    }
}

function getFieldName(input){
    return input.id.toUpperCase().charAt(0)+input.id.slice(1);;
}
function showSucess(input){
    const formControl=input.parentElement;
    formControl.className='form-control sucess';
    

}
form.addEventListener('submit',function(event){
    event.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPassword(password,password2)
    
    
})
