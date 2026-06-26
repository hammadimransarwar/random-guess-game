let submit=document.querySelector('form');
let rand=Math.floor(Math.random()*10+1);
let res=document.querySelector('.result')
submit.addEventListener("submit",function(e){
    e.preventDefault();
    let number=Number(document.querySelector('#user').value);
    if(number==""||number<=0 || number>10 || isNaN(number)){
        res.innerHTML="Not a valid number";
    }
    else{
        if(number=== rand) {
        res.innerHTML="You Guessed right";
    } 
    else if (number > rand) {
        res.innerHTML="You Guessed a higher number";
    } 
    else  res.innerHTML="You Guessed a lower number";
    }
    
})