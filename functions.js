const randomNumber = function(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}
const randomColor = function slotColor(min,max){
    const number = Math.floor(Math.random() * (max - min) + min)
    if(number === 0){
      return "silver"
    } else if(number === 1){
      return "blue"
    }else if(number === 2){
      return "darkblue"
    }
  }

  function startTimer() {
    isRunning = true;
    timer = setInterval(function() {
      seconds++;
      updateTimer();
    }, 1000);
  }

  function stopTimer() {
    isRunning = false;
    clearInterval(timer);
  }

  function updateTimer() {
    var minutes = Math.floor(seconds / 60);
    var remainderSeconds = seconds % 60;
    timerElement.textContent = minutes + ':' + (remainderSeconds < 10 ? '0' : '') + remainderSeconds;
  }

  
//   function resetTimer() {
//     stopTimer();
//     seconds = 0;
//     updateTimer();
//   }
