let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var initializeBTN = document.createElement('button');
initializeBTN.innerText = 'Click Here to Start'
document.getElementById('game-over-lbl').appendChild(initializeBTN);
initializeBTN.addEventListener('click', (initialEvent) => {initialEvent.target.hidden = true;});

// use the value stored in the nextPlayer variable to indicate who the next player is
let playerValue = document.querySelector('b');
let playerText = 'Next Player: ';
playerValue.innerText = playerText;

//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   for (let i = 0; i < 9; i++)
   {
       let cellID = 'c' + (i+1);
       var newBTN = document.createElement('button');
       document.getElementById(cellID).appendChild(newBTN);
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{   /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    event.target.innerText = nextPlayer;
    if (nextPlayer === 'X') {
        nextPlayer = 'O';
    }
    else{
        if (nextPlayer === 'O') {
            nextPlayer = 'X';
        }
    }
    
    let playerText = 'Next Player: ' + nextPlayer;
    playerValue.innerText = playerText;
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    event.target.disabled = 'disabled';


    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let lbl = document.getElementById('game-over-lbl')
        var headerNew = document.createElement('h1');
        headerNew.innerText = 'Game Over';
        lbl.appendChild(headerNew);
    }
    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   let clickedBTNS = true;
   for (let i = 0; i < btns.length; i++)
   {
       if (!btns[i].disabled)
       {
           clickedBTNS = false;
       }
   }
   return clickedBTNS;
}