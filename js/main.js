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

  function start(){
    alert("Falls du versuchst zu schummeln und die Seite neu zu laden wirst du direkt zur Startseite geleitet und musst alle Aufgaben erneut lösen.     !!!!! Bitte verwenden sie Chrome als Browser um alle Effekte und die volle Experience die unser Text Adventure zu bieten hat zu erleben !!!!!");
    window.location.href = "stage1.html";
  }
