#include "Card.h"

Card::Card()
   : rank(0), suit(0), isDrawn(false), isFaceCard(false)
{}

Card::Card(int _rank, int _suit)
{
   this->rank = _rank;
   this->suit = _suit;
   this->isDrawn = false;

   if(this->rank == 1 || this->rank == 11 ||
      this->rank == 12 || this->rank == 13)
   {
      this->isFaceCard = true;
   }
   else
   {
      this->isFaceCard = false;
   }
}

int Card::getRank() const
{
   return this->rank;
}

int Card::getSuit() const
{
   return this->suit;
}

bool Card::getDrawnState() const
{
   return this->isDrawn;
}

bool Card::getIsFaceCard() const
{
   return this->isFaceCard;
}

void Card::setDrawnState(bool state)
{
   this->isDrawn = state;
}

void Card::printCard()
{  
   switch(this->rank)
   {
      case 1:
         {
            cout << "Ace of ";
         }
         break;
      case 11:
         {
            cout << "Jack of ";
         }
         break;
      case 12:
         {
            cout << "Queen of ";
         }
         break;
      case 13:
         {
            cout << "King of ";
         }
         break;
      default:
         {
            cout << this->rank << " of ";
         }
         break;
   }

   switch(this->suit)
   {
      case 0:
         {
            cout << "Hearts" << endl;
         }
         break;
      case 1:
         {
            cout << "Clubs" << endl;
         }
         break;
      case 2:
         {
            cout << "Spades" << endl;
         }
         break;
      case 3:
         {
            cout << "Diamonds" << endl;
         }
         break;
   }
}