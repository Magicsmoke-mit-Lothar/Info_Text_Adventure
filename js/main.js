function changeText(text, text_alt) {
    // Hide the original button text
      document.getElementById(text).style.display = "none";
      document.getElementById(text_alt).style.display = "block";
      document.getElementById(text_alt).classList.add("redFlash");

  }

  function resetText(text, text_alt) {
    // Show the original button text
    document.getElementById(text).style.display = "block";

    document.getElementById(text_alt).style.display = "none";
    document.getElementById(text_alt).classList.remove("redFlash");
  }