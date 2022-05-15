function setup()
{
   video =  createCapture(VIDEO);
    video.size(550 , 550);
    canvas = createCanvas(550 , 550);
    canvas.position(560 , 150);
    posenet = ml5.poseNet(video , modalLoaded);
    posenet.on('pose' , gotPoses);
}

function modalLoaded()
{
    console.log("PoseNet is Initialized");
}

function draw()
{
    background('black');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}