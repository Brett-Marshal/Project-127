Harry_Potter="";
Peter_Pan = "";

function setup()
{
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 500, 400);
}

function preload()
{
    Harry_Potter = loadSound("Harry_Potter.mp3");
    Peter_Pan = loadSound("Peter_Pan.mp3");
}