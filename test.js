var x  = 1;
var y = 2;
var z = x + y;
document.getElementById('demo').innerHTML = z;
console.log('y');

var view{
displayMessage:function(mgs){
	var messageArea = document.getElementById("messageArea")
	 messageArea.innerHTML = mgs;
},
displayHit:function(location){
	var cell = document.getElementById(location);
	 cell.setAttribute("class", "hit");
},
	
displayMiss:function(location){
	var cell = document.getElementById(location);
	cell.setAttribute("class", "miss");
}
};
