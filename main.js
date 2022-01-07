status = "";
objects = [];

function preload() {

  

}

function setup() {

  canvas = createCanvas(400,275);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {

  image(video,0,0,400,275);

  if(status!="") {

    for(i=0;i<objects.length;i++) {
      
      fill("#FF0000");
      percent = floor(objects[i].confidence)*100;
      noFill();
      stroke("#FF0000");
      text = objects[i].label;
      text(text+" "+percent+"%",objects[i].x,objects[i].y);
      rect(object[i].x,objects[i].y,objects[i].width,objects[i].height);

      if(objects==value) {

        video.stop();
        objectDetector.detect(gotResult);
        document.getElementById("status").innerHTML = "object mentioned found!";
        
        function speak() {

        synth = window.speechSynthesis;
        utterThis = new SpeechSynthesisUtterance("object mentioned found");
        synth.speak(utterThis);

        }

      } else {

        document.getElementById("status").innerHTML = "object mentioned not found";

      }

    }    

  }

}

function start() {

  objectDetector = ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  value = document.getElementById("text_inp").value;

}

function modelLoaded() {

  console.log("Model Loaded");
  status = true;

}

function gotResult(error,results) {

  objects = results;
  
}