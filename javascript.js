//--Let's get started!

//--We need to establish characters.  4 of them.
var charOne = {charId:"vader", attack:25, health:120};
var charTwo = {charId:"sidious", attack:30, health:130};
var charThree = {charId:"kylo", attack:35, health:100};
var charFour = {charId:"snoke", attack:50, health:180};
//--characters have health and default attack power stats.
$("#vaderHealth").text(charOne.health);
$("#sidHealth").text(charTwo.health);
$("#kyloHealth").text(charThree.health);
$("#snokeHealth").text(charFour.health);

var arena = undefined;
var player = undefined;

//--Select a character, and they become "your character".  move remaining characters to "available to be attacked" 
jQuery(".characterCard").click(function() {
	var selectChar = $(this);
	//console.log(selectChar.parent())
	// For selecting player character
	if (selectChar.parent().attr("id") === "charSelect") {
		$("#charSelect .characterCard").appendTo("#bench");
		$("#"+selectChar.attr("id")).appendTo("#playerZone");
		$("#"+selectChar.attr("id")).attr("id","player")
		player = eval(selectChar.attr("id"));
	};
	// For selecting enemy
	if (selectChar.parent().attr("id") === "bench") {
        if (arena === undefined) {
		$("#"+selectChar.attr("id")).appendTo("#defenderZone");
		$("#"+selectChar.attr("id")).attr("id","enemy")
		arena = eval(selectChar.attr("id"));
	    };
	};
});

//--selecting a character changes their attack var to '5'.

//--add attack button functionality.

$("#buttonOfDoom").click(function() {
	player.health = player.health - arena.attack;
	(player.health).appendTo("player.health")
	arena.health = arena.health - player.attack;
	player.attack += 8; 
}) ;

//--attack button does the following: Reduce enemy HP by current player ATK, reduce player HP by enemy ATK, then raise player ATK var by its initial value.

//--if enemy HP = 0, despawn enemy.

//--if attack button is pressed and there are no enemies in defender zone, then zone displays text: "Nobody home"

//--add reset button