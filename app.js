
let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "green", "blue"];

let started = false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started === false) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function btnFalsh(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText =`Level ${level}`;
    // btnFalsh();

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFalsh(randBtn);
}

function checkAns(){
    // console.log("curr level: ", level);
    let idx = level - 1;

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over!Your Score was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    btnFalsh(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}