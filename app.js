let timer = document.querySelector(".home__timer");
let downloadLink = document.querySelector(".downloadLink");
let btnDownload = document.querySelector(".downloadBtn");
let timerSpan = document.querySelector(".home__timer-counter-figure");
timer.style.display = 'none';
downloadLink.style.display = "none";
btnDownload.addEventListener('click', function () {
   timer.style.display = 'flex';
   btnDownload.style.display = "none";
   function countDown() {
      if (timerSpan.innerText != 0) {
         timerSpan.innerText--;
      } else {
         downloadLink.click();
         clearInterval(timerInterval);
      }
   }
   let timerInterval = setInterval(countDown, 1000);
});
