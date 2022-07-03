window.onload = function () {
  
  var seconds = 00; 
  var ms = 00; 
  var min = 00;
  var appendMs = document.getElementById("ms");
  var appendSeconds = document.getElementById("seconds");
  var appendMin = document.getElementById("min");
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    ms = "00";
  	seconds = "00";
    min = "00";
    appendMs.innerHTML = ms;
  	appendSeconds.innerHTML = seconds;
    appendMin.innerHTML = min;
  }
  
   
  
  function startTimer () {
    ms++; 
    
    if(ms <= 9){
      appendMs.innerHTML = "0" + ms;
    }
    
    if (ms > 9){
      appendMs.innerHTML = ms;
      
    } 
    
    if (ms > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      ms = 0;
      appendMs.innerHTML = "0" + 0;
    }

    if(seconds <= 9){
      appendSeconds.innerHTML = "0" + seconds;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }

    if(seconds > 59){
      console.log("min");
      min++;
      appendMin.innerHTML = "0" + min;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }

    if(min > 9){
      appendMin.innerHTML = min;
    }
  
  }
}