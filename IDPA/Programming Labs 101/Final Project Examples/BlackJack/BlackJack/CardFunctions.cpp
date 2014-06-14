#include "CardFunctions.h"

void Shuffle(bool cardsDealt[]) 
{
	for (int i = 0; i < 52; i++) 
	{
		cardsDealt[i] = false;
	}
}

void PrintCard(int card) 
{
	// Print Rank
	const int rank = (card % 13);

	if (rank == 0) 
	{
		cout << "Ace of ";
	} 
	else if (rank < 9) 
	{
		cout << (rank + 1) << " of ";
	} 
	else if (rank == 9) 
	{
		cout << 10 << " of ";
	} 
	else if (rank == 10) 
	{
		cout << "Jack of ";
	} 
	else if (rank == 11) 
	{
		cout << "Queen of ";
	} 
	else 
	{
		cout << "King of ";
	}

	// Print Suit
	const int suit = (card/13);

	if (suit == 0) 
	{
		cout << "Clubs";
	} 
	else if (suit == 1) 
	{
		cout << "Diamonds";
	} 
	else if (suit == 2) 
	{
		cout << "Hearts";
	} 
	else 
	{
		cout << "Spades";
	}
}

void PrintHand(int hand[], const int cardCount) 
{
	for (int i = 0; i < cardCount; i++) 
	{
		const int nextCard = hand[i];
		PrintCard(nextCard);
		cout << " ";
	}
	cout << endl;
}

int GetNextCard(bool cardsDealt[]) 
{
	bool cardDealt = true;
	int newCard	= -1;

	do 
	{
		newCard = (rand() % 52);
		if (!cardsDealt[newCard]) 
		{
			cardDealt = false;
		}
	} 
	while (cardDealt);

	return newCard;
}

int ScoreHand(int hand[], const int cardCount) 
{
	int aceCount = 0;
	int score = 0;

	for (int i = 0; i < cardCount; i++) 
	{
		const int nextCard = hand[i];
		const int rank = (nextCard % 13);

		if (rank == 0) 
		{
			aceCount++;
			score++;
		} 
		else if (rank < 9) 
		{
			score += (rank + 1);
		} 
		else 
		{
			score += 10;
		}
	}
	while (aceCount > 0 && score < 12) 
	{
		aceCount--;
		score += 10;
	}
	return score;
}

void PrintScoresAndHands(int houseHand[], const int houseCardCount, int playerHand[], const int playerCardCount) 
{
	cout << "House's Hand: Score = " << ScoreHand(houseHand, houseCardCount) << endl;
	PrintHand(houseHand, houseCardCount);
	cout << "Player's Hand: Score = " << ScoreHand(playerHand, playerCardCount) << endl;
	PrintHand(playerHand, playerCardCount);
	cout << endl;
}

bool playAgain()
{
	char answer;
	cout << "Play again(y) or no(n)? ";
	cin >> answer;
	if (answer == 'y') 
	{
		return true;
	} 
	else if (answer == 'n')
	{
		return false;
	} 
	else 
	{
		cout << "Error: Try Again!" << endl;
	}
	cout << endl;
}
