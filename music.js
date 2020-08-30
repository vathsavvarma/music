const vathmusic = document.querySelector('audio');
const play = document.getElementById('play');
//yooo

play.addEventListener("click", ()=>{
    
    var click = 1;
    vathmusic.play();
    play.classList.replace("fa-play", "fa-pause");

    if( click % 2 !== 0){
        play.addEventListener("click", ()=>{
            vathmusic.pause();
            play.classList.replace("fa-pause", "fa-play");
            click++;
            console.log(click);
        });
    } 
});
