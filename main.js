var img = "";
var status

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = 'Status = Detecting';
}
function preload(){
    img = loadImage("dog_cat.jpg");
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("black");
    text("Dog", 45, 75);
    noFill();
    stroke("black");
    rect(30, 60, 450, 350);

    fill("black");
    text("Cat", 360, 90);
    noFill();
    stroke("black");
    rect( 230, 80, 350, 350)
}
function modelLoaded(){
    console.log("Model loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
}