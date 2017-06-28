//  Variable declared to 0
var wins = 0;
var losses = 0;
// Variable computerRandomNumber
var computerRandomNumber;

// Function to set randomnumber ranged number from 19-120.
function randomIntFromComputer(){
    computerRandomNumber = Math.floor(Math.random() * 101 + 19);
}

// Calls the random function above to give computerRandomNumver a value.
randomIntFromComputer();
console.log("Computer number guess: " + computerRandomNumber);

// Resets the game
function resetGame(){
	computerRandomNumber = Math.floor(Math.random() * 101 + 19);
	$(".compGuessBox").html(computerRandomNumber);
	imgOneValue =  Math.floor(Math.random() * 12 + 1);
	imgTwoValue =  Math.floor(Math.random() * 12 + 1);
	imgThreeValue =  Math.floor(Math.random() * 12 + 1);
	imgFourValue =  Math.floor(Math.random() * 12 + 1);
	crystalOne.attr("value", imgOneValue);
	crystalTwo.attr("value", imgTwoValue);
	crystalThree.attr("value", imgThreeValue);
	crystalFour.attr("value", imgFourValue);
	imgNumberSum = 0;
	$(".scoreText").html(imgNumberSum);
}

// Creates an headers div for the content the text Crystals Collector!
var headerDiv = $("<div>");
headerDiv.html("Crystals Collector!");
$("#crystalsCollector").append(headerDiv);
headerDiv.attr("class", "topHeader");

// Instruction for playing game
var gameInfo = $("<div>");
gameInfo.html("You will be given a random number at the start of the game." +
	"<br><br>" + 
	"There are four crystals below. By clicking on a crystal you" +
	"<br>" +
	"will add a specific amount of points to your total sorce." +
	"<br><br>" +
	"You win the game by matching your total sore to random" +
	"<br>" +
	"number, you lose the game if your total score goes above" +
	"<br>" +
	"the random number." +
	"<br><br>" +
	"The value of each crystal is hidden from you until you click on it." +
	"<br><br>" +
	"Each time when the game starts, the game will change the" +
	"<br>" +
	"values of each crystal.");
$("#crystalsCollector").append(gameInfo);
gameInfo.attr("class", "midInfo");

// div for computer random guess value.
var computerGuessBox = $("<div>");
computerGuessBox.html(computerRandomNumber);
$("#crystalsCollector").append(computerGuessBox);
computerGuessBox.attr("class", "compGuessBox");

// Container for the text You win! You Loss!
winLossPTag = $("<p>");
winLossPTag.html("&nbsp;");
$("#winsLossBox").append(winLossPTag);
winLossPTag.attr("class", "winLossPTag");

// Wins container
winsBox = $("<p>");
winsBox.html("Wins: " + wins);
$("#winsLossBox").append(winsBox);
winsBox.attr("class", "winsContent");

// Loss Container
lossesBox = $("<p>");
lossesBox.html("Losses: " + losses);
$("#winsLossBox").append(lossesBox);
lossesBox.attr("class", "lossContent");

// Set the value of the 4 crystals images from 1-12.
var imgOneValue =  Math.floor(Math.random() * 12 + 1);
var imgTwoValue =  Math.floor(Math.random() * 12 + 1);
var imgThreeValue =  Math.floor(Math.random() * 12 + 1);
var imgFourValue =  Math.floor(Math.random() * 12 + 1);

// Creates the img tags with a set value from the function above.
var crystalOne = $("<img>");
$("#crystalImg").append(crystalOne);
crystalOne.attr("src", "assets/images/1-crystal.jpeg");
crystalOne.attr("class", "imgOne crystalImages");
crystalOne.attr("value", imgOneValue);


var crystalTwo = $("<img>");
$("#crystalImg").append(crystalTwo);
crystalTwo.attr("src", "assets/images/2-crystal.jpeg");
crystalTwo.attr("class", "imgTwo crystalImages");
crystalTwo.attr("value", imgTwoValue);


var crystalThree = $("<img>");
$("#crystalImg").append(crystalThree);
crystalThree.attr("src", "assets/images/3-crystal.jpg");
crystalThree.attr("class", "imgThree crystalImages");
crystalThree.attr("value", imgThreeValue);


var crystalFour = $("<img>");
$("#crystalImg").append(crystalFour);
crystalFour.attr("src", "assets/images/4-crystal.jpeg");
crystalFour.attr("class", "imgFour crystalImages");
crystalFour.attr("value", imgFourValue);

//Text Your total score is:.
total = $("<div>");
total.html("Your total score is: ");
$("#totalScore").append(total);
total.attr("class", "totalScoreText");

// Score box container that has a set width/height to contain the score p-tag.
var scoreBox = $("<div>");
$("#score").append(scoreBox);
scoreBox.attr("class", "scoreBox");

var score = $("<p>");
$(".scoreBox").append(score);
score.attr("class", "scoreText");
// Set the sum of the crystal  to 0 and increases the value upon clicking
var imgNumberSum = 0;
// Prints the score into the the html page.
score = imgNumberSum;
document.querySelector(".scoreText").innerHTML = score;

$(".crystalImages").on("click", function(){
	imgNumberSum += parseInt($(this).attr('value'));
	console.log("Value of the img clicked: " + $(this).attr('value'));
	console.log("Sum of values: " + imgNumberSum);

	score = imgNumberSum;
	document.querySelector(".scoreText").innerHTML = score;
	// Wins if the sum of the value is = to the computerNumberGuess
	if (computerRandomNumber == imgNumberSum){
		wins++
		$(".winLossPTag").html("You win!");
		resetGame();
		alert("You win");
	}
	// Loose if value of the sum of the imgs is greater
	else if(computerRandomNumber < imgNumberSum){
		losses++
		$(".winLossPTag").html("You Loss!");
		resetGame();
		alert("You Lose");
	}

	winsCounter = ("Wins: " + wins);
	document.querySelector(".winsContent").innerHTML = winsCounter;

	lossCounter = ("Losses: " + losses);
	document.querySelector(".lossContent").innerHTML = lossCounter;

});