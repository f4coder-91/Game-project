buidling:
The initial sketch was for Tic Tac Toe board game using Html, Css and JavaScript.

I had spent few hours trying to design the board.
the board had to be 3 by 3 with no border-bottom and no left and right. I center the boardgame and its content where is easier for user interface.

coding:

Firstly, after selecting all the elements I need, I then had to create an array with empty strings and set to null each index.
Secondly, I created a few variables like player1, player2 and currentPlayer which keeps track the user and their turn.
I also, had to loop trough the empty array and if is not empty, take curent player and push into the array.

The final piece was implementing the winner and again i had created winningCom array with contains all the ways the player could win.
the following steps was completed
steps :
1: user should click the cell and the letter X or O should be displayed.
2 : only empty box should be clickable, the latter should not change if you click a box that is already clicked.
3 : reset button can be clicked to reset the game

debuggin:

The most diffcult part was the playerWon function where I needed to research and understand. I could not get the right code at first as I did not know whether to loop through the empty array or the winningCompo array.
After few tries, I loop through the winner array and returned a new array based on condition that they match with empty array elements.
otherwise it returns false which means no one has won the game.

There is rest button that reset the game rather refreshing the page,
the winner player will be highlighted for user interface.
