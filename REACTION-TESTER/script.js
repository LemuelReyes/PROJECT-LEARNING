// randomizes the color of the box
function getRandomColor() {
 	 	 var letters = '0123456789ABCDEF'.split('');
 	 	 var color = '#';
 	 	 for (var i = 0; i < 6; i++ ) {
 	 	 color += letters[Math.round(Math.random() * 15)];
 	 	 }
 	 	 return color;
	 	 }
//clicked time is when the function started / created time is when the box appears and is available to be clicked / reaction time is clicked time minus the created time/
var clickedTime; var createdTime; var reactionTime;

function makeBox() {
  createdTime=Date.now();
  // randomize the time
  var time=Math.random();
  // the time is randomized from 0 to 5000 ms
  time=time*5000;

// this function randomizes the position of the box. it is achieved by randomizing top and left values and setting pixels to them.

setTimeout(function() {

var top=Math.random();

  top=top*300;

var left=Math.random();

  left=left*300;

document.getElementById("box").style.top=top+"px";
document.getElementById("box").style.left=left+"px";

// this function generates a 50% random chance of either being circle or square

  if (Math.random()>0.5) {
           document.getElementById("box").style.borderRadius="140px";
        } else {
             document.getElementById("box").style.borderRadius="0px";
        }
// ends here

document.getElementById("box").style.display="block";}, time);

//function randomizes colors

document.getElementById("box").style.backgroundColor=getRandomColor();
//ends here

  createdTime=Date.now();

 }

document.getElementById("box").onclick=function() {
  clickedTime=Date.now();
  //clicked time is first here since the seconds elapsed will always have a longer duration than created time.  divide it by a thousand to round the miliseconds to seconds
  reactionTime=(clickedTime-createdTime)/1000;
  // this displays the time without using alert
  document.getElementById("time").innerHTML=reactionTime;
  //this is used to refer back to the element you just used, in this case it is talking about the id "time and telling it to display to none
  this.style.display="none";

  makeBox();
}

  makeBox();

//======================================
