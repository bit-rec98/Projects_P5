let numSquares=6;
let colors=[];
let pickedColor;
let squareGrid=document.querySelectorAll(".square");
let colorDisplay=document.getElementById("colorDisplay");
let messageDisplay= document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetBtn=document.querySelector("#reset");
let modeBtn= document.querySelectorAll(".mode");


function randomColor() {
    let valueA = Math.floor(Math.random() * 255);
    let valueB = Math.floor(Math.random() * 255);
    let valueC = Math.floor(Math.random() * 255);
    return "rgb(" + valueA + ", " + valueB + ", " + valueC + ")";
}

function generateRandomColors(num){
    var array= [];

    for (var i = 0; i <num ; i++) {
        array[i] = randomColor();
        }
    return array;
}

function setSquares(){
    for (var i = 0; i < squareGrid.length; i++) {
        squareGrid[i].addEventListener("click", function(){
            var clickedColor = this.style.background;

            if(clickedColor === pickedColor){
                messageDisplay.textContent="You Won!";
                resetBtn.textContent="Play Again!";
                changeColors(clickedColor);
                h1.style.background=clickedColor;
            } else {
                this.style.background= "rgb(35, 35, 35)";
                messageDisplay.textContent="Try Again!";
            }
        })
    }
}
setSquares();

function resetGame(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squareGrid.length; i++) {

        if (colors[i]){
        squareGrid[i].style.background=colors[i];
        squareGrid[i].style.display="block";
        } else {
        squareGrid[i].style.display="none";
        }
    }
        h1.style.background="gray";
        messageDisplay.textContent="";
        resetBtn.textContent="New Colors";
}
resetGame();

resetBtn.addEventListener("click", function(){
    resetGame();
})

function changeColors(color){
    for (var i = 0; i < squareGrid.length; i++) {
        squareGrid[i].style.background=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}



function ModeBtns(){
    for (var i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            numSquares= (this.textContent==="Easy")?3:6;
            resetGame();
        });
    };
};
ModeBtns();











