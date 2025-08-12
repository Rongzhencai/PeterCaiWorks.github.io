function changeHeading1() {
    document.getElementById('changeHeading1').innerHTML = "Assessment 3 Rongzhen cai (Peter) z5506563";
}


document.addEventListener("DOMContentLoaded", function () {
  var text2 = document.getElementById("text2");
  var statusText = text2.querySelector(".status-text");

  if (text2 && statusText) {
    text2.addEventListener("click", function handler() {
      statusText.textContent = "ACTIVE";
      statusText.style.color = "#60ff41ff"; 
      text2.removeEventListener("click", handler);
    });

    statusText.style.color = "#de2121ff"; 
  }
});



document.addEventListener("DOMContentLoaded", function() {
  var startButton = document.querySelector(".startButton");
  var statusText = document.querySelectorAll(".statusLine")[0].querySelector(".statusValue");
  var heartRateValue = document.querySelectorAll(".statusLine")[1].querySelector(".statusValue");
  var tagline = document.querySelector(".tagline");

  startButton.addEventListener("click", function() {
    startButton.textContent = "Filtering...";
    setTimeout(function() {
      startButton.textContent = "Emotion Filter ON ✅";
      statusText.textContent = "Stable 😊";
      heartRateValue.textContent = "72 bpm";
      tagline.textContent = "Neural sync complete. You may now engage in regulated interactions.";
    }, 1000);
  });
});




function toggleDetail(btn) {
  var detail = btn.nextElementSibling;
  if (detail.style.display === "none" || detail.style.display === "") {
    detail.style.display = "block";
    btn.textContent = "Hide details";
  } else {
    detail.style.display = "none";
    btn.textContent = "View details";
  }
}



function mypopup() {
    let w = 700;
    let h = 600;
    let left = (screen.width - w) / 2;
    let top = (screen.height - h) / 2;
    window.open("popup.html", "mywindow",
        `width=${w},height=${h},top=${top},left=${left},scrollbars=1,resizable=1`);
}






