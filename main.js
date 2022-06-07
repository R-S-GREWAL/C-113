function preload() {

}
function setup() {
    canvas=createCanvas(400, 400);
    canvas.position(100, 250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw() {
    image(video, 0, 0, 400, 400);
}
function take_snapshot()
{ 
    save('student_name.png'); 
}