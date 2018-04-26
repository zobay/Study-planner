var name = window.prompt("Hello, plz, Enter your name");

var greeting= document.getElementById("greeting");
greeting.innerHTML += " , You are " + name;


function checkNUm(){
	//sec 1 test
   var okPhysics = document.getElementById('physics');
	var  physics= okPhysics.value;

	if (isNaN(physics)) {
     	alert("plz Enter a number")
     }

	var find1= document.getElementById("physics");
    var strengthA = document.getElementById("strengthA");

    strengthA.value= find1.value.length;
    if (find1.value.length>3) {
    	alert("Plz, do not put more than 3 digits")
    } 

    //sec 2 test
    var okChemistry = document.getElementById('chemistry');
	var  chemistry= okChemistry.value;

	if (isNaN(chemistry)) {
     	alert("plz Enter a number")
     }


  var find2= document.getElementById("chemistry");
    var strengthB = document.getElementById("strengthB");

    strengthB.value= find2.value.length;
    if (find2.value.length>3) {
    	alert("Plz, do not put more than 3 digits")
    } 

    //sec3 test
      var okMath = document.getElementById('math');
	    var  math= okMath.value;

    if (isNaN(math)) {
     	alert("plz Enter a number")
     }



    var find3= document.getElementById("math");
    var strengthC = document.getElementById("strengthC");

    strengthC.value= find3.value.length;
    if (find3.value.length>3) {
    	alert("Plz, do not put more than 3 digits")
    } 
}




var physicsNumber = document.getElementById('physicsNumber');
physicsNumber.onclick = CalculateTotal;

function CalculateTotal() {
	var okPhysics = document.getElementById('physics');
	var  physics= okPhysics.value;

	var congress = document.getElementById('congress');
	var minute = document.getElementById('minute')
  
	if(physics > 8 )  {
		congress.innerHTML = "Congratulations! you are good enough ";
	}
    
    var physicsMinutes = physics*60;
	var minutesMessage = document.getElementById("minutesMessage");
	minutesMessage.innerHTML = " You have studied for "+ physicsMinutes + " minutes";

	var physicsSeconds = physicsMinutes*60;
	var  secondsMessage = document.getElementById("secondsMessage");
	secondsMessage.innerHTML = " You have studied for "+ physicsSeconds + "seconds";

	var timingNext = document.getElementById("timingNext");
	timingNext.removeAttribute("hidden")


	timingNext.onclick = function () {
 	  document.getElementById("sec2").style.visibility="visible";
	}

//It is sec 2

    var chemistryNumber = document.getElementById('chemistryNumber');
chemistryNumber.onclick = CalculateTotal;

function CalculateTotal() {
	var okChemistry = document.getElementById('chemistry');
	var  chemistry= okChemistry.value;

	var congress = document.getElementById('congress2');

	if (chemistry > 8) {
		congress.innerHTML = "Congratulations! you are good enough ";
	} 

	var chemistryMinutes = chemistry*60;
	var minutesMessage2 = document.getElementById("minutesMessage2");
	minutesMessage2.innerHTML = " You have studied for "+ chemistryMinutes + "minutes";

	var chemistrySeconds = chemistryMinutes*60;
	var  secondsMessage2 = document.getElementById("secondsMessage2");
	secondsMessage2.innerHTML = " You have studied for "+ chemistrySeconds + "seconds";

	var timingNext2 = document.getElementById("timingNext2");
	timingNext2.removeAttribute("hidden")

	timingNext2.onclick = function () {
	  document.getElementById("sec3").style.visibility="visible";
	   }

	   //it is sec 3
	   var mathNumber = document.getElementById('mathNumber');
       mathNumber.onclick = CalculateTotal;

        function CalculateTotal() {
	    var okMath = document.getElementById('math');
	    var  math= okMath.value;

	    var congress = document.getElementById('congress3');

	if (math > 8) {
		congress.innerHTML = "Congratulations! you are good enough ";	} 

		var mathMinutes = math*60;
	var minutesMessage3 = document.getElementById("minutesMessage3");
	
	minutesMessage3.innerHTML = " You have studied for "+ mathMinutes + "minutes";

	var mathSeconds = mathMinutes*60; 
	var  secondMessage3 = document.getElementById("secondsMessage3");
	secondMessage3.innerHTML = " You have studied for "+ mathSeconds + "seconds";

	var timingNext3 = document.getElementById("timingNext3");
	timingNext3.removeAttribute("hidden")

	timingNext3.onclick = function () {
	  document.getElementById("sec4").style.visibility="visible";
	   }



	   var timingNext4 = document.getElementById("timingNext4");
	timingNext4.onclick = function () {
	  document.getElementById("result").removeAttribute("hidden");
	   }

	   	var hour = +physics + +chemistry + +math; 
	   	var totalSeconds = physicsSeconds + chemistrySeconds+ mathSeconds;
	   	var totalMinutes = physicsMinutes + chemistryMinutes + mathMinutes;

	   var result = document.getElementById("result");
	   result.innerHTML = "You have studied for "+ hour + " hours.<br>and "+totalMinutes +"minutes. "
	   +"and "+ totalSeconds + "seconds"
     }
 }

}
