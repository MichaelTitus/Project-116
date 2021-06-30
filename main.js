noseX = 0;
noseY = 0;
function preload() {
    mustache = loadImage("236408aae759daf44b74a6ed748389df.png")
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotposes)
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(mustache, noseX, noseY, 60, 45)
    /*fill("red")
     stroke("yellow")
     circle(noseX,noseY,25)*/

}

function takesnapshot() {
    save('FilteredNose.png')
}

function modelLoaded() {
    console.log('posenet Is Initialized')

}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x-30;
        noseY = results[0].pose.nose.y;
        console.log(noseX, noseY);
    }
}