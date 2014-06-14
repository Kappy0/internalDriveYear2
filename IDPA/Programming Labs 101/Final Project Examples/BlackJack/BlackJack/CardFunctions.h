#include <iostream>
#include <ctime>

using namespace std;

void Shuffle(bool cardsDealt[]);
void PrintCard(int card);
void PrintHand(int hand[], const int cardCount);
int GetNextCard(bool baCardsDealt[]);
int ScoreHand(int iaHand[], const int cardCount);
void PrintScoresAndHands(int houseHand[], const int houseCardCount, int playerHand[], const int playerCardCount);
bool playAgain();