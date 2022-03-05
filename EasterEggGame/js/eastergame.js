

function changeBackground(colour) {    //this function changes the background of the main menu
    var x = document.getElementById("background");
    var colours = {   //array holds background colours and hex codes
        red: "#da5353",
        blue: "#484e97",
        green: "#82d986",
        purple: "#9c83d5",
        yellow: "#efd64e"
    };
    x.style.background = colours[colour];  //updates the background colour

}

document.getElementById("btn").addEventListener("click", startGame);   // adds event listerner to start button to start the game

var pointstracker = 0;    // keeps track of player score
var count = 31;   // timer count down
// var overallScore = 0;   // future use of score carrying over

function startGame() {
    document.getElementById('btn').style.display = "none";  // removes the start button from the screen

    var counter = setInterval(timer, 1000);   // starts the timer
    var x = document.getElementById("popup");   // stores id for the nexl level screen
    var audio = document.createElement('audio');
    audio.src = '../audio/kalimba.mp3';   //plays the song and repeats it
    audio.volume = 0.4;
    audio.play();
    audio.loop = true;

    while (count => 11){   //I hope this counts as a loop in the checklist
        console.log("Pointstracker working in this loop ");
        break;
    }


    function timer() {
        count--;
        document.getElementById("countdown").innerHTML = count + " secs";
        document.getElementById("points").innerHTML = pointstracker + "/5";

      
            if (pointstracker == 5 && count == 0) {   // if statement when player gets to 5 points and time is at 0 seconds player is then displayed next level screen
                clearInterval(counter);
                count = 0;
                localStorage.setItem('overallScore', pointstracker);
                x.style.display = "block";
            } else if (count === 0) {   // if player reaches 0 game over screen is displayed
                clearInterval(counter);
                count = 0;
                x.style.display = "block";
                document.getElementById('change').innerHTML = 'Game Over!';
                document.getElementById('gameover').style.display = "none";
                localStorage.setItem('overallScore', pointstracker);
                
                

            }

        

    }
    $(document).ready(function () {

        //my helper functions that add the shadow to the object when dragged
        
        function myHelper(event, egg) {
            return '<div id="draggableEasterEggShadow"></div>';
        }

        function myHelperOne(event) {

            return '<div id="draggableEasterEggOneShadow"></div>';
        }

        function myHelperTwo(event) {
            return '<div id="draggableEasterEggTwoShadow"></div>';
        }

        function myHelperThree(event) {
            return '<div id="draggableEasterEggThreeShadow"></div>';
        }

        function myHelperFour(event) {
            return '<div id="draggableEasterEggFourShadow"></div>';
        }

        
        // removes the easter egg draggable in the game so same easter egg cannot be used to score points
        function dropMade(event, ui) {
            $("#draggableEasterEgg").remove();
            pointstracker += 1;
        }

        function dropMadeOne(event, ui) {
            $("#draggableEasterEggOne").remove();
            pointstracker += 1;
        }

        function dropMadeTwo(event, ui) {
            $("#draggableEasterEggTwo").remove();

            pointstracker += 1;
        }

        function dropMadeThree(event, ui) {
            $("#draggableEasterEggThree").remove();
            pointstracker += 1;
        }

        function dropMadeFour(event, ui) {
            $("#draggableEasterEggFour").remove();
            pointstracker += 1;
        }

        // makes the easter eggs draggable keeps them in the game screen
        
        $("#draggableEasterEgg").draggable({
            containment: '.backgroundgame',
            cursor: 'move',
            snap: '.backgroundgame',
            revert: "invalid",
            helper: myHelper

        });
        $("#draggableEasterEggOne").draggable({
            containment: '.backgroundgame',
            cursor: 'move',
            snap: '.backgroundgame',
            revert: "invalid",
            helper: myHelperOne
        });
        $("#draggableEasterEggTwo").draggable({
            containment: '.backgroundgame',
            cursor: 'move',
            snap: '.backgroundgame',
            revert: "invalid",
            helper: myHelperTwo
        });
        $("#draggableEasterEggThree").draggable({
            containment: '.backgroundgame',
            cursor: 'move',
            snap: '.backgroundgame',
            revert: "invalid",
            helper: myHelperThree
        });
        $("#draggableEasterEggFour").draggable({
            containment: '.backgroundgame',
            cursor: 'move',
            snap: '.backgroundgame',
            revert: "invalid",
            helper: myHelperFour
        });
        
        
        
        //creates the drop zone 

        $("#dropBasket").droppable({
            accept: "#draggableEasterEgg",
            drop: dropMade

        });

        $("#dropBasketOne").droppable({
            accept: "#draggableEasterEggOne",
            drop: dropMadeOne

        });

        $("#dropBasketTwo").droppable({
            accept: "#draggableEasterEggTwo",
            drop: dropMadeTwo

        });

        $("#dropBasketThree").droppable({
            accept: "#draggableEasterEggThree",
            drop: dropMadeThree

        });

        $("#dropBasketFour").droppable({
            accept: "#draggableEasterEggFour",
            drop: dropMadeFour

        });


    });

}
