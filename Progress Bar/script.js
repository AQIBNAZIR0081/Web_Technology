let currentindex = 0;
let fillbar = document.querySelectorAll(".circle, .line");

function forward() {
  if (currentindex < fillbar.length) {
    fillbar[currentindex].style.backgroundColor = "blue";
    currentindex++;
  }
  if (currentindex === fillbar.length) {
    document.getElementById("nxtBtn").disabled = "ture";
    document.getElementById("preBtn").disabled = false;
  }
}

function previous() {
  if (currentindex > 0) {
    currentindex--;
    fillbar[currentindex].style.backgroundColor = "white";
  }
  if (currentindex === 0) {
    document.getElementById("preBtn").disabled = "ture";
    document.getElementById("nxtBtn").disabled = false;
  }
}
