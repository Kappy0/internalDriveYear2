//Kappy; Final Project Example
//main.cpp : Holds the game loop for Black Jack

#include "CardFunctions.h"

int main() 
{
	// Seed the random number generator
	time_t x;
	time(&x);
	srand(x);

	//Initialize deck, player hand, and house hand
	bool cardsDealt[52];
	int houseCardCount = 0;
	int houseHand[12];
	int playerCardCount = 0;
	int playerHand[12];

	// Loop once for each hand
	do 
	{
		// "Shuffle" the cards; set them all to undealt
		Shuffle(cardsDealt);

		// Deal the hands. Get two cards for each
		playerHand[0] = GetNextCard(cardsDealt);
		houseHand[0] = GetNextCard(cardsDealt);
		playerHand[1] = GetNextCard(cardsDealt);
		houseHand[1] = GetNextCard(cardsDealt);
		houseCardCount = 2;
		playerCardCount	= 2;

		// Signal a new hand.
		cout << "--------------------------------------------------------" << endl;
		cout << "-----------------------New Hand-------------------------" << endl;
		cout << "--------------------------------------------------------" << endl;

		char playerChoice;
		bool playerHit = true;
		int playerScore	= ScoreHand(playerHand, playerCardCount);

		// Get Player's hits. Calculate the score and redisplay after each hit.
		do 
		{
			// Print the dealt cards, but only the House's second card.
			cout << "House's Hand" << endl;
			cout << "** ";
			PrintCard(houseHand[1]);
			cout << endl;
			cout << "Player's Hand: Score = " << ScoreHand(playerHand, playerCardCount) << endl;
			PrintHand(playerHand, playerCardCount);

			// Ask the Player whether he wants a hit or to stay
			cout << "Hit(h) or stay(s): ";
			cin >> playerChoice;
			if (playerChoice == 'h') 
			{
				playerHand[playerCardCount] = GetNextCard(cardsDealt);
				playerCardCount++;
			} 
			else if (playerChoice == 's')
			{
				playerHit = false;
			} 
			else 
			{
				cout << "Error: Try Again!" << endl;
			}
			cout << endl;

			// Get the Player's current score to update and check for bust.
			playerScore	= ScoreHand(playerHand, playerCardCount);
		} 
		while (playerHit && playerScore < 22);

		// Once the player is done taking hits, check whether he busted
		if (playerScore > 21) 
		{
			// The Player busted. The House wins.
			cout << "**** The House Wins!!! ****" << endl;
			PrintScoresAndHands(houseHand, houseCardCount, playerHand, playerCardCount);
			if(!playAgain())
			{
				break;
			}
		} 
		else 
		{
			// If the player didn't bust, then the house takes hits below 17
			int houseScore = ScoreHand(houseHand, houseCardCount);

			while (houseScore < 17) 
			{
				houseHand[houseCardCount] = GetNextCard(cardsDealt);
				houseCardCount++;
				houseScore = ScoreHand(houseHand, houseCardCount);
			}

			bool houseBust = (houseScore > 21);

			if (houseBust) 
			{
				// The House busted. Player wins
				cout << "**** The Player Wins!!! ****" << endl;
				PrintScoresAndHands(houseHand, houseCardCount, playerHand, playerCardCount);
				if(!playAgain())
				{
					break;
				}
			} 
			else 
			{
				// Compare scores and determine the winner
				if (playerScore == houseScore) 
				{
					// Tie. This is called a "push."
					cout << "**** Tie!!! ****" << endl;
					PrintScoresAndHands(houseHand, houseCardCount, playerHand, playerCardCount);
					if(!playAgain())
					{
						break;
					}
				} 
				else if (playerScore > houseScore) 
				{
					// The Player wins
					cout << "**** The Player Wins!!! ****" << endl;
					PrintScoresAndHands(houseHand, houseCardCount, playerHand, playerCardCount);
					if(!playAgain())
					{
						break;
					}
				} 
				else
				{
					// The House wins
					cout << "**** The House Wins!!! ****" << endl;
					PrintScoresAndHands(houseHand, houseCardCount, playerHand, playerCardCount);
					if(!playAgain())
					{
						break;
					}
				}
			}
		}
	}
	while(true);
	return EXIT_SUCCESS;
}