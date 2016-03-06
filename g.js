function hideshow(which){



if (!document.getElementById)
return
if (which.style.display=="block")
which.style.display="none"
else
which.style.display="block"
}




var current_score=150;
function score(current_score){
window.current_score -=10;
if (current_score == 40)
alert ("The right answer is michael jackson");
else{
document.getElementById("score").innerHTML = "Current Score:- " + current_score; 
}
}		






function result(myform){
var input= document.myform.answer.value.toLowerCase();
if(input == "michael jackson")
	alert ("well done, you guessed the right answer");
else
	alert ("wrong answer.Please try again.");
}






var i=0;
function add(which){
window.i+=1;
toggle_visibility(i) ;
if(i==12)
	which.style.display="none"

}
function toggle_visibility(id) {
	
    var e = document.getElementById(id);
    if (e.style.display == 'none') 
        e.style.display = 'block';
   
 }


