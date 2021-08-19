// console.log("vyshu");

const hold = document.getElementById("hold");
const close = document.getElementById("close");
function myaccount(para){
    if(para=='visible'){
        hold.style.display = "block";
        close.style.display = "block";
    }
    else if(para=='close'){
        hold.style.display = "none";
        close.style.display = "none";
        console.log(para);
    }  
}
