function formChecker(){
console.log("form checker went okay.")
    const lead=document.getElementById('lead');
    const follow=document.getElementById('follow');
    //alert("top is okay!")
    let leadReponse=document.getElementById('leadResponse');
    let followResponse=document.getElementById('followResponse');
    leadResponse.innerHTML=''
    followResponse.innerHTML=''
    if (lead.checked==true) {
        leadResponse.innerHTML ='Cool! but nothing against you, please just read the disclaimers just in case.'; 
    }else if(follow.checked==true){
        followResponse.innerHTML='Cool! I have nothing against you, but please read the disclaimers. i do not wanna lead you astray.';
    }
}


function yearsChecker() {
const years=document.getElementById('numberOfYears');
var input=years.value;
var yearsValue=parseInt(input);
const result1=document.getElementById("yearsResult");
result1.innerHTML = '';
    
//console.log("years okay!")
    if(yearsValue <=1)
        {
        result1.innerHTML="Welcome to Swing! I'll do my best, but I can't quite help from scratch... suggest you ask Thom and Aurore for help. Or have a lot of patience as I learn how to help you";
    }
    else if (yearsValue  > 1 && yearsValue<10){
        result1.innerHTML="Great! You have " +yearsValue+ " years of dance experience! shouldn't be too hard, but I'll do my best to help you as much as I can.";
    }
    else {
        result1.innerHTML="I should be asking you to help ME instead :D. but feel free to tell me what is going on in the box below.";
    }

}
window.onload = function(){
    const yearsInput = document.getElementById('numberOfYears');
    yearsInput.addEventListener('input', yearsChecker);
}

let nav =document.getElementById("navBar")



document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.getElementById('navBar');
    
    navBar.addEventListener('click', function(event) {
        if (event.target.closest('.navbar-item') || 
            event.target.closest('.navbar-item') === navBar) {
            
            // Find all clickable elements in the navbar
            const clickableItems = navBar.querySelectorAll('.navbar-item');
            
            // Animate all clickable items
            clickableItems.forEach(item => {
                item.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 100);
            });
        }
    });
});
