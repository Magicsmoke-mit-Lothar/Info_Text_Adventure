document.getElementById("LVL-button").addEventListener("click", function() {
document.getElementById("windowContainer").style.right = "0";
});

document.getElementById("closeWindow").addEventListener("click", function() {
document.getElementById("windowContainer").style.right = "-300px";
});


let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset3 || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    document.getElementById("top-bar").classList.add("hidden");
    document.getElementById("top-bar").style.top = "-10svh";
  } else {
    document.getElementById("top-bar").classList.remove("hidden");
    document.getElementById("top-bar").style.top = "0";
  }
  lastScrollTop = currentScroll;
}, false);




// Function to set countdown timer duration in seconds and return the remaining seconds
function setCountdown(seconds) {
  // Return a function that calculates and updates the remaining seconds
  return function() {
    // Calculate the end time based on the provided duration in seconds
    const countDownDate = new Date().getTime() + (seconds * 1000);

    // Update the countdown every second
    const countdown = setInterval(function() {
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the time remaining
      const distance = countDownDate - now;

      // Calculate remaining seconds
      let remainingSeconds = Math.floor(distance / 1000);

      // Update the HTML content to display the remaining seconds only if they are greater than or equal to zero
      if (remainingSeconds >= 0) {
        document.getElementById("remainingSeconds").textContent = remainingSeconds;
        document.getElementById("timer").classList.remove("hidden");
      } else {
        document.getElementById("remainingSeconds").textContent = '0';
      }

      // If the countdown is finished, display a message and clear the interval
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("ansbtnA").classList.remove("hidden");
        document.getElementById("ansbtnB").classList.remove("hidden");
        document.getElementById("ansbtnC").classList.remove("hidden");
        document.getElementById("timer").classList.add("hidden");
      }
    },0);
  };
}

// Example usage: set the countdown timer to 60 seconds
let getRemainingSeconds;
getRemainingSeconds();



function checkAnswer(ans) {
  console.log(ans);
  if(ans == "a"){
    window.location.href = "stage2.html";
    document.getElementById("timer").classList.add("hidden");
  }
  else{
    getRemainingSeconds = setCountdown(31);
    getRemainingSeconds();
    document.getElementById("ansbtnA").classList.add("hidden");
    document.getElementById("ansbtnB").classList.add("hidden");
    document.getElementById("ansbtnC").classList.add("hidden");
  }
}