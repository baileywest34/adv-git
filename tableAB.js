//change output when clicked
const Q0 = document.querySelector('.output0');
const Q1 = document.querySelector('.output1');
const Q2 = document.querySelector('.output2');
const Q3 = document.querySelector('.output3');
const Qinitial = [0,1];
let index = 0;

Q0.addEventListener('click', function changeOutput() {
    Q0.innerHTML = Qinitial[index]; 
    index = index >= Qinitial.length - 1 ? 0 : index + 1;
});

Q1.addEventListener('click', function changeOutput() {
    Q1.innerHTML = Qinitial[index]; 
    index = index >= Qinitial.length - 1 ? 0 : index + 1;
});

Q2.addEventListener('click', function changeOutput() {
    Q2.innerHTML = Qinitial[index]; 
    index = index >= Qinitial.length - 1 ? 0 : index + 1;
});

Q3.addEventListener('click', function changeOutput() {
    Q3.innerHTML = Qinitial[index]; 
    index = index >= Qinitial.length - 1 ? 0 : index + 1;
});


let qOut = document.querySelector('.Qtotal');
function qTotal() {
    qOut.innerHTML = Q0.innerHTML + Q1.innerHTML + Q2.innerHTML + Q3.innerHTML;
};




