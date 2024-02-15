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
    console.log("Scroll down");
    document.getElementById("top-bar").classList.add("hidden");
    document.getElementById("top-bar").style.top = "-10svh";
  } else {
    console.log("Scroll up");
    document.getElementById("top-bar").classList.remove("hidden");
    document.getElementById("top-bar").style.top = "0";
  }
  lastScrollTop = currentScroll;
}, false);




// Function to set countdown timer duration in seconds and return the remaining seconds
function setCountdown(seconds) {
  // Calculate the end time based on the provided duration in seconds
  const countDownDate = new Date().getTime() + (seconds * 1000);

  // Return a function that calculates and updates the remaining seconds
  return function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const distance = countDownDate - now;

    // Calculate remaining seconds
    const remainingSeconds = Math.floor(distance / 1000);

    // Update the HTML content to display the remaining seconds
    document.getElementById("remainingSeconds").textContent = remainingSeconds;

    // If the countdown is finished, display a message
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  };
}

// Example usage: set the countdown timer to 60 seconds
//const getRemainingSeconds = setCountdown(60);

// Update the remaining seconds every secon
let getRemainingSeconds;



function checkAnswer(ans) {
  if(ans == "a"){
    window.location.pathname = "../html/index.html/";
  }
  else{
    getRemainingSeconds = setCountdown(60);
  }
}

const countdown = setInterval(function() {
  getRemainingSeconds();
}, 10);