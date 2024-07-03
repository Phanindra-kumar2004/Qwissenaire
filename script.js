mbl2 = document.querySelector('.navbar .mobile2')
nav = document.querySelector('.navbar')
 
i=1



document.querySelector('.menu-icon').addEventListener('click', function() {
    this.classList.toggle('menu-open');
    i = i+1;
    if(i%2 === 0){
        mbl2.style.left = "0%";
        nav.style.backgroundColor =  "rgba(25, 25, 29, 0.964)";
    }
    if(i%2 != 0){
        mbl2.style.left = "-100%";
        nav.style.backgroundColor =  "rgba(38, 37, 44, 0.914)";
    }
})

let buttons = document.getElementsByClassName("register-btn");
let downloadLink = buttons[1].firstElementChild;

buttons[1].addEventListener('click',function(){
    let year = document.getElementById('year-of-study').value;
    console.log(year);
    downloadLink.href = year - 5 + ".pdf"; 
})

