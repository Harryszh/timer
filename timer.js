
let intervalId = null;
let totalSeconds = 0;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
/* const timerDisplay = document.getElementById('timerDisplay'); */


        function updateDisplay() {
            const days = Math.floor(totalSeconds / 86400);
            const hours = Math.floor((totalSeconds % 86400) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
        
        /* timerDisplay.textContent = 
            `${days.toString().padStart(2, '0')}:` +
            `${hours.toString().padStart(2, '0')}:` +
            `${minutes.toString().padStart(2, '0')}:` +
            `${seconds.toString().padStart(2, '0')}`; */
        
            document.getElementById("input-days").value = days
            document.getElementById("input-hours").value = hours
            document.getElementById("input-minutes").value = minutes
            document.getElementById("input-seconds").value = seconds
        }


        function startTimer() {
            if (intervalId !== null) return;
        
            const days = parseInt(document.getElementById('input-days').value) || 0;
            const hours = parseInt(document.getElementById('input-hours').value) || 0;
            const minutes = parseInt(document.getElementById('input-minutes').value) || 0;
            const seconds = parseInt(document.getElementById('input-seconds').value) || 0;
        
            totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;
        
            intervalId = setInterval(function(){
                if (totalSeconds <= 0) {
                    clearInterval(intervalId);
                    
                    intervalId = null;
                    // timerDisplay.textContent = "Zeit abgelaufen!";
                    startButton.disabled = false;
                    stopButton.disabled = true;
                    resetButton.disabled = false;
                    document.getElementById('timerSound').play();
                    
                } else {
                    totalSeconds--;
                    updateDisplay();
                }
            }, 1000);
            startButton.disabled = true;
            stopButton.disabled = false;
            resetButton.disabled = false;
            }
            
            function stopTimer() {
                if (intervalId !== null){
                    clearInterval(intervalId);
                    intervalId = null;
                    startButton.disabled = false;
                    stopButton.disabled = true;
                    resetButton.disabled = false;
                }
            }
            function resetTimer() {
                stopTimer();
                totalSeconds = 0;
                updateDisplay();
                startButton.disabled = false;
                stopButton.disabled = true;
                resetButton.disabled = true;
            }

        startButton.addEventListener('click', startTimer);  
        stopButton.addEventListener('click', stopTimer);
        resetButton.addEventListener('click', resetTimer);
        

        updateDisplay();
        
   
   
   
   
   

       


