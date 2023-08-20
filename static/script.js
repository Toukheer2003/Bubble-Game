var score;
function makeBubble()
{
    var bubble = "";
    for(var i=1;i<=160;i++)
    {
        var rn = Math.floor(Math.random()*10)
        bubble += `<div class="bubble">${rn}</div>`
    }
    
    document.querySelector(".panel_footer").innerHTML = bubble;    
}

function time(){
    var timer=60;
    var interval = setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#time_val").innerHTML = timer;
        }
        else
        {
            clearInterval(interval);
            document.querySelector(".panel_footer").innerHTML = `<h1>Game Over!! Your Score is ${score}</h1>`;
            document.querySelector(".panel_footer").innerHTML += `<button id="restart">Restart</button>`;
            var button = document.querySelector("#restart")
            // button.addEventListener("click",function(){
            //     document.querySelector("#score_val").innerHTML = 0;
            //     score=0;
            //     makeBubble();
            //     time();
            //     hit();
            // });
            function homepage(){
                window.location.href="/";
            }
            button.onclick = homepage;
        }
    },1000);
}

var rn=0;
function hit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hit_val").innerHTML = rn;
}

score = 0;
function increaseScore(){
    score+=10;
    document.querySelector("#score_val").innerHTML = score;    
}

var bub = document.querySelector(".panel_footer")
bub.addEventListener("click",function(details){
    var clickedbubbleval = Number(details.target.textContent);
    if(clickedbubbleval == rn){
        increaseScore();
        makeBubble();
        hit();
    }
});


makeBubble();
time();
hit();
