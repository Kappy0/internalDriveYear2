#include "Deck.h"
#include "Player.h"

bool gameOver()
{
   char answer;

   cout << "Play again (Y/N)? ";
   cin >> answer;

   if(answer == 'y' || answer == 'Y')
   {
      return true;
   }
   else if(answer == 'n' || answer == 'N')
   {
      return false;
   }
   else
   {
      cout << "Please enter y or n." << endl;
      return false;
   }

   cout << endl;
}

int main()
{
   //Initialize random timer
   srand((unsigned int)time(NULL));

   //Initialize variables for the game
   bool playAgain;
   char playerChoice;
   bool playerHit;

   int playerCardCount;
   int houseCardCount;

   Deck deck;
   Player player(10), house(10);

   deck.createDeck();
   
   do
   {
      //Reset cards isDrawn to false
      deck.shuffle();

      //Assign values to variables
      playerHit = true;
      playerCardCount = 0;
      houseCardCount = 0;

      //Draw cards for player and house (2 at the beginning of a new game)
      for(int i = 0; i < 2; i++)
      {
         player.hand[i] = deck.drawCard();
         house.hand[i] = deck.drawCard();

         playerCardCount++;
         houseCardCount++;
      }

      do
      {
         //Print dealt cards. House only reveals one card.
         cout << "HOUSE'S HAND:" << endl;
         cout << "HIDDEN" << endl;
         house.hand[1].printCard();

         cout << endl;

         cout << "PLAYER'S HAND:" << endl;

         for(int i = 0; i < playerCardCount; i++)
         {
            player.hand[i].printCard();
         }

         player.scoreHand(playerCardCount);
         cout << "Player Score: " << player.score;

         cout << endl << endl;

         //Ask if Player wants to hit
         cout << "Hit(h) or stay(s)? ";
         cin >> playerChoice;

         if(playerChoice == 'h' || playerChoice == 'H')
         {
            player.hand[playerCardCount] = deck.drawCard();

            cout << "Drawn card: ";
            player.hand[playerCardCount].printCard();

            playerCardCount++;
         }
         else if(playerChoice == 's' || playerChoice == 'S')
         {
            playerHit = false;
         }
         else
         {
            cout << "Please enter h or s!" << endl;
         }

         cout << endl;

         //Recalculate player's score
         player.scoreHand(playerCardCount);
         cout << "Player Score: " << player.score;

         cout << endl << endl;
      }
      while(playerHit && player.score < 22);

      //Check for player bust
      if(player.score > 21)
      {
         cout << "**** The House Wins!!! ****" << endl;
      }
      else
      {
         cout << "HOUSE'S HAND:" << endl;
         house.hand[0].printCard();
         house.hand[1].printCard();

         cout << endl;

         house.scoreHand(houseCardCount);
         cout << "House Score: " << house.score;

         cout << endl << endl;

         while(house.score < 17)
         {
            cout << "The House hits..." << endl;
            house.hand[houseCardCount] = deck.drawCard();

            cout << "Drawn card: ";
            house.hand[houseCardCount].printCard();

            cout << endl;

            houseCardCount++;

            house.scoreHand(houseCardCount);

            cout << "House Score: " << house.score;

            cout << endl << endl;
         }

         if(house.score > 21)
         {
            cout << "**** The Player Wins!!! ****" << endl;
         }
         else
         {
            if(player.score == house.score)
            {
               cout << "**** Tie!!! ****" << endl;
            }
            else if(player.score > house.score)
            {
               cout << "**** The Player Wins!!! ****" << endl;
            }
            else
            {
               cout << "**** The House Wins!!! ****" << endl;
            }
         }
      }

      cout << endl;
      playAgain = gameOver();
      cout << endl;
   }
   while(playAgain);

   system("PAUSE");
   return 0;
}