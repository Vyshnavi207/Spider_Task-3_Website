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
const select = document.getElementById("select");
const closed = document.getElementById("closed");
const another =document.getElementById("another");
const selec = document.getElementById("selec");
const anothe =document.getElementById("anothe");
function apply(para){
    if(para=='open'){
        select.style.display = "block";
        select.style.display = "flex";
        another.style.display ="block";
        another.style.display = "flex";
        
    }
    else if(para=='move'){
        window.location.href='#auctioneer';
        select.style.display = "none";
        another.style.display ="none";

    }
}
function appl(para){
    if(para=='ope'){
        selec.style.display = "block";
        selec.style.display = "flex";
        anothe.style.display ="block";
        anothe.style.display = "flex";
        
    }
    else if(para=='mov'){
        window.location.href='#auctioneer';
        selec.style.display = "none";
        anothe.style.display ="none";

    }
}
const make= document.getElementById("make");
