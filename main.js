canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
backgroundImg = "racetrack.jpg";
car1Img = "car1.png";
car1X = -5;
car1Y = 10;
car1Width = 150;
car1Height = 100;
car2Img = "car2.png";
car2X = 10;
car2Y = 100;
car2Width = 120;
car2Height = 90;
function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImg;
    car1ImgTag = new Image();
    car1ImgTag.onload = uploadCar1;
    car1ImgTag.src = car1Img;
    car2ImgTag = new Image();
    car2ImgTag.onload = uploadCar2;
    car2ImgTag.src = car2Img;
}
function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car1ImgTag, car1X, car1Y, car1Width, car1Height);
}
function uploadCar2() {
    ctx.drawImage(car2ImgTag, car2X, car2Y, car2Width, car2Height);
}
window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "37") {
        console.log("left");
        car1Left();
    }
    if (keyPressed == "38") {
        console.log("up");
        car1Up();
    }
    if (keyPressed == "39") {
        console.log("right");
        car1Right();
    }
    if (keyPressed == "40") {
        console.log("down");
        car1Down();
    }


    if (keyPressed == "65") {
        console.log("A");
        car2Left();
    }
    if (keyPressed == "87") {
        console.log("W");
        car2Up();
    }
    if (keyPressed == "68") {
        console.log("D");
        car2Right();
    }
    if (keyPressed == "83") {
        console.log("S");
        car2Down();
    }

    if (car1X == 655) {
        console.log("P1 won");
        document.getElementById("player1").innerHTML = "P1 : 1";
    }
    if (car2X == 670) {
        console.log("P2 won");
        document.getElementById("player2").innerHTML = "P2 : 1";
    }
}
function car1Up() {
    if (car1Y >= 0) {
        car1Y = car1Y - 5;
        console.log("When up arrow key pressed, x = " + car1X + " y = " + car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1Down() {
    if (car1Y <= 500) {
        car1Y = car1Y + 5;
        console.log("When down arrow key pressed, x = " + car1X + " y = " + car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1Left() {
    if (car1X >= 0) {
        car1X = car1X - 5;
        console.log("When left arrow key pressed, x = " + car1X + " y = " + car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1Right() {
    if (car1X <= 655) {
        car1X = car1X + 5;
        console.log("When right arrow key pressed, x = " + car1X + " y = " + car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}


function car2Up() {
    if (car2Y >= 0) {
        car2Y = car2Y - 5;
        console.log("When W key pressed, x = " + car2X + " y = " + car2Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2Down() {
    if (car2Y <= 500) {
        car2Y = car2Y + 5;
        console.log("When S key pressed, x = " + car2X + " y = " + car2Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2Left() {
    if (car2X >= 15) {
        car2X = car2X - 5;
        console.log("When A key pressed, x = " + car2X + " y = " + car2Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2Right() {
    if (car2X <= 670) {
        car2X = car2X + 5;
        console.log("When D key pressed, x = " + car2X + " y = " + car2Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}