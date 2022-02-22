// let x=Math.floor(Math.random()*6)+1;
// document.write(x);

function getRandom(min,max){
    let x=Math.floor(Math.random()*(max-min))+min;
    return x;
}
let min=10,max=30;
document.write(getRandom(min,max)); 