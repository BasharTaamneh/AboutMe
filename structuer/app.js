'use strict';
alert("HI (^_^)");

let Uname
let Q1
let Q2
let Q3
let Q4
let Q5

Uname = prompt("What is your name Mr/Mrs?");
console.log(Uname)
alert("Hello Mr/Mrs  " + Uname + ", you are most Welcome");
alert("ok Mr/Mrs " + Uname + " let us ask you a few questions (^_^), please answer them with ('yes' OR 'no').");

Q1 = prompt("do you think that i'm Creative? ").toUpperCase();
console.log("Q1 ANSWER")
console.log(Q1)
switch (Q1) {
    case "YES":
        alert("that's really kind of you " + (String.fromCodePoint(0x1F60D)));
        break;
    case "NO":
        alert("OK i respect your opinion! " + (String.fromCodePoint(0x2728)));
        break;
    default:
        alert("Please answer with (yes OR no).");
        break;
}
Q2= prompt("Do you think I like technology??").toUpperCase();
console.log("Q2 ANSWER")
console.log(Q2)
switch(Q2) {
    case "YES":
        alert("Well you're really right, I love evolution " + (String.fromCodePoint(0x1F4E1)));
        break;
    case "NO":
        alert("You are wrong, because I made this page " + (String.fromCodePoint(0x274C)));
        break;
    default:
alert("Please answer with (yes OR no).");
        break;
}

Q3= prompt("Do you think I will achieve my goal?" ).toUpperCase();
console.log("Q3 ANSWER")
console.log(Q3)
switch(Q3) {
    case "YES":
        alert("I really hope so " + (String.fromCodePoint(0x1F60E)));
        break;
    case "NO":
        alert("be positive please " + (String.fromCodePoint(0x1F615)));
        break;
    default:
alert("Please answer with (yes OR no).");
        break;
}

Q4= prompt("Guess this, do i like food?").toLowerCase();
console.log("Q4 ANSWER")
console.log(Q4)
switch(Q4) {
    case "yes":
        alert("Hahaha, who doesn't like food? " + (String.fromCodePoint(0x1F601)));
        break;
    case "no":
        alert("You will piss me off.. sure i like it " + (String.fromCodePoint(0x1F60B)));
        break;
    default:
alert("Please answer with (yes OR no).");
        break;
}

Q5= prompt("Am I lucky to host you? ").toLowerCase();
console.log("Q5 ANSWER")
console.log(Q5)
switch(Q5) {
    case "yes":
        alert("undoubtedly " + (String.fromCodePoint(0x1F604)));
        break;
    case "no":
        alert("Of course I'm lucky not as you think " + (String.fromCodePoint(0x1F605)));
        break;
    default:
alert("Please answer with (yes OR no).");
        break;
}
alert("thanks a lot..  "  + Uname + ", for your time i appreciate your efforts");