//--Let's get started!

//--We need to establish characters.  4 of them.
var vader  = [25,120];
var sidious  = [30,130];
var kylo  = [35,100];
var snoke  = [50,180];
//--characters have health and default attack power stats.
$("#vaderHealth").text(vader[1]);
$("#sidHealth").text(sidious[1]);
$("#kyloHealth").text(kylo[1]);
$("#snokeHealth").text(snoke[1]);

var arena = undefined;
//--Select a character, and they become "your character".  move remaining characters to "available to be attacked" 
jQuery(".characterCard").click(function() {
	var selectChar = $(this);
	//console.log(selectChar.parent())
	// For selecting player character
	if (selectChar.parent().attr("id") === "charSelect") {
		$("#charSelect .characterCard").appendTo("#bench");
		$("#"+selectChar.attr("id")).appendTo("#playerZone");
	};
	// For selecting enemy
	if (selectChar.parent().attr("id") === "bench") {
        if (arena === undefined) {
		$("#"+selectChar.attr("id")).appendTo("#defenderZone");
		arena = "assigned";
	    };
	};
	
});


//--selecting a character changes their attack var to '5'.

//--select an enemy and they move to the defender zone.

//--add attack button functionality.

//--attack button does the following: Reduce enemy HP by current player ATK, reduce player HP by enemy ATK, then raise player ATK var by its initial value.

//--if enemy HP = 0, despawn enemy.

//--if attack button is pressed and there are no enemies in defender zone, then zone displays text: "Nobody home"

//--add reset button