var song;
var button, skipButton;
var volumeSlider, rateSlider,panSlider;
var amp, volume;

function preload(){
    song = loadSound("sound/2Pac-dearmama.mp3");
}

function setup(){
    createCanvas(600,400);
    background(0);
    
    button = createButton("play");
    button.mousePressed(skip);
    button.position(20,100);
    
    skipButton = createButton("skip");
    skipButton.mousePressed(togglePlaying);
    skipButton.position(70,100);
    
    //vloume is increased/decreasing amplitude
    volumeSlider = createSlider(0, 1, 0.5, .05);
    volumeSlider.position(20,130);
    
    rateSlider = createSlider(0.5, 1.5, 1, 0.05);
    rateSlider.position(20, 160);
    
    panSlider = createSlider(-1, 1, 0, .05);
    panSlider.position(20, 190);
    
    //add Cue
    song.addCue(3, showSquare);
    
    amp = new p5.Amplitude();
}

function draw(){
    
    volume = amp.getLevel();
    
    song.setVolume(volumeSlider.value());
    song.rate(rateSlider.value());
    song.pan(panSlider.value());
}

function togglePlaying(){
    if(song.isPlaying()){
        song.pause();
        button.html("2Pac-play");
    }
    else{
        song.play();
        button.html("Pause");
    }
}

function skip(){
    if(song.isPlaying()){
        song.jump(song.currentTime()+5);
    }
}

function showSquare(){
    fill(255);
    rect(width/2, height/2, volume,volume);
}