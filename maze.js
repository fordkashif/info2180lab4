var loser = false;

window.onload = function(){
	$("start").onclick = startClick;
	$("end").onmouseover = overEnd;
	var boundaries = $$("div#maze div.boundary");
	for(var i = 0; i < boundaries.length; i++) {
		boundaries[i].onmouseover = changeColor;
	}
};

function changeColor() {
	loser = true;	
	$("status").innerHTML = "You Lost! :["
	var boundaries = $$("div#maze div.boundary");
	for (var i = 0; i < boundaries.length; i++){
		boundaries[i].addClassName("youlose");
	}
}

function startClick(){
	loser = false;
	$("status").innerHTML = "Complete the maze!"
	var boundaries = $$("div#maze div.boundary");
	for (var i = 0; i < boundaries.length; i++){
		boundaries[i].removeClassName("youlose");
	}

}

function overEnd(){
	if(!loser){
		$("status").innerHTML = "You win! :]"
	} 
}
