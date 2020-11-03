var vathmusic = document.querySelector('audio');
var play = document.getElementById('play');
var varma = 2;
//yooo

function go(){
    vathmusic.play();
    play.classList.replace("fa-play", "fa-pause");
    varma = 1;
}

function wait(){
    vathmusic.pause();
    play.classList.replace("fa-pause", "fa-play");
    varma = 2;
}

play.addEventListener("click", ()=>{
    if ( varma === 2){
        go();
    }else{
        wait();
    }
});





