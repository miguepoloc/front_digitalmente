let container = document.querySelector(".container");
let text = document.getElementById("text");
let totalTime = 7500;
let breatheTime = (totalTime / 5) * 2;
let holdTime = totalTime / 5;

const relaxationMethod = () => {
  text.innerHTML = "Inhala";
  container.className = "container grow";
  setTimeout(() => {
    text.innerHTML = "Hold!";
    setTimeout(() => {
      text.innerHTML = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
};

relaxationMethod();
setInterval(relaxationMethod, totalTime);
