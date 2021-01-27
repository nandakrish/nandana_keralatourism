let email=document.getElementById("email");
let error=document.getElementById("error");
let phn=document.getElementById("phn");



function validate(){
    
    
    let regexp= /^([\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    
    if(regexp.test(email.value)){
        error.innerHTML="valid";
        error.style.color="green";
        return true;
    }

    
    else{
        error.innerHTML="invlid";
        error.style.color="red";
        return false;
    }

  }
