document.addEventListener('DOMContentLoaded', function() {
    const messageDiv = document.getElementById('message');
    const okButton = document.getElementById('ok-button');
    const app = document.getElementById('app');
    const temps=document.querySelectorAll(".temp")
    // Show the message
    messageDiv.style.display = 'block';

    // Function to hide the message and show the content
    okButton.addEventListener('click', function() {
        messageDiv.style.display = 'none';
        app.style.display = 'grid'; // Show the app content
        
        setTimeout(function() { 
            temps.forEach(temp => {
                 temp.style.display = 'none'; 
                }); 
            }, 15000);
    });
});



const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const select_time = document.querySelector(".time-select");
const timer = document.querySelector(".timer"); 
const display = document.querySelector(".display");
const muteIcon = document.querySelector("#mute");
const soundIcon = document.querySelector("#sound");
const audio_1 = document.querySelector("#audio1");
const audio_2 = document.querySelector("#audio2");


let s;
let f = -1;
let currentBackground = ""; // Variable to keep track of the current background

playIcon.addEventListener('click', toggleIcons);
playIcon.addEventListener('click', playAudio);
pauseIcon.addEventListener('click', toggleIcons);
pauseIcon.addEventListener('click', pauseAudio);
display.addEventListener('click', backgroundSet);
select_time.addEventListener('click', AssignValue);
muteIcon.addEventListener("click", toggleVolume);
muteIcon.addEventListener('click', SoundAudio);
soundIcon.addEventListener("click", toggleVolume);
soundIcon.addEventListener('click', MuteAudio);


function SoundAudio() {
    console.log('SoundAudio triggered');
    audio_1.muted = false;
    audio_2.muted = false;
}

function MuteAudio() {
    console.log('MuteAudio triggered');
    audio_1.muted = true;
    audio_2.muted = true;
}

function playAudio() {
    console.log('playAudio triggered, currentBackground:', currentBackground);
    if (currentBackground === "sunny") {
        audio_1.play();
    } else if (currentBackground === "rainy") {
        audio_2.play();
    }
}

function pauseAudio() {
    console.log('pauseAudio triggered, currentBackground:', currentBackground);
    if (currentBackground === "sunny") {
        audio_1.pause();
    } else if (currentBackground === "rainy") {
        audio_2.pause();
    }
}

function toggleIcons() {
    console.log('toggleIcons triggered');
    if (playIcon.classList.contains('active')) {
        playIcon.classList.remove('active');
        playIcon.classList.add('hide');
        pauseIcon.classList.remove('hide');
        pauseIcon.classList.add('active');

        f = setInterval(Decrement, 1000);
    } else {
        playIcon.classList.remove('hide');
        playIcon.classList.add('active');
        pauseIcon.classList.add('hide');
        pauseIcon.classList.remove('active');
        clearInterval(f);
        f = -1;
    }
}

function toggleVolume() {
    console.log('toggleVolume triggered');
    if (muteIcon.classList.contains('active')) {
        muteIcon.classList.remove('active');
        muteIcon.classList.add('hide');
        soundIcon.classList.remove('hide');
        soundIcon.classList.add('active');
    } else {
        soundIcon.classList.remove('active');
        soundIcon.classList.add('hide');
        muteIcon.classList.remove('hide');
        muteIcon.classList.add('active');
    }
}

function backgroundSet(event) {
    console.log('backgroundSet triggered', event.target);
    if (event.target.tagName === "IMG" && event.target.id === "sunny") {
        app.style.backgroundImage = "url('images/sunny_background.jpg')";
        currentBackground = "sunny";
    }
    if (event.target.tagName === "IMG" && event.target.id === "rainy") {
        app.style.backgroundImage = "url('images/rainy_background.jpg')";
        currentBackground = "rainy";
    }
}

function Decrement() {
    if (s >= 0) {
        let m = parseInt(s / 60);
        let sec = s % 60;
        timer.innerHTML = (m <= 9 ? "0" + m : m) + ":" + (sec <= 9 ? "0" + sec : sec);
        s--;
    }
    if(s==0){
        setTimeout(() => {
            alert("congratulations you meditated.. you are redirected back");
            location.reload();
        }, 2000);
    }
}

function AssignValue(event) {
    if (event.target.tagName === "BUTTON") {
        console.log('AssignValue triggered', event.target.id);
        if (event.target.id === "smaller-mins") {
            timer.innerText = "2:00";
            s = 119;
        }
        if (event.target.id === "medium-mins") {
            timer.innerText = "5:00";
            s = 299;
        }
        if (event.target.id === "long-mins") {
            timer.innerText = "10:00";
            s = 599;
        }
    }
}



