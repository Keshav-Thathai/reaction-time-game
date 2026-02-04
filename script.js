let startTime;
let ready = false;

const screen = document.getElementById("screen");
const startBtn = document.getElementById("start");
const text = document.getElementById("text");
startBtn.onclick=()=>{
    text.innerText="wait for green...";
    screen.style.background="red";
    screen.innerText="WAIT";
    ready=false;

}
setTimeout(()=>{
     screen.style.background="green";
         screen.innerText="tap";
         startTime=Date.now();
         ready=true;
},Math.random() *1500+1000);
screen.onclick=()=>{
    if(!ready) return;
    let time=Date.now()-startTime;
    if (time < 300) {
  text.innerText = "Reaction Time: " + time + " ms 🔥 Excellent";
} else if (time < 400) {
  text.innerText = "Reaction Time: " + time + " ms 😃 Very Good";
} else if (time < 500) {
  text.innerText = "Reaction Time: " + time + " ms 🙂 Good";
} else {
  text.innerText = "Reaction Time: " + time + " ms  Keep Practicing";
}
ready=false;

};
    









