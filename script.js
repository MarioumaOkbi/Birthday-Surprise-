// START EXPERIENCE

function startJourney(){

    const music = document.getElementById("music");

    music.play().catch(function(){
        console.log("Music waiting for interaction");
    });


    document.getElementById("opening").style.display = "none";


    startConfetti();

}






// CONFETTI

function startConfetti(){

    const container =
    document.getElementById("confetti");


    for(let i=0;i<150;i++){

        let piece =
        document.createElement("span");


        piece.innerHTML="✨";


        piece.style.position="fixed";

        piece.style.left =
        Math.random()*100+"vw";


        piece.style.top =
        "-20px";


        piece.style.fontSize =
        (10+Math.random()*25)+"px";


        piece.style.animation =
        "fall "+(2+Math.random()*3)+"s linear";


        container.appendChild(piece);



        setTimeout(()=>{

            piece.remove();

        },5000);


    }

}







// GIFT CHOICE

function chooseGift(card){


    let cards =
    document.querySelectorAll(".gift-card");


    cards.forEach(c=>{

        c.style.pointerEvents="none";

    });



    cards.forEach((c,index)=>{


        setTimeout(()=>{

if(index===0){

    c.innerHTML =
    "<span>✨<br>Mix & Match</span>";

}


if(index===1){

    c.innerHTML =
    "<span>🎁<br>The Ultimate Experience</span>";

}


if(index===2){

    c.innerHTML =
    "<span>🎁<br>The Ultimate Gift</span>";

}


        },800);



    });



    document.getElementById("giftResult").innerHTML =
    "Your destiny chose... Mix & Match ❤️";



    setTimeout(()=>{

        revealFive();

    },2500);



}







// GIFT REVEAL

function revealFive(){

    const boxes = document.querySelectorAll(".gift-box");
    const message = document.getElementById("giftNumber");

    boxes.forEach((box,index)=>{

        setTimeout(()=>{

            box.classList.add("active");

        }, index * 700);

    });

    setTimeout(()=>{

        message.innerHTML = `
            ✨ Congratulations! ✨<br>
            You have unlocked <strong>5 Special Gifts</strong> ❤️
        `;

        message.style.display = "block";
        message.style.opacity = "1";

    }, 3700);

}


function solveRiddle(button){

    let card = button.closest(".riddle-card");

    let input = card.querySelector("input");

    let answer = input.value.trim().toLowerCase();

    let cards = document.querySelectorAll(".riddle-card");
    let index = [...cards].indexOf(card);

    const answers = [
        ["cooking", "cooking class"],
        ["nike", "nike air"],
        ["ck", "ck boxers", "boxers", "calvin klein"],
        ["travel", "travelling", "traveling", "trip"],
        ["skydiving", "sky diving", "skydive"]
    ];

    if (answers[index].includes(answer)) {

        card.classList.add("flipped");
        card.style.boxShadow = "0 0 40px pink";

    } else {

        alert("Try again ❤️");

    }

}










// ENVELOPE


function openEnvelope(){


    document.querySelector(".envelope")
    .style.display="none";


    document.getElementById("finalMessage")
    .style.display="block";



}








// ADD FALLING ANIMATION FOR CONFETTI


const style =
document.createElement("style");


style.innerHTML=`

@keyframes fall{

from{

transform:translateY(0) rotate(0deg);

opacity:1;

}


to{

transform:translateY(110vh) rotate(720deg);

opacity:0;

}

}

`;


document.head.appendChild(style);
