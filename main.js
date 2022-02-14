noseX=0;
noseY=0;


function preload(){
    mustache_nose=loadImage('Mustache.png');

}

function setup(){
    canvas= createCanvas(350,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    console.log('Pose');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-30;
        noseY=results[0].pose.nose.y-15;

        console.log("Nose x= " + results[0].pose.nose.x);
        console.log("Nose y= " + results[0].pose.nose.y);
        
    }
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
    
}

function draw(){
image(video,0,0,350,300);
image(mustache_nose, noseX, noseY, 65,65);

}

function take_snapshot(){
    save('Mustache-Pic.png');
}