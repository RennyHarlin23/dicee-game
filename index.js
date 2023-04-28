var randomNumber1 = Math.floor(Math.random()*6) + 1;
var a = "./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",a);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var b = "./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",b);

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "It's a draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 is the winner";
}
else{
    document.querySelector("h1").textContent = "Player 2 is the winner🚩";

}