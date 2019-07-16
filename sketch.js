//* Click One Box project
let red = 0;
let blue = 255;;

function setup(){
    createCanvas(600, 600)
    background(150);
}

function draw(){

    fill(red, 0, blue);
    rect(0, 0, width, height);
}

function mouseClicked(){
    if (mouseClicked && blue > red){
    red = 255;
    blue = 0;
} else if(mouseClicked && red > blue){
    red = 0;
    blue = 255;
  }
}


