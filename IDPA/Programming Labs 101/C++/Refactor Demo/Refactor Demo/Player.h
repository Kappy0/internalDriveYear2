#include "Card.h"

struct Player
{
   Card* hand;
   int score;

   Player();
   Player(int _handSize);
   void scoreHand(const int cardCount);
   ~Player();
};

Player::Player()
   : hand(0), score(0)
{}

Player::Player(int _handSize)
   : score(0)
{
   this->hand = new Card[_handSize];
}

void Player::scoreHand(const int cardCount)
{
   this->score = 0;

   for(int i = 0; i < cardCount; i++)
   {
      if(this->hand[i].getIsFaceCard())
      {
         this->score += 10;
      }
      else
      {
         this->score += this->hand[i].getRank();
      }
   }
}

Player::~Player()
{
   delete this->hand;
}