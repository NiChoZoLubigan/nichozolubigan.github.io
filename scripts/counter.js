// counter

const countUp = document.getElementById('numup');
const countReset = document.getElementById('numreset');
const countDown = document.getElementById('numdown');
const countlb = document.getElementById('cl');
let count = 0;

countUp.onclick = function(){
    count++;
    countlb.textContent = count;
};
countReset.onclick = function(){
    count = 0;
    countlb.textContent = count;
};
countDown.onclick = function(){
    count--;
    countlb.textContent = count;
};