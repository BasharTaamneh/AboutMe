'use strict';
alert("HI (^_^)");

let Uname
let Q1
let Q2
let Q3
let Q4
let Q5
let Q6
let Q7
let i
let n
let x
let y
let Arr1 = []
let Arr2 = []
let counter = 0;



function add() {
    counter += 1;
}

Uname = prompt("What is your name Mr/Mrs?");
console.log(Uname)
alert("Hello Mr/Mrs  " + Uname + ", you are most Welcome");
alert("ok Mr/Mrs " + Uname + " let us ask you a few questions (^_^), please answer them with ('yes' OR 'no').");

Qa();
Qb();
Qc();
Qd();
Qe();
Qf();
Qg();

function Qa(){
Q1 = prompt("do you think that i'm Creative? ").toUpperCase();
console.log("Q1 ANSWER")
console.log(Q1)
switch (Q1) {
    case "YES":
        add();
        alert("that's really kind of you " + (String.fromCodePoint(0x1F60D)));
        break;
    case "NO":
        alert("OK i respect your opinion! " + (String.fromCodePoint(0x2728)));
        break;
    default:
        alert("Please answer with (yes OR no).");
        break;
}
}

function Qb(){
Q2 = prompt("Do you think I like technology??").toUpperCase();
console.log("Q2 ANSWER")
console.log(Q2)
switch (Q2) {
    case "YES":
        add();
        alert("Well you're really right, I love evolution " + (String.fromCodePoint(0x1F4E1)));
        break;
    case "NO":
        alert("You are wrong, because I made this page " + (String.fromCodePoint(0x274C)));
        break;
    default:
        alert("Please answer with (yes OR no).");
        break;
}
}

function Qc(){
Q3 = prompt("Do you think I will achieve my goal?").toUpperCase();
console.log("Q3 ANSWER")
console.log(Q3)
switch (Q3) {
    case "YES":
        add();
        alert("I really hope so " + (String.fromCodePoint(0x1F60E)));

        break;
    case "NO":
        alert("be positive please " + (String.fromCodePoint(0x1F615)));
        break;
    default:
        alert("Please answer with (yes OR no).");
        break;
}
}
function Qd(){
Q4 = prompt("Guess this, do i like food?").toLowerCase();
console.log("Q4 ANSWER")
console.log(Q4)
switch (Q4) {
    case "yes":
        add();
        alert("Hahaha, who doesn't like food? " + (String.fromCodePoint(0x1F601)));

        break;
    case "no":
        alert("You will piss me off.. sure i like it " + (String.fromCodePoint(0x1F60B)));
        break;
    default:
        alert("Please answer with (yes OR no).");
        break;
}
}
function Qe(){
Q5 = prompt("Am I lucky to host you? ").toLowerCase();
console.log("Q5 ANSWER")
console.log(Q5)
switch (Q5) {
    case "yes":
        add();
        alert("undoubtedly " + (String.fromCodePoint(0x1F604)));
        console.count(Q5);
        break;
    case "no":
        alert("Of course I'm lucky not as you think " + (String.fromCodePoint(0x1F605)));
        break;
    default:
        alert("Please answer with (yes OR no).");
        break;
}
}
for (n = 5; n <= 50; n++) {
    Arr1.push(n);
}
console.log("Arr1= " + Arr1);

function Qf(){
Q6 = prompt("guess a number# ! " + (String.fromCodePoint(0x1F3AF)));
console.log("Q6 ANSWER")
console.log(Q6)


for (i = 1; i <= 3; i++) {
    if (Q6 <= 5) {
        alert("too low");
        Q6 = prompt("guess a number# ! ");
    }
    else if (Q6 >= 50) {
        alert("too high");
        Q6 = prompt("guess a number# ! ");
    }
}
if (Q6 <= 5 || Q6 >= 50) {
    alert("the correct  Considered numbers to answer is from (5-50) " + Arr1);
}
else if (Q6 >= 5 || Q6 <= 50) {
    alert(" correct (^_^) ");
    add();
}
}

function Qg(){
Arr2 = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
console.log("Arr2= " + Arr2);
for (let attmp = 1; attmp <= 6; attmp++) {
    Q7 = prompt("guess What is my favarot color?    "
        + (String.fromCodePoint(0x1F3AF)).toLowerCase());
    console.log("Q7 ANSWER")
    console.log(Q7)
    for (x = 0; x < Arr2.length; x++) {
        if (Q7 == Arr2[x]) {
            attmp = 10
            alert(" correct (^_^) ");
            add();
            break;
        }
    }
}
}

alert("awsome you got ( " + counter + " / 7 ) score");
alert("thanks a lot..  " + Uname + ", for your time i appreciate your efforts");

alert ( "This alert from Dua Jaradat");







