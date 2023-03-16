//hides timer when loading website
document.getElementById("mydiv").style.display = "none";

function timerAppear() {
  var x = document.getElementById("mydiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

  //timer
  startbutton = document.getElementById('startbtn');
  resetbutton = document.getElementById('resetbtn')
  min = document.getElementById('min');
  sec = document.getElementById('sec');
  minutes = 25;
  seconds = '00';
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
  let totalSeconds;
  var backUpSeconds = totalSeconds = minutes * 60 ;
  let secondsInterval = -1;
  

  startbutton.addEventListener('click', function(event){
    totalSeconds = minutes*60;
    if (secondsInterval == -1){
      secondsInterval = setInterval(function(){
        totalSeconds--;
        minutes = (totalSeconds / 60);
        seconds = totalSeconds % 60;
        min.innerHTML = Math.floor(minutes);
        sec.innerHTML = seconds;
        startbutton.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
      },1000);
    }
    else {
      clearInterval(secondsInterval);
      secondsInterval= -1;
      startbutton.innerHTML ="<i class='fas fa-play fa-2x'></i>";
    }
  });

  resetbutton.addEventListener('click', function(event){
    clearInterval(secondsInterval)
    totalSeconds = backUpSeconds
    minutes = 25;
    seconds = '00';
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
  })






/*
//timer
var timeLeft = 1500
const minutes = Math.floor((timeLeft % 3600) / 60);
const seconds = '0' + (timeLeft % 60);
let timeLeftInterval;
let pause = false; 

function template(){
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
}

function formatTime(timeLeft) {
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  template();
}

/
btnStart.addEventListener('click', () => {
  const hours = (hoursEl.value);
  const minutes = (minutesEl.value);
  const seconds = (secondsEl.value);
  startTimer()
});

function startTimer(){
  timeLeftInterval = setInterval(() => {

    if (pause) return;
    timeLeft--;
    formatTime();

    if (timeLeft <= 0) {
        stopTimer();
    }
}, 1000)
}

function stopTimer(){
  timeLeftInterval = clearInterval(timeLeftInterval)
}
*/