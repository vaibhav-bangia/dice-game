// Returns a random integer from 1 to 6 :
var random_num1 = Math.ceil(Math.random() * 6);
var random_num2 = Math.ceil(Math.random() * 6);

document.querySelectorAll("img")[0].setAttribute("src",`images/dice${random_num1}.png`)
document.querySelectorAll("img")[1].setAttribute("src",`images/dice${random_num2}.png`)
var str ;
if(random_num1>random_num2){
    str = "Player 1 wins";
}else if(random_num2>random_num1){
    str = "Player 2 wins";
}else{
    str = "Draw";
}

document.querySelector("h1").innerHTML= str ; 