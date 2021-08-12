leftwristX = 0;
leftwristY = 0;

rightwristX = 0;
rightwristY = 0;

function preload()
{
    the_untold_story = "the untold story.mp3";
    music = "music.mp3";
}

function setup()
{
    var canvas = createCanvas(450, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("posenet is laoded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftwristX + "leftWristY = " + leftwristY);

        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightwristX + "rightWristY = " + rightwristY);
    }
}

function draw()
{
    image(video, 0, 0, 450, 450);
}